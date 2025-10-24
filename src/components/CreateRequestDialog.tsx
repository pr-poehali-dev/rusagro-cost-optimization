import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface CreateRequestDialogProps {
  onCreateRequest: (data: any) => Promise<boolean>;
}

const CreateRequestDialog = ({ onCreateRequest }: CreateRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    equipment: '',
    issue: '',
    priority: 'Средний',
    date: new Date().toLocaleDateString('ru-RU'),
    status: 'Новая',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onCreateRequest(formData);
    if (success) {
      setOpen(false);
      setFormData({
        equipment: '',
        issue: '',
        priority: 'Средний',
        date: new Date().toLocaleDateString('ru-RU'),
        status: 'Новая',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Icon name="Plus" size={16} className="mr-2" />
          Создать заявку
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Новая заявка на ремонт</DialogTitle>
          <DialogDescription>
            Заполните данные для создания заявки на обслуживание техники
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="equipment">Оборудование</Label>
            <Input
              id="equipment"
              placeholder="Название техники"
              value={formData.equipment}
              onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue">Описание проблемы</Label>
            <Textarea
              id="issue"
              placeholder="Опишите неисправность или работы"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="priority">Приоритет</Label>
            <Select
              value={formData.priority}
              onValueChange={(value) => setFormData({ ...formData, priority: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Низкий">Низкий</SelectItem>
                <SelectItem value="Средний">Средний</SelectItem>
                <SelectItem value="Высокий">Высокий</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Дата</Label>
            <Input
              id="date"
              type="text"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Отмена
            </Button>
            <Button type="submit">
              Создать
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRequestDialog;
