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
    { id: 1, name: 'Комбайн ACROS 580', type: 'Комбайн', status: 'Требует ТО', nextService: '15 дней', cost: 45000, location: 'Поле №12' },
    { id: 2, name: 'Трактор МТЗ-82', type: 'Трактор', status: 'Исправен', nextService: '45 дней', cost: 12000, location: 'Склад №3' },
    { id: 3, name: 'Опрыскиватель AMAZONE', type: 'Опрыскиватель', status: 'В ремонте', nextService: '-', cost: 28000, location: 'Ремзона' },
    { id: 4, name: 'Сеялка Horsch Pronto', type: 'Сеялка', status: 'Исправен', nextService: '60 дней', cost: 8500, location: 'Поле №8' },
    { id: 5, name: 'Комбайн John Deere S790', type: 'Комбайн', status: 'Исправен', nextService: '30 дней', cost: 52000, location: 'Поле №5' },
    { id: 6, name: 'Трактор Кировец К-744', type: 'Трактор', status: 'Требует ТО', nextService: '10 дней', cost: 35000, location: 'Поле №15' },
    { id: 7, name: 'Плуг ПЛН-8-35', type: 'Плуг', status: 'Исправен', nextService: '90 дней', cost: 5000, location: 'Склад №1' },
    { id: 8, name: 'Культиватор КПС-8', type: 'Культиватор', status: 'Исправен', nextService: '75 дней', cost: 6500, location: 'Склад №2' },
    { id: 9, name: 'Комбайн CLAAS Lexion 780', type: 'Комбайн', status: 'В ремонте', nextService: '-', cost: 58000, location: 'Ремзона' },
    { id: 10, name: 'Трактор Беларус 3022', type: 'Трактор', status: 'Исправен', nextService: '55 дней', cost: 18000, location: 'Поле №22' },
    { id: 11, name: 'Опрыскиватель John Deere R4045', type: 'Опрыскиватель', status: 'Требует ТО', nextService: '8 дней', cost: 32000, location: 'Поле №7' },
    { id: 12, name: 'Сеялка АГРАТОР', type: 'Сеялка', status: 'Исправен', nextService: '65 дней', cost: 9500, location: 'Склад №4' },
    { id: 13, name: 'Борона БДТ-7', type: 'Борона', status: 'Исправен', nextService: '100 дней', cost: 4000, location: 'Склад №1' },
    { id: 14, name: 'Прицеп ПТС-12', type: 'Прицеп', status: 'Требует ТО', nextService: '20 дней', cost: 7000, location: 'Склад №5' },
    { id: 15, name: 'Комбайн New Holland CR10.90', type: 'Комбайн', status: 'Исправен', nextService: '40 дней', cost: 55000, location: 'Поле №18' },
    { id: 16, name: 'Трактор Fendt 939', type: 'Трактор', status: 'Исправен', nextService: '50 дней', cost: 28000, location: 'Поле №10' },
    { id: 17, name: 'Опрыскиватель Berthoud Boxer 4000', type: 'Опрыскиватель', status: 'В ремонте', nextService: '-', cost: 30000, location: 'Ремзона' },
    { id: 18, name: 'Сеялка Amazone Condor', type: 'Сеялка', status: 'Исправен', nextService: '70 дней', cost: 11000, location: 'Поле №3' },
    { id: 19, name: 'Культиватор Lemken Smaragd', type: 'Культиватор', status: 'Требует ТО', nextService: '12 дней', cost: 8000, location: 'Склад №2' },
    { id: 20, name: 'Плуг Lemken Juwel 8', type: 'Плуг', status: 'Исправен', nextService: '85 дней', cost: 6000, location: 'Склад №1' },
    { id: 21, name: 'Трактор Case IH Magnum 340', type: 'Трактор', status: 'Исправен', nextService: '60 дней', cost: 25000, location: 'Поле №20' },
    { id: 22, name: 'Комбайн Ростсельмаш Torum 785', type: 'Комбайн', status: 'Требует ТО', nextService: '18 дней', cost: 48000, location: 'Поле №14' },
    { id: 23, name: 'Опрыскиватель Hardi Commander', type: 'Опрыскиватель', status: 'Исправен', nextService: '35 дней', cost: 27000, location: 'Поле №9' },
    { id: 24, name: 'Сеялка Great Plains', type: 'Сеялка', status: 'Исправен', nextService: '80 дней', cost: 10000, location: 'Склад №4' },
    { id: 25, name: 'Борона Lemken Rubin', type: 'Борона', status: 'В ремонте', nextService: '-', cost: 5500, location: 'Ремзона' },
    { id: 26, name: 'Прицеп МАЗ-856102', type: 'Прицеп', status: 'Исправен', nextService: '95 дней', cost: 8500, location: 'Склад №5' },
    { id: 27, name: 'Трактор Valtra T234', type: 'Трактор', status: 'Требует ТО', nextService: '7 дней', cost: 22000, location: 'Поле №11' },
    { id: 28, name: 'Культиватор Horsch Terrano', type: 'Культиватор', status: 'Исправен', nextService: '68 дней', cost: 9000, location: 'Поле №6' },
    { id: 29, name: 'Опрыскиватель Kuhn Metris', type: 'Опрыскиватель', status: 'Исправен', nextService: '42 дней', cost: 29000, location: 'Поле №16' },
    { id: 30, name: 'Комбайн Massey Ferguson IDEAL', type: 'Комбайн', status: 'Исправен', nextService: '48 дней', cost: 51000, location: 'Поле №4' },
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