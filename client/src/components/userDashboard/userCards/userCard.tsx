import { KebabVertical } from '@/components/iconography';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface userCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

export function UserCard({ title, value, icon }: userCardProps) {
  return (
    <Card
      key={title}
      className='w-full md:w-[48%] lg:w-[23%] rounded-xl border'>
      <CardContent className='flex items-center justify-between p-6 mx-3'>
        <div className='flex items-center space-x-4'>
          <div className='flex size-10 items-center justify-center rounded-full text-brand-primary bg-brand-primary-muted hover:bg-brand-secondary'>{icon}</div>
          <div>
            <p className='text-[1rem] font-bold'>{title}</p>
            <p className='text-sm font-normal'>{value}</p>
          </div>
        </div>
        <Button className='bg-transparent hover:bg-brand-primary-muted rounded-full'>
          <KebabVertical className='text-brand-primary' />
        </Button>
      </CardContent>
    </Card>
  );
}
