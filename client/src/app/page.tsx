"use client"

import UserDashboard from '@/components/userDashboard/userDashboard';
export default function HomePage() {
  return (
    <div className='mx-4 my-8 flex flex-col gap-8 md:m-10 lg:mx-10'>
      <UserDashboard />
    </div>
  );
}
