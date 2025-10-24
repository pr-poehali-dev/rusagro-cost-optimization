import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Stat {
  title: string;
  value: string;
  change: string;
  trend: string;
  icon: string;
}

interface RepairRequest {
  id: number;
  equipment: string;
  issue: string;
  priority: string;
  date: string;
  status: string;
}

interface CostData {
  month: string;
  planned: number;
  actual: number;
}

interface OverviewTabProps {
  stats: Stat[];
  repairRequests: RepairRequest[];
  costAnalytics: CostData[];
}

const OverviewTab = ({ stats, repairRequests, costAnalytics }: OverviewTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon
                name={stat.icon as any}
                className="text-muted-foreground"
                size={20}
              />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p
                className={`text-xs mt-1 ${
                  stat.trend === 'down'
                    ? 'text-green-600'
                    : stat.trend === 'up'
                    ? 'text-red-600'
                    : 'text-muted-foreground'
                }`}
              >
                {stat.change} к прошлому месяцу
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Динамика затрат</CardTitle>
            <CardDescription>Плановые и фактические затраты</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-4 px-4">
              {costAnalytics.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex gap-1">
                    <div
                      className="flex-1 bg-muted rounded-t"
                      style={{
                        height: `${(data.planned / 1500000) * 200}px`,
                      }}
                    />
                    <div
                      className="flex-1 bg-primary rounded-t"
                      style={{
                        height: `${(data.actual / 1500000) * 200}px`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-muted rounded" />
                <span className="text-xs text-muted-foreground">План</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded" />
                <span className="text-xs text-muted-foreground">Факт</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Критичные заявки</CardTitle>
            <CardDescription>Требуют немедленного внимания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repairRequests.slice(0, 3).map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{request.equipment}</p>
                    <p className="text-xs text-muted-foreground">{request.issue}</p>
                  </div>
                  <Badge
                    variant={
                      request.priority === 'Высокий'
                        ? 'destructive'
                        : request.priority === 'Средний'
                        ? 'default'
                        : 'secondary'
                    }
                  >
                    {request.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
