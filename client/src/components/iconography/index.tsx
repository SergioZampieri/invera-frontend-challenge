import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

// catalogo de iconos custom
export const User = ({ className }: IconProps): React.ReactNode => {
  return (
    <svg
      className={cn('fill-brand-primary', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'>
      <path
        fill='currentColor'
        d='M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4.735 6c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139z'
      />
    </svg>
  );
};

export const Users = ({ className }: IconProps): React.ReactNode => {
  return (
    <svg
      className={cn('fill-brand-primary', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 16 16'>
      <path
        fill='currentColor'
        d='M8.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2.4 7.506c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0M14.002 12h-1.59a3 3 0 0 0-.04-.29a6.5 6.5 0 0 0-1.167-2.603a3 3 0 0 1 3.633 1.911c.18.522-.283.982-.836.982M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4'
      />
    </svg>
  );
};

export const Heart = ({ className }: IconProps): React.ReactNode => {
  return (
    <svg
      className={cn('fill-brand-primary', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z'
      />
    </svg>
  );
};

export const OtherUsers = ({ className }: IconProps): React.ReactNode => {
  return (
    <svg
      className={cn('fill-brand-primary', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 8.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-5.5 0A1.5 1.5 0 0 0 5 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 8 12a1.5 1.5 0 0 0-1.5-1.5m11 0A1.5 1.5 0 0 0 16 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 19 12a1.5 1.5 0 0 0-1.5-1.5'
      />
    </svg>
  );
};

export const KebabVertical = ({ className }: IconProps): React.ReactNode => {
  return (
    <svg
      className={cn('fill-brand-primary', className)}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='3.75'
        d='M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z'
      />
    </svg>
  );
};
