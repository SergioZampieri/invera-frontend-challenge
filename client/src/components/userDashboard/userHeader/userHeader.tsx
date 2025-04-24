'use client'

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { UpsertUserDialog } from '../dialogs';

export function UserHeader() {
const [open, setOpen] = useState(false)
const closeModal = () => {
    setOpen(false);
  };
  return (
    <section className='flex justify-between items-center mx-20'>
      <Label>Users</Label>
      <Button
        className='cursor-pointer bg-brand-primary'
        onClick={() => setOpen(true)}>
        Add User
      </Button>
      <UpsertUserDialog open={open} onOpen={closeModal} />
    </section>
  );
}
