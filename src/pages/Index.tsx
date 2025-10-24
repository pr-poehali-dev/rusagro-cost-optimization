import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const equipmentData = [
    {
      id: 1,
      name: 'Комбайн ACROS 580',
      type: 'Комбайн',
      status: 'Требует ТО',
      nextService: '15 дней',
      cost: 45000,
      location: 'Поле №12',
    },
    {
      id: 2,
      name: 'Трактор МТЗ-82',
      type: 'Трактор',
      status: 'Исправен',
      nextService: '45 дней',
      cost: 12000,
      location: 'Склад №3',
    },
    {
      id: 3,
      name: 'Опрыскиватель AMAZONE',
      type: 'Опрыскиватель',
      status: 'В ремонте',
      nextService: '-',
      cost: 28000,
      location: 'Ремзона',
    },
    {
      id: 4,
      name: 'Сеялка Horsch Pronto',
      type: 'Сеялка',
      status: 'Исправен',
      nextService: '60 дней',
      cost: 8500,
      location: 'Поле №8',
    },
  ];

  const repairRequests = [
    {
      id: 1,
      equipment: 'Опрыскиватель AMAZONE',
      issue: 'Течь гидросистемы',
      priority: 'Высокий',
      date: '20.10.2025',
      status: 'В работе',
    },
    {
      id: 2,
      equipment: 'Комбайн ACROS 580',
      issue: 'Плановое ТО',
      priority: 'Средний',
      date: '08.11.2025',
      status: 'Запланирован',
    },
    {
      id: 3,
      equipment: 'Трактор Кировец К-744',
      issue: 'Замена фильтров',
      priority: 'Низкий',
      date: '15.11.2025',
      status: 'Новая',
    },
  ];

  const stats = [
    {
      title: 'Общие затраты за месяц',
      value: '1 245 000 ₽',
      change: '-12%',
      trend: 'down',
      icon: 'TrendingDown',
    },
    {
      title: 'Активных заявок',
      value: '23',
      change: '+5',
      trend: 'up',
      icon: 'Wrench',
    },
    {
      title: 'Единиц техники',
      value: '156',
      change: '0',
      trend: 'neutral',
      icon: 'Truck',
    },
    {
      title: 'Требует внимания',
      value: '8',
      change: '-2',
      trend: 'down',
      icon: 'AlertCircle',
    },
  ];

  const costAnalytics = [
    { month: 'Июн', planned: 950000, actual: 1020000 },
    { month: 'Июл', planned: 1100000, actual: 1080000 },
    { month: 'Авг', planned: 1050000, actual: 1150000 },
    { month: 'Сен', planned: 1200000, actual: 1180000 },
    { month: 'Окт', planned: 1300000, actual: 1245000 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <Icon name="Tractor" className="text-primary" size={32} />
              <h1 className="text-xl font-bold text-white">РУСАГРО</h1>
            </div>
            <nav className="space-y-2">
              <Button
                variant={activeTab === 'overview' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('overview')}
              >
                <Icon name="LayoutDashboard" size={20} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeTab === 'analytics' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('analytics')}
              >
                <Icon name="BarChart3" size={20} className="mr-2" />
                Аналитика затрат
              </Button>
              <Button
                variant={activeTab === 'requests' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('requests')}
              >
                <Icon name="Wrench" size={20} className="mr-2" />
                Заявки на ремонт
              </Button>
              <Button
                variant={activeTab === 'equipment' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('equipment')}
              >
                <Icon name="Database" size={20} className="mr-2" />
                База оборудования
              </Button>
              <Button
                variant={activeTab === 'reports' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('reports')}
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Отчеты
              </Button>
              <Button
                variant={activeTab === 'contacts' ? 'default' : 'ghost'}
                className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
                onClick={() => setActiveTab('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          <header className="bg-card border-b border-border px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {activeTab === 'overview' && 'Панель управления'}
                  {activeTab === 'analytics' && 'Аналитика затрат'}
                  {activeTab === 'requests' && 'Управление заявками'}
                  {activeTab === 'equipment' && 'База оборудования'}
                  {activeTab === 'reports' && 'Отчеты и статистика'}
                  {activeTab === 'contacts' && 'Контакты'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Система оптимизации затрат на ремонт и ТО
                </p>
              </div>
              <Button>
                <Icon name="Plus" size={18} className="mr-2" />
                Создать заявку
              </Button>
            </div>
          </header>

          <div className="p-8">
            {activeTab === 'overview' && (
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
            )}

            {activeTab === 'analytics' && (
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
            )}

            {activeTab === 'requests' && (
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
            )}

            {activeTab === 'equipment' && (
              <div className="space-y-6">
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
            )}

            {activeTab === 'reports' && (
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
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Контактная информация</CardTitle>
                    <CardDescription>Свяжитесь с отделом технического обслуживания</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (800) 555-35-35 (горячая линия)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">tech.support@rusagro.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Адрес</h4>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Примерная, д. 123
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Режим работы</h4>
                        <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                        <p className="text-muted-foreground">Сб-Вс: выходной</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
