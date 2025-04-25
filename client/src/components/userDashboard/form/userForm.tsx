'use client';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCreateUser, useUpdateUser } from '@/hooks/useUsers';
import { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface UserFormProps {
  closeAction: () => void;
  isEditing?: boolean;
  data?: User;
}

export const UserForm = ({ data, isEditing, closeAction }: UserFormProps) => {
  const { mutate : create, isError: errorCreate, isPending: pendingCreate } = useCreateUser();
  const { mutate: edit, isSuccess: sucessEdit, isError: errorEdit, isPending: pendingEdit } = useUpdateUser();

  type UserFormValues = z.infer<typeof userSchema>;

  const userSchema = z.object({
    name: z.string().min(2, 'At least 2 characters are needed'), //"Yu" o "A.""
    email: z.string().email('Invalid email'),
    phone: z.string().min(10, 'Must be a valid phone number').max(14, 'Must be a valid phone number'),
    location: z.string().min(4, 'At least 4 characters are needed').max(32, 'Max characters exceeded'), //Chad es uno de los nombres mas cortos, Saint Vincent and the Grenadines el mas largo  :)
    company: z.string().min(1, 'Field is empty'),
    status: z.enum(['Online', 'Offline'])
  });

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      status: 'Online',
      company: ''
    }
  });

  useEffect(() => {
    if (data && isEditing) {
      console.log(data);
      form.reset({
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location,
        status: data.status,
        company: data.company
      });
    }
  }, [data, isEditing, form]);

  const onSubmit = (formData: UserFormValues) => {
    if (isEditing && data?.id !== undefined) {
      edit(
        { id: data.id, data: formData },
        {
          onSuccess: () => {
            form.reset();
            toast.success('Usuario editado con exito')
            closeAction();
          },
          onError: () => {
            toast.error('No pudo editarse el usuario')
          }
        }
      );
    } else {
      create(formData, {
        onSuccess: () => {
          form.reset();
          toast.success('Usuario creado con exito')
          closeAction();
        },
        onError: () => {
          toast.error('No pudo crearse el usuario')
        }
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8'>
        {/* campo de nombre */}
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter name'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />

        {/* campo de email */}
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter email'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />

        {/* campo de telefono */}
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter phone number'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />

        {/* campo de ubicacion */}
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Location</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter location'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />

        {/* campo de compañia */}
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm'>Company</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter company'
                  {...field}
                />
              </FormControl>
              <FormMessage className='text-xs' />
            </FormItem>
          )}
        />
        {/* campo de estado */}
        <FormField
          control={form.control}
          name='status'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-sm font-medium'>Status</FormLabel>
              <RadioGroup
                defaultValue={field.value}
                className='flex items-center gap-12 pl-2 pt-2'
                onValueChange={field.onChange}>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem
                    value='Online'
                    id='offline'
                    className='border-green-500 text-green-500 [&_svg]:fill-green-500'
                  />
                  <Label htmlFor='color-green'>Online</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem
                    value='Offline'
                    id='online'
                    className='border-card-foreground text-card [&_svg]:fill-card-foreground'
                  />
                  <Label htmlFor='color-rose'>Offline</Label>
                </div>
              </RadioGroup>
            </FormItem>
          )}
        />
        {/* boton de accion del form */}
        <div className='pt-4'>
          <Button
            type='submit'
            className='w-full'>
            {isEditing ? 'Update User' : 'Add User'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
