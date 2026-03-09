import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4 flex items-center justify-between">
      <div className="relative w-80 max-w-full">
        <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
        <input placeholder="Recherche globale..." className="w-full rounded-md border px-9 py-2 text-sm" />
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded-full border p-2"><Bell size={16} /></button>
        <div className="text-sm">
          <p className="font-semibold">Admin GA</p>
          <p className="text-slate-500">admin@ga-manager.fr</p>
        </div>
      </div>
    </header>
  );
}
