import { Heart, OtherUsers, User, Users } from '@/components/iconography';
import { Statistics } from '@/types';
import { UserCard } from './userCard';

interface StatCardsProps {
  statistics: Statistics;
}

export function UserCards({ statistics }: StatCardsProps) {
  const stats = [
    {
      title: 'Total Users',
      icon: <Users />,
      value: statistics.totalUsers
    },
    {
      title: 'New Users',
      icon: <User />,
      value: statistics.newUsers
    },
    {
      title: 'Top Users',
      icon: <Heart />,
      value: statistics.topUsers
    },
    {
      title: 'Other Users',
      icon: <OtherUsers />,
      value: statistics.otherUsers
    }
  ];

  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {stats.map((stat, index) => (
        <UserCard
          title={stat.title}
          icon={stat.icon}
          value={stat.value}
          key={index}
        />
      ))}
    </div>
  );
}