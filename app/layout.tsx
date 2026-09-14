import React from 'react';

export const metadata = {
  title: 'FitFastFood',
  description: 'Nejlepší makra ke kiosku v ČR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
