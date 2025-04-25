import { Card } from '@/components/ui/card';
import { Donut } from './donut';

const users = {
  totalUsers: 150000,
  distribution: [
    {
      type: 'Organic',
      percentage: 30
    },
    {
      type: 'Social',
      percentage: 50
    },
    {
      type: 'Direct',
      percentage: 20
    }
  ]
};

export function UserChart() {
  const colors = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))'];
  const distributionWithColors = users.distribution.map((item, index) => {
    return {
      ...item,
      color: colors[index]
    };
  });

  return (
    <section className='flex flex-col gap-20 rounded-2xl md:flex-row md:gap-0 border bg-card p-8'>
      {/*header de la seccion*/}
      <h2 className='text-title-text text-2xl font-bold'>Statistics</h2>
        {/*Grafico radial (dona)*/}
      <div className='relative flex h-64 items-center justify-center md:w-1/2'>
        <Donut />
      </div>
        {/*Leyenda/referencias al grafico*/}
      <div className='m-auto flex w-full max-w-[400px] flex-col justify-center space-y-8'>
        {distributionWithColors.map((element) => (
          <div
            key={element.type}
            className='flex items-center justify-between md:max-w-[22rem]'>
            <div className='flex items-center space-x-2'>
              <div
                className='h-2 w-2 rounded-full'
                style={{ backgroundColor: element.color }}
              />
              <span className='text-lg text-card-foreground '>{element.type}</span>
            </div>
            <span className='text-lg font-medium text-card-foreground'>{element.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
