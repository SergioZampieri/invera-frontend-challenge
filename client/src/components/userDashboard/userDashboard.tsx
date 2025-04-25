"use client"

import { UserCards } from '@/components/userDashboard/userCards/userCards';
import { UserChart } from '@/components/userDashboard/userChart';
import { UserHeader } from '@/components/userDashboard/userHeader';
import { UserTable } from '@/components/userDashboard/userTable';

export default function UserDashboard() {
  return (
    <>
      <UserHeader />
      <UserCards />
      <UserChart />
      <UserTable />
    </>
  );
}
