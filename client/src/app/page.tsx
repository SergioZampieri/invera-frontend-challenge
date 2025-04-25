import { UserCards } from '@/components/userDashboard/userCards/userCards';
import { UserChart } from '@/components/userDashboard/userChart';
import UserChartSkeleton from '@/components/userDashboard/userChart/userChartSkeleton';
import { UserHeader } from '@/components/userDashboard/userHeader';
import { UserTable } from '@/components/userDashboard/userTable';

export default function HomePage() {
  return (
    <div className='mx-4 my-8 flex flex-col gap-8 md:m-10 lg:mx-10'>
      <UserHeader />
      <UserCards />
      <UserChart />
      <UserTable />
    </div>
  );
}
