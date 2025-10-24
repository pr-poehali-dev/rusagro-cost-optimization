import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
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
            onClick={() => onTabChange('overview')}
          >
            <Icon name="LayoutDashboard" size={20} className="mr-2" />
            Главная
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'ghost'}
            className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            onClick={() => onTabChange('analytics')}
          >
            <Icon name="BarChart3" size={20} className="mr-2" />
            Аналитика затрат
          </Button>
          <Button
            variant={activeTab === 'requests' ? 'default' : 'ghost'}
            className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            onClick={() => onTabChange('requests')}
          >
            <Icon name="Wrench" size={20} className="mr-2" />
            Заявки на ремонт
          </Button>
          <Button
            variant={activeTab === 'equipment' ? 'default' : 'ghost'}
            className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            onClick={() => onTabChange('equipment')}
          >
            <Icon name="Database" size={20} className="mr-2" />
            База оборудования
          </Button>
          <Button
            variant={activeTab === 'reports' ? 'default' : 'ghost'}
            className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            onClick={() => onTabChange('reports')}
          >
            <Icon name="FileText" size={20} className="mr-2" />
            Отчеты
          </Button>
          <Button
            variant={activeTab === 'contacts' ? 'default' : 'ghost'}
            className="w-full justify-start text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            onClick={() => onTabChange('contacts')}
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Контакты
          </Button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
