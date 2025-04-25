'use client';

import { ThemeProvider } from './themeProvider';
import { MainErrorFallback } from '@/components/errors/main';
import { Toaster } from '@/components/ui/sonner';
import { queryConfig } from '@/lib/reactQuery';
import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import dynamic from "next/dynamic";

const ReactQueryDevtoolsProduction = dynamic(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools
  }))
);

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig
      })
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {process.env.DEV && <ReactQueryDevtools />}
        {/* <sonner /> */}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster
          position='top-left'
            richColors
            closeButton
            toastOptions={{
              duration: 2500
            }}
          />
        </ThemeProvider>
        <ReactQueryDevtoolsProduction />
      </QueryClientProvider>
    </ErrorBoundary>
  );
};