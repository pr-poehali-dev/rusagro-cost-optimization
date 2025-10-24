import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CostData {
  month: string;
  planned: number;
  actual: number;
}

interface AnalyticsTabProps {
  costAnalytics: CostData[];
}

const AnalyticsTab = ({ costAnalytics }: AnalyticsTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Аналитика затрат по месяцам</CardTitle>
          <CardDescription>
            Сравнение плановых и фактических затрат на ремонт и обслуживание
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-end justify-between gap-8 px-8">
            {costAnalytics.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex gap-2">
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-muted rounded-t hover:bg-muted/80 transition-colors cursor-pointer"
                      style={{
                        height: `${(data.planned / 1500000) * 250}px`,
                      }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">
                      {(data.planned / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-primary rounded-t hover:bg-primary/80 transition-colors cursor-pointer"
                      style={{
                        height: `${(data.actual / 1500000) * 250}px`,
                      }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">
                      {(data.actual / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-muted rounded" />
              <span className="text-sm">Плановые затраты</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded" />
              <span className="text-sm">Фактические затраты</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Экономия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">-55 000 ₽</div>
            <p className="text-sm text-muted-foreground mt-1">За октябрь 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Средняя стоимость ТО</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8 200 ₽</div>
            <p className="text-sm text-muted-foreground mt-1">На единицу техники</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Прогноз на месяц</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1 380 000 ₽</div>
            <p className="text-sm text-muted-foreground mt-1">Ноябрь 2025</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsTab;
