import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsTab = () => {
  return (
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
  );
};

export default ContactsTab;
