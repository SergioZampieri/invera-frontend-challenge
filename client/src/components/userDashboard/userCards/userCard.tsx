import { KebabVertical } from '@/components/iconography';
import { Card, CardContent } from '@/components/ui/card';

interface userCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

//TODO: implement dark styling
export function UserCard({ title, value, icon }: userCardProps) {
  return (
    <Card
      key={title}
      className='w-full rounded-xl border border-brand-border bg-card sm:w-1/2 lg:w-1/4'>
      <CardContent className='flex items-center justify-between p-6'>
        <div className='flex items-center space-x-4'>
          <div className='flex size-10 items-center justify-center rounded-full bg-background'>{icon}</div>
          <div>
            <p className='text-[1rem] font-bold text-brand-text-primary dark:text-brand-text-primary-dark'>{title}</p>
            <p className='text-sm font-normal text-brand-text-primary dark:text-brand-text-secondary-dark'>{value}</p>
          </div>
        </div>
        <button className='text-brand-text-secondary dark:text-brand-text-secondary-dark'>
          <KebabVertical />
        </button>
      </CardContent>
    </Card>
  );
}
