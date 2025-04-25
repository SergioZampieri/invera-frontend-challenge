'use client';

import { UpsertUserDialog } from '../dialogs';
import { columns } from './colums';
import { DeleteAlert } from './deleteAlert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDeleteUser, useGetUser } from '@/hooks/useUsers';
import { User } from '@/types';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { toast } from 'sonner';

export function UserTable() {
  const { data: users, isLoading } = useGetUser();
  const { mutate: remove } = useDeleteUser();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [userCherryPicked, setUserCherryPicked] = useState<null | User>(null);

  if (isLoading) <p>Loading...</p>;

  const editUser = (user: User) => {
    setUserCherryPicked(user);
    setOpenEdit(true);
  };

  const deleteUser = (user: User) => {
    setUserCherryPicked(user);
    setOpenDelete(true);
  };

  const AVAILABLE_ROWS = [5, 10, 25, 50, 100];

  const table = useReactTable({
    data: users ?? [],
    columns: columns({ editUser, deleteUser }),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
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
                value={table.getState().globalFilter ?? ''}
                onChange={(e) => table.setGlobalFilter(e.target.value)}
              />
              <div className='absolute inset-y-0 left-3 flex items-center'>
                <Search className='text-text-secondary' />
              </div>
            </div>
          </div>
          <p className='text-text-secondary text-sm'>
            <span className='text-brand-primary'>
              {`${table.getRowModel().rows[0]?.id ? Number(table.getRowModel().rows[0].id) + 1 : 0} 
              - ${Number(table.getRowModel().rows[table.getRowModel().rows.length - 1]?.id) + 1}`}
            </span>
            {` of ${users?.length} `}
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
                  There is no data to display!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* footer de tabla  (visualizador de seleccion, seleccion de paginado y acciones de paginacion)*/}
      <div className='flex items-center justify-end space-x-2 px-6 py-4'>
        <p className='text-text-secondary flex-1 text-sm'>{`${Number(table.getSelectedRowModel().rows.length)} of ${table.getFilteredRowModel().rows.length} selected`}</p>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-6'>
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
      <UpsertUserDialog
        open={openEdit}
        userData={userCherryPicked !== null ? userCherryPicked : undefined}
        onOpen={() => setOpenEdit(false)}
      />

      <DeleteAlert
        open={openDelete}
        onOpen={() => setOpenDelete(false)}
        deleteAction={() => {
          if (userCherryPicked?.id !== undefined) {
            remove(userCherryPicked.id
            );
            toast.warning('Usuario eliminado correctamente')
          }
        }}
      />
    </section>
  );
}
