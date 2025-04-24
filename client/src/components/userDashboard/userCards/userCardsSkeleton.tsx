import { Skeleton } from '@/components/ui/skeleton';

interface UserCardsSkeletonProps {
  cardsToRender: number;
}

export function UserCardsSkeleton({ cardsToRender }: UserCardsSkeletonProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 border border-border p-6 md:flex-row md:gap-10 md:flex-wrap bg-brand-background-secondary rounded-xl dark:bg-brand-background-secondary-dark'>
      {Array.from({ length: cardsToRender }).map((_, index) => (
        <div
          key={index}
          className={` w-1/${cardsToRender}}`}>
          <div className='flex items-center space-x-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
              <Skeleton className='h-4 w-[200px]' />
              <Skeleton className='h-4 w-[150px]' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
