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
    <section className='flex flex-col gap-20 rounded-2xl border-brand-border bg-brand-background-primary-dark md:flex-row md:gap-0'>
      <div className='relative flex h-64 items-center justify-center md:w-1/2'>
        <Donut />
      </div>
      <div className='m-auto flex w-full max-w-[400px] flex-col justify-center space-y-8'>
        {distributionWithColors.map((element) => (
          <div
            key={element.type}
            className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div
                className='h-2 w-2 rounded-full'
                style={{ backgroundColor: element.color }}
              />
              <span className='text-sm text-brand-text-primary-dark'>{element.type}</span>
            </div>
            <span className='text-sm font-medium text-brand-text-secondary-dark'>{element.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
