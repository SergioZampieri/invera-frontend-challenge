import { UserForm } from '../form';
import { DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { User } from '@/types';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';


interface UpsertUserDialogProps {
  open: boolean;
  onOpen: () => void;
  userData?: User;
}

export function UpsertUserDialog({ open, onOpen, userData }: UpsertUserDialogProps) { //UPdate/inSERT DIALOG, permite usarlo para editar y para crear usuarios
  return (
    <Dialog
      open={open}
      onOpenChange={onOpen}>
      <DialogContent className='border-border'>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>
            {userData ? 'Edit User' : 'Add User'}
          </DialogTitle>
          <DialogDescription className='text-xl font-bold'>
            {userData
              ? 'Make changes to the user profile here. Click save when you are done.'
              : 'Create a new user profile'}
          </DialogDescription>
        </DialogHeader>
        <UserForm
          data={userData}
          closeAction={onOpen}
        />
      </DialogContent>
    </Dialog>
  );
}