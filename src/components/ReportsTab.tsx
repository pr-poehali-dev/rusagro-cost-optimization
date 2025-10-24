import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ReportsTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Icon name="FileText" className="mb-2" size={32} />
            <CardTitle className="text-lg">Отчет по затратам</CardTitle>
            <CardDescription>Ежемесячный отчет по всем затратам</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Icon name="PieChart" className="mb-2" size={32} />
            <CardTitle className="text-lg">Аналитика по технике</CardTitle>
            <CardDescription>Распределение затрат по типам</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <Icon name="Calendar" className="mb-2" size={32} />
            <CardTitle className="text-lg">График ТО</CardTitle>
            <CardDescription>План обслуживания на квартал</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportsTab;
