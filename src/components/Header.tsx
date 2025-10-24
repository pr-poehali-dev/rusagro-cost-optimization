import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeTab: string;
}

const Header = ({ activeTab }: HeaderProps) => {
  const getTitleByTab = (tab: string) => {
    switch (tab) {
      case 'overview':
        return 'Панель управления';
      case 'analytics':
        return 'Аналитика затрат';
      case 'requests':
        return 'Управление заявками';
      case 'equipment':
        return 'База оборудования';
      case 'reports':
        return 'Отчеты и статистика';
      case 'contacts':
        return 'Контакты';
      default:
        return 'Панель управления';
    }
  };

  return (
    <header className="bg-card border-b border-border px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {getTitleByTab(activeTab)}
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
  );
};

export default Header;
