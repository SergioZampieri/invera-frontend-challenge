'use client';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';


interface UserFormProps {
  closeAction: () => void;
  isEditing?: boolean;
  data?: User;
}

type UserFormValues = z.infer<typeof userSchema>;

const userSchema = z.object({
  name: z.string().min(2, 'At least 2 characters are needed'), //"Yu" o "A.""
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Must be a valid phone number').max(14,"Must be a valid phone number"),
  location: z.string().min(4, 'At least 4 characters are needed').max(32, "Max characters exceeded"), //Chad es uno de los nombres mas cortos, Saint Vincent and the Grenadines el mas largo  :)
  company: z.string().min(1, 'Field is empty'),
  status: z.enum(['Online', 'Offline'])
});

export const UserForm = ({ data, isEditing, closeAction }: UserFormProps) => {
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

  const onSubmit = async (data: UserFormValues) => {
    // const {createUser} = useUsers(); try createUSer(data);
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
                  className=''
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
                  className=''
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
                  className=''
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
                  className=''
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
                  className=''
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className=''>
                    <SelectValue placeholder='Select status' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className=''>
                  <SelectItem
                    value='Online'
                    className=''>
                    Online
                  </SelectItem>
                  <SelectItem
                    value='Offline'
                    className=''>
                    Offline
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className='text-xs' />
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