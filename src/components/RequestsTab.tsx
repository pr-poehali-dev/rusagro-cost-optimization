import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface RepairRequest {
  id: number;
  equipment: string;
  issue: string;
  priority: string;
  date: string;
  status: string;
}

interface RequestsTabProps {
  repairRequests: RepairRequest[];
}

const RequestsTab = ({ repairRequests }: RequestsTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Активные заявки</CardTitle>
              <CardDescription>Управление заявками на ремонт и обслуживание</CardDescription>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все заявки</SelectItem>
                  <SelectItem value="new">Новые</SelectItem>
                  <SelectItem value="inprogress">В работе</SelectItem>
                  <SelectItem value="planned">Запланированы</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Поиск..." className="w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {repairRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Icon name="Wrench" className="text-muted-foreground" size={24} />
                  <div className="flex-1">
                    <h4 className="font-semibold">{request.equipment}</h4>
                    <p className="text-sm text-muted-foreground">{request.issue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">{request.date}</p>
                    <Badge
                      variant={
                        request.status === 'В работе'
                          ? 'default'
                          : request.status === 'Запланирован'
                          ? 'secondary'
                          : 'outline'
                      }
                      className="mt-1"
                    >
                      {request.status}
                    </Badge>
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
                  <Button size="sm" variant="outline">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestsTab;
