import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import ReduxProvider from '@/store/redux-provider';

export const metadata = {
  title: 'T.E.IPR',
  description: 'I am using Mantine with Next.js, redux, validation!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ReduxProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
