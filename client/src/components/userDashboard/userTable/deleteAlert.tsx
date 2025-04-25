"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteAlertProps {
  open:  boolean;
  onOpen: () => void;
  deleteAction: () =>  void;
}

export function DeleteAlert({ open, onOpen, deleteAction }: DeleteAlertProps) {
  return (
    <AlertDialog onOpenChange={onOpen} open={open} >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove the user data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onOpen} >Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteAction} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
