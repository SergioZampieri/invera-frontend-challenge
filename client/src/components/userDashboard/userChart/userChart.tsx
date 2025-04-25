"use client";

import { Donut } from './donut';
import UserChartSkeleton from './userChartSkeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useUserType } from '@/hooks/useUserType';
import { chartUsersFormatter } from '@/lib/chartUsersFormatter';


export function UserChart() {

const {data: userType, isLoading } = useUserType()

if (isLoading)  (<UserChartSkeleton statsToRender={3}/>)

  const colors = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];
  const distributionWithColors = userType?.distribution?.map((item, index) => {
    return {
      ...item,
      color: colors[index]
    };
  });

  return (
    <section className='rounded-2xl border bg-card p-8'>
      <h2 className='text-title-text text-2xl font-bold'>Statistics</h2>
      {/*header de la seccion*/}
      <div className='flex flex-col gap-20 md:flex-row md:gap-0 pt-8 justify-between'>
        <div className='relative flex h-64 items-center justify-center md:w-1/3 md:pl-8'>
          {/*Grafico radial (dona)*/}
          <Donut />
        </div>
        {/*Leyenda/referencias al grafico*/}
        <div className='flex w-full flex-col justify-center space-y-4 md:w-1/3'>
          {distributionWithColors?.map((element) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    key={element.type}
                    className='justify-between rounded p-2 md:max-w-[22rem] hover:bg-brand-primary-muted flex items-center'>
                    <div className='flex items-center space-x-2'>
                      <div
                        className='h-2 w-2 rounded-full'
                        style={{ backgroundColor: element.color }}
                      />
                      <span className='text-lg text-card-foreground'>{element.type}</span>
                    </div>
                    <span className='text-lg font-medium text-card-foreground'>{element.percentage}%</span>
                  </div>
                </TooltipTrigger>
                {/*tooltip de calculo de numero de usuarios por key*/}
                <TooltipContent>
                  <p className='lowercase'>
                    {userType? chartUsersFormatter( (userType?.totalUsers * element.percentage) / 100) : "there is an error"} users are {element.type}!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </section>
  );
}