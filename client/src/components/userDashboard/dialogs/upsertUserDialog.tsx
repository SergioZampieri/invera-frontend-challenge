import { UserForm } from '../form';
import { DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { User } from '@/types';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';


interface UpsertUserDialogProps {
  open: boolean;
  onOpen: () => void;
  userData?: User;
}

export function UpsertUserDialog({ open, onOpen, userData }: UpsertUserDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpen}>
      <DialogContent className='border-border bg-brand-background-secondary text-brand-background-primary-dark dark:bg-brand-background-primary-dark dark:text-brand-text-secondary-dark'>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold text-brand-text-primary-dark dark:text-brand-text-primary'>
            {userData ? 'Edit User' : 'Add User'}
          </DialogTitle>
          <DialogDescription className='text-xl font-bold text-brand-text-primary-dark dark:text-brand-text-primary'>
            {userData
              ? 'Make changes to the user profile here. Click save when you are done.'
              : 'Create a new user profile'}
          </DialogDescription>
        </DialogHeader>
        <UserForm
          fetchedData={userData}
          closeAction={onOpen}
        />
      </DialogContent>
    </Dialog>
  );
}