import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import OverviewTab from '@/components/OverviewTab';
import AnalyticsTab from '@/components/AnalyticsTab';
import RequestsTab from '@/components/RequestsTab';
import EquipmentTab from '@/components/EquipmentTab';
import ReportsTab from '@/components/ReportsTab';
import ContactsTab from '@/components/ContactsTab';

const EQUIPMENT_API = 'https://functions.poehali.dev/57174505-7bf1-4851-81b8-3816e01f2bc1';
const REQUESTS_API = 'https://functions.poehali.dev/78fe6328-16b4-4622-9191-d215a7e9480b';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [equipmentData, setEquipmentData] = useState([]);
  const [repairRequests, setRepairRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEquipment();
    loadRequests();
  }, []);

  const loadEquipment = async () => {
    try {
      const response = await fetch(EQUIPMENT_API);
      const data = await response.json();
      setEquipmentData(data);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка загрузки оборудования:', error);
      setLoading(false);
    }
  };

  const loadRequests = async () => {
    try {
      const response = await fetch(REQUESTS_API);
      const data = await response.json();
      setRepairRequests(data);
    } catch (error) {
      console.error('Ошибка загрузки заявок:', error);
    }
  };

  const handleCreateRequest = async (requestData: any) => {
    try {
      const response = await fetch(REQUESTS_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });
      
      if (response.ok) {
        loadRequests();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Ошибка создания заявки:', error);
      return false;
    }
  };

  const handleEquipmentLoad = (data: any[]) => {
    setEquipmentData(data);
  };

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
      value: repairRequests.length.toString(),
      change: '+5',
      trend: 'up',
      icon: 'Wrench',
    },
    {
      title: 'Единиц техники',
      value: equipmentData.length.toString(),
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Загрузка...</p>
        </div>
      </div>
    );
  }

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
            {activeTab === 'requests' && (
              <RequestsTab 
                repairRequests={repairRequests} 
                onCreateRequest={handleCreateRequest}
              />
            )}
            {activeTab === 'equipment' && (
              <EquipmentTab 
                equipmentData={equipmentData}
                onEquipmentLoad={handleEquipmentLoad}
              />
            )}
            {activeTab === 'reports' && <ReportsTab />}
            {activeTab === 'contacts' && <ContactsTab />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
