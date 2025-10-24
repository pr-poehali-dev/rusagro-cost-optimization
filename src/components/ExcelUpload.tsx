import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import * as XLSX from 'xlsx';

interface ExcelUploadProps {
  onDataLoad: (data: any[], type: 'equipment' | 'requests') => void;
  type: 'equipment' | 'requests';
}

const ExcelUpload = ({ onDataLoad, type }: ExcelUploadProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = event.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        onDataLoad(jsonData, type);
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки файла:', error);
        setIsLoading(false);
      }
    };

    reader.readAsBinaryString(file);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Загрузить из Excel</CardTitle>
        <CardDescription>
          {type === 'equipment' 
            ? 'Загрузите данные об оборудовании из файла Excel' 
            : 'Загрузите заявки на ремонт из файла Excel'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="relative">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Icon name="Upload" size={16} className="mr-2" />
            {isLoading ? 'Загрузка...' : 'Выбрать файл'}
          </Button>
          {fileName && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="FileSpreadsheet" size={16} />
              <span>{fileName}</span>
            </div>
          )}
        </div>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Формат Excel файла:</p>
          {type === 'equipment' ? (
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• name - название техники</li>
              <li>• type - тип (Комбайн, Трактор и т.д.)</li>
              <li>• status - статус (Исправен, Требует ТО, В ремонте)</li>
              <li>• nextService - следующее ТО (например, "15 дней")</li>
              <li>• cost - стоимость ТО (число)</li>
              <li>• location - местоположение</li>
            </ul>
          ) : (
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• equipment - название оборудования</li>
              <li>• issue - описание проблемы</li>
              <li>• priority - приоритет (Высокий, Средний, Низкий)</li>
              <li>• date - дата (например, "20.10.2025")</li>
              <li>• status - статус (Новая, В работе, Запланирован)</li>
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExcelUpload;
