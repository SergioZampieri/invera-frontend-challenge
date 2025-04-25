'use client';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { User } from '@/types';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash } from 'lucide-react';

interface ColumnsProps {
  editUser: (user: User) => void;
  deleteUser: (user: User) => void;
}


//export const columns: ColumnDef<User>[] = [
export const columns = ({ editUser, deleteUser }: ColumnsProps): ColumnDef<User>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        className='mx-2'
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className='mx-2'
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          className='flex px-0'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Name
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='flex'>
          <Avatar>
            {/* La imagen no esta implementada en backend, pero en caso de faltar o no estar configurada, se usa el fallback*/}
            <AvatarImage src='' />
            <AvatarFallback className='bg-muted-foreground px-4 text-primary-foreground'>
              <p className='pt-2'>{String(row.getValue('name')).charAt(0)}</p>
            </AvatarFallback>
          </Avatar>
          <div className='px-4'>
            <p className='font-bold'>{row.getValue('name')}</p>
            <p className='text-muted-foreground'>{user.email}</p>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return (
        <Button
          className='hidden w-24 px-0 md:flex'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Phone
          <ArrowUpDown className='inline-block' />
        </Button>
      );
    },
    cell: ({ row }) => <p className='hidden px-0 lowercase md:block lg:px-4'>{row.getValue('phone')}</p>
  },
  {
    accessorKey: 'location',
    header: ({ column }) => {
      return (
        <Button
          className='hidden px-0 md:flex'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Location
          <ArrowUpDown className='inline-block' />
        </Button>
      );
    },
    cell: ({ row }) => <p className='hidden px-0 lowercase md:block lg:px-4'>{row.getValue('location')}</p>
  },
  {
    accessorKey: 'company',
    header: ({ column }) => {
      return (
        <Button
          className='hidden px-0 md:flex'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Company
          <ArrowUpDown className='inline-block' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='hidden items-center md:flex'>
          <Avatar>
            {/* La imagen no esta implementada en backend, pero en caso de faltar o no estar configurada, se usa el fallback*/}
            <AvatarImage src='' />
            <AvatarFallback className='bg-muted-foreground px-2 text-primary-foreground md:px-4'>
              <p className='pt-2'>{String(row.getValue('company')).charAt(0)}</p>
            </AvatarFallback>
          </Avatar>
          <p className='px-0 md:px-4'>{row.getValue('company')}</p>
        </div>
      );
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          className='hidden px-0 md:flex'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Status
          <ArrowUpDown className='inline-block' />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='items-cente flex md:space-x-2 lg:px-4'>
        {
          <Badge
            className={`${row.getValue('status') === 'Online' ? 'border border-brand-contrast bg-brand-success text-brand-contrast' : 'bg-muted'} px-1 py-1 md:px-2`}
            variant='outline'>
            ● {row.getValue('status')}
          </Badge>
        }
      </div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className='flex justify-end pr-4'>
          <Button
            variant='ghost'
            className='hover:bg-brand-primary-muted size-8'
            onClick={() => editUser(user)}>
            <Pencil />
          </Button>
          <Button
            variant='ghost'
            className='hover:bg-brand-primary-muted size-8'
            onClick={() => deleteUser(user)}>
            <Trash />
          </Button>
        </div>
      );
    }
  }
];
