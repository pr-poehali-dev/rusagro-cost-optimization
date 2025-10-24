import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import ExcelUpload from '@/components/ExcelUpload';

interface Equipment {
  id: number;
  name: string;
  type: string;
  status: string;
  nextService: string;
  cost: number;
  location: string;
}

interface EquipmentTabProps {
  equipmentData: Equipment[];
  onEquipmentLoad: (data: any[]) => void;
}

const EquipmentTab = ({ equipmentData, onEquipmentLoad }: EquipmentTabProps) => {
  return (
    <div className="space-y-6">
      <ExcelUpload onDataLoad={(data) => onEquipmentLoad(data)} type="equipment" />
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Оборудование и техника</CardTitle>
              <CardDescription>База всего оборудования АПК</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы</SelectItem>
                  <SelectItem value="combiner">Комбайны</SelectItem>
                  <SelectItem value="tractor">Трактора</SelectItem>
                  <SelectItem value="sprayer">Опрыскиватели</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Поиск..." className="w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipmentData.map((equipment) => (
              <Card key={equipment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{equipment.name}</CardTitle>
                      <CardDescription>{equipment.type}</CardDescription>
                    </div>
                    <Badge
                      variant={
                        equipment.status === 'Исправен'
                          ? 'secondary'
                          : equipment.status === 'Требует ТО'
                          ? 'default'
                          : 'destructive'
                      }
                    >
                      {equipment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Следующее ТО:</span>
                      <span className="font-medium">{equipment.nextService}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Стоимость ТО:</span>
                      <span className="font-medium">{equipment.cost.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Местоположение:</span>
                      <span className="font-medium">{equipment.location}</span>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EquipmentTab;