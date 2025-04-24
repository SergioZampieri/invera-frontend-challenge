import { UserCardContainer, UserCardContainerSkeleton } from "./userCards";

const statisticsData = undefined
export function UserDashBoard() {
  return (
    <div className='flex flex-col gap-8 mx-4 my-8 md:m-12 lg:mx-10'>
      
      { statisticsData ? 
        <UserCardContainer statistics={statisticsData}/>
        :
        <UserCardContainerSkeleton/>
      }
        
    </div>
  );
}
