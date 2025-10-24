import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OverviewTab from '@/components/OverviewTab';
import AnalyticsTab from '@/components/AnalyticsTab';
import RequestsTab from '@/components/RequestsTab';
import EquipmentTab from '@/components/EquipmentTab';
import ReportsTab from '@/components/ReportsTab';
import ContactsTab from '@/components/ContactsTab';

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
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1">
          <Header activeTab={activeTab} />
          <div className="p-8">
            {activeTab === 'overview' && (
              <OverviewTab
                stats={stats}
                repairRequests={repairRequests}
                costAnalytics={costAnalytics}
              />
            )}
            {activeTab === 'analytics' && <AnalyticsTab costAnalytics={costAnalytics} />}
            {activeTab === 'requests' && <RequestsTab repairRequests={repairRequests} />}
            {activeTab === 'equipment' && <EquipmentTab equipmentData={equipmentData} />}
            {activeTab === 'reports' && <ReportsTab />}
            {activeTab === 'contacts' && <ContactsTab />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
