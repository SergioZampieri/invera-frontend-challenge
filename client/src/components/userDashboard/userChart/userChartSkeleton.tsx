import { Skeleton } from "@/components/ui/skeleton";

interface UserChartSkeletonProps {
  statsToRender: number;
}

export default function UserChartSkeleton({ statsToRender }: UserChartSkeletonProps) {
  return (
    <div className='bg-brand-background-secondary rounded-xl border border-border p-6 dark:bg-brand-background-secondary-dark'>
      {/* Title */}
      <Skeleton className=' mb-12 h-6 w-48 rounded'/>
      <div className='flex flex-col md:flex-row md:items-center'>
        {/* donut */}
        <div
          className='mb-10 flex justify-center md:w-1/2 lg:mb-0'
          aria-hidden='true'>
          <div className='relative h-[200px] w-[200px] rounded-full'>
            <Skeleton className=' border-8 p-6 rounded-full'>
              <Skeleton className=' border-8 p-6 rounded-full'>
                <Skeleton className=' border-8 p-6 rounded-full'></Skeleton>
              </Skeleton>
            </Skeleton>
          </div>
        </div>
        {/* keys */}
        <div className='flex flex-col gap-8 md:w-1/2 items-center'>
          {Array.from({ length: statsToRender }).map((_, index) => (
            <div
              key={index}
              className='animate-pulse gap-2 md:pl-6 lg:pr-36'>
              <div className='flex items-center gap-2'>
                <Skeleton className='size-2 rounded-full'/>
                <Skeleton className='h-4 w-52 rounded-sm'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
