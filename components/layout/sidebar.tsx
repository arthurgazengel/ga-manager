import Link from 'next/link';
import { BarChart3, FileText, LayoutDashboard, Mail, Search, Settings, Users, Briefcase, MessageSquare, Globe, Newspaper } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/leads', label: 'Leads / Prospects', icon: Users },
  { href: '/blog', label: 'Blog / Articles', icon: Newspaper },
  { href: '/pages', label: 'Pages du site', icon: FileText },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/portfolio', label: 'Portfolio / réalisations', icon: BarChart3 },
  { href: '/testimonials', label: 'Avis clients', icon: MessageSquare },
  { href: '/seo', label: 'SEO', icon: Search },
  { href: '/newsletter', label: 'Emails / Newsletter', icon: Mail },
  { href: '/statistics', label: 'Statistiques', icon: Globe },
  { href: '/settings', label: 'Paramètres', icon: Settings },
  { href: '/users', label: 'Utilisateurs admin', icon: Users }
];

export function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-4 hidden lg:block">
      <p className="text-xl font-bold mb-6">GA Manager Admin</p>
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-slate-800">
              <Icon size={16} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
