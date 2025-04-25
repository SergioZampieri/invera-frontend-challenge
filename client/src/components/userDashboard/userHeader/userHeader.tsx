'use client'

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { UpsertUserDialog } from '../dialogs';
import { ThemeToggle } from './themeToggle';

export function UserHeader() {
const [open, setOpen] = useState(false)
const closeModal = () => {
    setOpen(false);
  };
  return (<><section className='flex justify-between items-center'>
    <h1 className='pl-2 text-3xl font-bold'>Users</h1>
    <div className='flex items-center gap-10'>
    <Button
      className='cursor-pointer fill-title-text bg-brand-primary'
      onClick={() => setOpen(true)}>
      Add User
    </Button>
    <ThemeToggle/>
    </div>
    <UpsertUserDialog open={open} onOpen={closeModal} />
  </section></>
  
  );
}
