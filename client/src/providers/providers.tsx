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

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
   // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
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