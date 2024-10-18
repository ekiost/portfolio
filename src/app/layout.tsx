import { Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.css';

import { Toaster } from '@/components/ui/sonner';

import { metadata as meta } from '@/app/config';
import Loader from '@/app/loader';
import Providers from '@/app/providers';

import { createMetadata } from '@/lib/metadata';
import React from 'react';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description
  }
});

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={bricolage_grotesque.className}>
    <Providers>
      <Loader />
      {children}
      <Toaster />
    </Providers>
    </body>
    </html>
  );
}
