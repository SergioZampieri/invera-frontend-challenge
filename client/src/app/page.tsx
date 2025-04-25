import { UserCards } from '@/components/userDashboard/userCards/userCards';
import { UserCardsSkeleton } from '@/components/userDashboard/userCards/userCardsSkeleton';
import { UserChart } from '@/components/userDashboard/userChart';
import UserChartSkeleton from '@/components/userDashboard/userChart/userChartSkeleton';
import { UserHeader } from '@/components/userDashboard/userHeader';
import { UserTable } from '@/components/userDashboard/userTable';
import { Statistics, UserType } from '@/types';


const chartMock: UserType = {
  totalUsers: 150000,
  distribution: [
    {
      type: "Organic",
      percentage: 30
    },
    {
      type: "Social",
      percentage: 50
    },
    {
      type: "Direct",
      percentage: 20
    }
  ]
}

const statsMock: Statistics = {
  totalUsers: 50,
  newUsers: 18,
  topUsers: 40,
  otherUsers: 10
};




export default function HomePage() {
  return (
    <div className='flex flex-col gap-8 mx-4 my-8 md:m-12 lg:mx-10'>
      <UserHeader/>      
      {statsMock ? <UserCards statistics={statsMock} /> : <UserCardsSkeleton cardsToRender={4} />}
      {chartMock ? <UserChart />  : <UserChartSkeleton statsToRender={3} />}
      <UserTable />
    </div>
  );
}