'use client';

import { UserCard } from './userCard';
import { Heart, OtherUsers, User, Users } from '@/components/iconography';

import { UserCardsSkeleton } from './userCardsSkeleton';
import { useStatistics } from '@/hooks/useStatistic';

export function UserCards() {
  const { data, isLoading } = useStatistics();

  if (isLoading) return <UserCardsSkeleton cardsToRender={4}/>

  const stats = [
    {
      title: 'Total Users',
      icon: <Users />,
      value: data?.totalUsers ?? undefined
    },
    {
      title: 'New Users',
      icon: <User />,
      value: data?.newUsers ?? undefined
    },
    {
      title: 'Top Users',
      icon: <Heart />,
      value: data?.topUsers ?? undefined
    },
    {
      title: 'Other Users',
      icon: <OtherUsers />,
      value: data?.otherUsers ?? undefined
    }
  ];

  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {stats.map((stat, index) => (
        <UserCard
          title={stat.title}
          icon={stat.icon}
          value={stat.value!}
          key={index}
        />
      ))}
    </div>
  );
}
