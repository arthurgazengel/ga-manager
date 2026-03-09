import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GA Manager Admin',
  description: 'Panel administrateur GA Manager'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
