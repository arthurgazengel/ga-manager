import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <Header />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
