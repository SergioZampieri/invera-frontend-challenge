'use client';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Cell, RadialBar, RadialBarChart } from 'recharts';

const chartData = [
  { key: 'organic', values: 70, fill: 'var(--color-organic)' },
  { key: 'social', values: 50, fill: 'var(--color-social)' },
  { key: 'direct', values: 30, fill: 'var(--color-direct)' },
  { key: '', values: 100, fill: 'var(--color-null)' }
];
const chartConfig = {
  values: {
    label: 'Values'
  },
  null: {
    label: 'total',
    color: 'transparent'
  },
  organic: {
    label: 'Organic',
    color: 'hsl(var(--chart-1))'
  },
  social: {
    label: 'Social',
    color: 'hsl(var(--chart-2))'
  },
  direct: {
    label: 'Direct',
    color: 'hsl(var(--chart-3))'
  }
} satisfies ChartConfig;
export function Donut() {
  return (
    <div className='relative h-[320px] w-[320px]'>
      <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-20 text-center text-3xl font-semibold leading-none text-title-text'>
        150k users
      </p>
      <ChartContainer
        config={chartConfig}
        className='w-full h-full'>
        <RadialBarChart
        
          startAngle={-180}
          endAngle={180}
          data={chartData}
          innerRadius={90}
          outerRadius={140}>
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                nameKey='key'
              />
            }
          />
          <RadialBar
            dataKey='values'
            background>
            {chartData.map((entry, index) => ( //TODO: Esto es una ayuda para ocultar la ghostbar, pero el tooltip sigue mostrandose. tambien los graficos estan invertidos.
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                opacity={entry.key === '' ? 0 : 1}
              />
            ))}
          </RadialBar>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
