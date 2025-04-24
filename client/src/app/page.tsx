import { UserCards } from '@/components/userDashboard/userCards/userCards';
import { UserCardsSkeleton } from '@/components/userDashboard/userCards/userCardsSkeleton';
import { UserChart } from '@/components/userDashboard/userChart';
import UserChartSkeleton from '@/components/userDashboard/userChart/userChartSkeleton';
import { UserHeader } from '@/components/userDashboard/userHeader';
// import { UserTable } from '@/components/userDashboard/userTable';

export default function HomePage() {
  const statistics = undefined;
  return (
    <div className='flex flex-col gap-8 mx-4 my-8 md:m-12 lg:mx-10'>
      <UserHeader/>      
      {statistics ? <UserCards statistics={statistics} /> : <UserCardsSkeleton cardsToRender={4} />}
      {false ? <UserChart />  : <UserChartSkeleton statsToRender={3} />}
      {/* <UserTable/> */}
    </div>
  );
}
