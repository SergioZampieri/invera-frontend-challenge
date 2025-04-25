'use client';

import { UpsertUserDialog } from '../dialogs';
import { columns } from './colums';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { User } from '@/types';
import { flexRender, getCoreRowModel, getPaginationRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const mockUsers: Array<User> = [
  // {
  //   id: 1,
  //   name: 'John Doe',
  //   email: 'john@example.com',
  //   phone: '(123) 456-7890',
  //   location: 'United States',
  //   company: 'Example Inc.',
  //   status: 'Online'
  // },
  // {
  //   id: 2,
  //   name: 'Jane Smith',
  //   email: 'jane@example.com',
  //   phone: '(456) 789-0123',
  //   location: 'Canada',
  //   company: 'Example Inc.',
  //   status: 'Offline'
  // },
  // {
  //   id: 3,
  //   name: 'Matt Cannon',
  //   email: 'matt@facebook.com',
  //   phone: '(319) 098-9899',
  //   location: 'Australia',
  //   company: 'Facebook',
  //   status: 'Offline'
  // },
  {
    id: 4,
    name: 'Graham Hills',
    email: 'graham@twitter.com',
    phone: '(540) 827-3880',
    location: 'India',
    company: 'Twitter',
    status: 'Online'
  },
  {
    id: 5,
    name: 'Sandy Houston',
    email: 'sandy@youtube.com',
    phone: '(440) 410-3848',
    location: 'Canada',
    company: 'YouTube',
    status: 'Offline'
  },
  {
    id: 6,
    name: 'Andy Smith',
    email: 'andy@reddit.com',
    phone: '(424) 458-3268',
    location: 'United States',
    company: 'Reddit',
    status: 'Online'
  },
  {
    id: 7,
    name: 'Lilly Woods',
    email: 'lilly@spotify.com',
    phone: '(361) 892-1819',
    location: 'Australia',
    company: 'Spotify',
    status: 'Offline'
  },
  {
    id: 8,
    name: 'Patrick Meyer',
    email: 'patrick@pinterest.com',
    phone: '(760) 882-5670',
    location: 'United Kingdom',
    company: 'Pinterest',
    status: 'Online'
  },
  {
    id: 9,
    name: 'Frances Willen',
    email: 'frances@twitch.com',
    phone: '(236) 496-5864',
    location: 'Canada',
    company: 'Twitch',
    status: 'Offline'
  },
  {
    id: 10,
    name: 'Ernest Houston',
    email: 'ernest@linkedin.com',
    phone: '(704) 339-8813',
    location: 'India',
    company: 'LinkedIn',
    status: 'Offline'
  },
  {
    id: 11,
    name: 'Miguel Sánchez',
    email: 'miguel@apple.com',
    phone: '(512) 555-1234',
    location: 'Spain',
    company: 'Apple',
    status: 'Online'
  },
  {
    id: 12,
    name: 'Emily Johnson',
    email: 'emily@microsoft.com',
    phone: '(206) 555-9876',
    location: 'United States',
    company: 'Microsoft',
    status: 'Offline'
  },
  {
    id: 13,
    name: 'Lucas Weber',
    email: 'lucas@tesla.com',
    phone: '(650) 555-4321',
    location: 'Germany',
    company: 'Tesla',
    status: 'Online'
  },
  {
    id: 14,
    name: 'Yuki Tanaka',
    email: 'yuki@sony.com',
    phone: '(813) 555-8765',
    location: 'Japan',
    company: 'Sony',
    status: 'Offline'
  },
  {
    id: 15,
    name: 'Camille Dubois',
    email: 'camille@airbnb.com',
    phone: '(331) 555-2468',
    location: 'France',
    company: 'Airbnb',
    status: 'Online'
  },
  {
    id: 16,
    name: 'David Lee',
    email: 'david@samsung.com',
    phone: '(822) 555-1357',
    location: 'South Korea',
    company: 'Samsung',
    status: 'Offline'
  },
  {
    id: 17,
    name: 'Isabella Rossi',
    email: 'isabella@adobe.com',
    phone: '(339) 555-8642',
    location: 'Italy',
    company: 'Adobe',
    status: 'Online'
  },
  {
    id: 18,
    name: 'Aditya Patel',
    email: 'aditya@tata.com',
    phone: '(912) 555-9753',
    location: 'India',
    company: 'Tata',
    status: 'Offline'
  },
  {
    id: 19,
    name: 'Olivia Wilson',
    email: 'olivia@shopify.com',
    phone: '(416) 555-3579',
    location: 'Canada',
    company: 'Shopify',
    status: 'Online'
  },
  {
    id: 20,
    name: 'Ahmed Hassan',
    email: 'ahmed@aramco.com',
    phone: '(966) 555-2468',
    location: 'Saudi Arabia',
    company: 'Aramco',
    status: 'Offline'
  },
  {
    id: 21,
    name: 'Sophia Martinez',
    email: 'sophia@zoom.com',
    phone: '(408) 555-1234',
    location: 'United States',
    company: 'Zoom',
    status: 'Online'
  },
  {
    id: 22,
    name: 'Hiroshi Yamamoto',
    email: 'hiroshi@nintendo.com',
    phone: '(813) 555-5678',
    location: 'Japan',
    company: 'Nintendo',
    status: 'Offline'
  },
  {
    id: 23,
    name: 'Fatima Al-Farsi',
    email: 'fatima@adnoc.com',
    phone: '(971) 555-9012',
    location: 'UAE',
    company: 'ADNOC',
    status: 'Online'
  },
  {
    id: 24,
    name: 'Thomas Schmidt',
    email: 'thomas@bmw.com',
    phone: '(498) 555-3456',
    location: 'Germany',
    company: 'BMW',
    status: 'Offline'
  },
  {
    id: 25,
    name: 'Maria Silva',
    email: 'maria@petrobras.com',
    phone: '(551) 555-7890',
    location: 'Brazil',
    company: 'Petrobras',
    status: 'Online'
  },
  {
    id: 26,
    name: 'Daniel Kim',
    email: 'daniel@lg.com',
    phone: '(822) 555-2345',
    location: 'South Korea',
    company: 'LG',
    status: 'Offline'
  },
  {
    id: 27,
    name: 'Emma Wilson',
    email: 'emma@canva.com',
    phone: '(612) 555-6789',
    location: 'Australia',
    company: 'Canva',
    status: 'Online'
  },
  {
    id: 28,
    name: 'Liu Wei',
    email: 'liu@alibaba.com',
    phone: '(861) 555-0123',
    location: 'China',
    company: 'Alibaba',
    status: 'Offline'
  },
  {
    id: 29,
    name: 'Sarah Thompson',
    email: 'sarah@slack.com',
    phone: '(415) 555-4567',
    location: 'United States',
    company: 'Slack',
    status: 'Online'
  },
  {
    id: 30,
    name: 'Mohammed Al-Thani',
    email: 'mohammed@qatar.com',
    phone: '(974) 555-8901',
    location: 'Qatar',
    company: 'Qatar Airways',
    status: 'Offline'
  },
  {
    id: 31,
    name: 'Ana Rodriguez',
    email: 'ana@telefonica.com',
    phone: '(349) 555-2345',
    location: 'Spain',
    company: 'Telefonica',
    status: 'Online'
  },
  {
    id: 32,
    name: 'James Wilson',
    email: 'james@atlassian.com',
    phone: '(612) 555-6789',
    location: 'Australia',
    company: 'Atlassian',
    status: 'Offline'
  },
  {
    id: 33,
    name: 'Priya Sharma',
    email: 'priya@infosys.com',
    phone: '(918) 555-0123',
    location: 'India',
    company: 'Infosys',
    status: 'Online'
  },
  {
    id: 34,
    name: 'Carlos Mendoza',
    email: 'carlos@pemex.com',
    phone: '(525) 555-4567',
    location: 'Mexico',
    company: 'Pemex',
    status: 'Offline'
  },
  {
    id: 35,
    name: 'Natalie Chen',
    email: 'natalie@baidu.com',
    phone: '(861) 555-8901',
    location: 'China',
    company: 'Baidu',
    status: 'Online'
  },
  {
    id: 36,
    name: 'Raj Patel',
    email: 'raj@wipro.com',
    phone: '(918) 555-2345',
    location: 'India',
    company: 'Wipro',
    status: 'Offline'
  },
  {
    id: 37,
    name: 'Chloe Durand',
    email: 'chloe@loreal.com',
    phone: '(331) 555-6789',
    location: 'France',
    company: "L'Oreal",
    status: 'Online'
  },
  {
    id: 38,
    name: 'Antonio Rossi',
    email: 'antonio@ferrari.com',
    phone: '(399) 555-0123',
    location: 'Italy',
    company: 'Ferrari',
    status: 'Offline'
  },
  {
    id: 39,
    name: 'Elizabeth Taylor',
    email: 'elizabeth@hsbc.com',
    phone: '(447) 555-4567',
    location: 'United Kingdom',
    company: 'HSBC',
    status: 'Online'
  },
  {
    id: 40,
    name: 'Andre Silva',
    email: 'andre@embraer.com',
    phone: '(551) 555-8901',
    location: 'Brazil',
    company: 'Embraer',
    status: 'Offline'
  },
  {
    id: 41,
    name: 'Sven Johansson',
    email: 'sven@spotify.com',
    phone: '(468) 555-2345',
    location: 'Sweden',
    company: 'Spotify',
    status: 'Online'
  },
  {
    id: 42,
    name: 'Mei Lin',
    email: 'mei@tencent.com',
    phone: '(861) 555-6789',
    location: 'China',
    company: 'Tencent',
    status: 'Offline'
  },
  {
    id: 43,
    name: 'Gabriel Santos',
    email: 'gabriel@vale.com',
    phone: '(551) 555-0123',
    location: 'Brazil',
    company: 'Vale',
    status: 'Online'
  },
  {
    id: 44,
    name: 'Nina Ivanova',
    email: 'nina@gazprom.com',
    phone: '(749) 555-4567',
    location: 'Russia',
    company: 'Gazprom',
    status: 'Offline'
  },
  {
    id: 45,
    name: 'Roberto Fernandez',
    email: 'roberto@santander.com',
    phone: '(349) 555-8901',
    location: 'Spain',
    company: 'Santander',
    status: 'Online'
  },
  {
    id: 46,
    name: 'Amara Okafor',
    email: 'amara@mtn.com',
    phone: '(234) 555-2345',
    location: 'Nigeria',
    company: 'MTN',
    status: 'Offline'
  },
  {
    id: 47,
    name: 'Benjamin Brown',
    email: 'benjamin@nab.com',
    phone: '(612) 555-6789',
    location: 'Australia',
    company: 'NAB',
    status: 'Online'
  },
  {
    id: 48,
    name: 'Rana Kapoor',
    email: 'rana@tcs.com',
    phone: '(918) 555-0123',
    location: 'India',
    company: 'TCS',
    status: 'Offline'
  },
  {
    id: 49,
    name: 'Lina Alawi',
    email: 'lina@sabic.com',
    phone: '(966) 555-4567',
    location: 'Saudi Arabia',
    company: 'SABIC',
    status: 'Online'
  },
  {
    id: 50,
    name: 'Mahmoud El-Sayed',
    email: 'mahmoud@elsewedy.com',
    phone: '(202) 555-8901',
    location: 'Egypt',
    company: 'Elsewedy',
    status: 'Offline'
  }
];

export function UserTable() {
  //const { data: users, isLoading } = useUsers();
  const users = mockUsers;
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const AVAILABLE_ROWS = [5, 10, 25, 50, 100];

  const table = useReactTable({
    data: users ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter
  });
  return (
    <section className='bg-card'>
      {/* Encabezado del componente contenedor de tabla (input y visualizador de estado de paginacion*/}
      <div className='rounded-md border px-5'>
        <div className='flex w-full justify-between p-5'>
          <div className='flex items-center'>
            <h2 className='text-2xl font-bold'>All Users</h2>

            <div className='relative ml-4'>
              <Input
                type='text'
                placeholder='Search for...'
                className='hover:bg-brand-primary-muted w-[160px] rounded-lg px-10 py-2 md:w-[320px]'
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
              <div className='absolute inset-y-0 left-3 flex items-center'>
                <Search className='text-text-secondary' />
              </div>
            </div>
          </div>
          <p className='text-text-secondary text-sm'>
            <span className='text-brand-primary'>
              {`${Number(table.getRowModel().rows[0].id) + 1} - ${Number(table.getRowModel().rows[table.getRowModel().rows.length - 1].id) + 1}`}
            </span>
            {` of ${users.length} `}
          </p>
        </div>
        <Separator className='w-full' />
          {/* Tabla*/}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className={`${Number(row.id) % 2 === 0 ? 'bg-background' : ''} hover:bg-brand-primary-muted`}
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'>
                  There is no data yet!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
        {/* footer de tabla  (visualizador de seleccion, seleccion de paginado y acciones de paginacion)*/}
      <div className='flex items-center justify-end space-x-2 px-6 py-4'>
        <p className='text-text-secondary flex-1 text-sm'>{`${Number(table.getSelectedRowModel().rows.length)} of ${users.length} selected`}</p>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-2'>
            <span className='text-sm'>Rows per page:</span>
            <Select
              value={String(table.getState().pagination.pageSize)}
              onValueChange={(value) => table.setPageSize(Number(value))}>
              <SelectTrigger className='w-20 text-brand-primary'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_ROWS.map((option) => (
                  <SelectItem
                    key={option}
                    value={String(option)}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='space-x-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              <ArrowLeft className='text-brand-primary' />
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              <ArrowRight className='text-brand-primary' />
            </Button>
          </div>
        </div>
      </div>
        {/* modales (alerta y edicion de usuario) */}
      {/* <UpsertUserDialog
        open={openEdit}
        user={selectedUser}
        onOpenChange={() => setOpenEdit(false)}
      />

      <DeleteAlert
        open={openDelete}
        user={selectedUser}
        onOpenChange={() => setOpenDelete(false)}
      /> */}
    </section>
  );
}
