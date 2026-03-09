'use client';

import { useMemo, useState } from 'react';
import { Lead } from '@/types';

export function LeadsTable({ initialData }: { initialData: Lead[] }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');

  const filtered = useMemo(
    () =>
      initialData.filter((lead) => {
        const matchesQuery = `${lead.nom} ${lead.email} ${lead.entreprise ?? ''}`.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status === 'all' || lead.statut === status;
        return matchesQuery && matchesStatus;
      }),
    [initialData, query, status]
  );

  const exportCsv = () => {
    const rows = filtered.map((l) => [l.nom, l.email, l.telephone ?? '', l.entreprise ?? '', l.source, l.statut, l.createdAt].join(','));
    const blob = new Blob([`Nom,Email,Téléphone,Entreprise,Source,Statut,Date\n${rows.join('\n')}`], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'leads.csv';
    link.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <input className="border rounded-md px-3 py-2 text-sm" placeholder="Filtrer" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="border rounded-md px-3 py-2 text-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">Tous</option>
          <option value="nouveau">nouveau</option>
          <option value="contacte">contacté</option>
          <option value="devis_envoye">devis envoyé</option>
          <option value="client_gagne">client gagné</option>
          <option value="perdu">perdu</option>
        </select>
        <button onClick={exportCsv} className="rounded-md bg-slate-900 text-white px-3 py-2 text-sm">Exporter CSV</button>
      </div>
      <div className="overflow-x-auto rounded-md border bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              {['Nom', 'Email', 'Téléphone', 'Entreprise', 'Message', 'Source', 'Date', 'Statut', 'Assigné', 'Notes'].map((h) => (
                <th key={h} className="text-left px-3 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="px-3 py-2">{lead.nom}</td>
                <td className="px-3 py-2">{lead.email}</td>
                <td className="px-3 py-2">{lead.telephone ?? '-'}</td>
                <td className="px-3 py-2">{lead.entreprise ?? '-'}</td>
                <td className="px-3 py-2 max-w-48 truncate">{lead.message}</td>
                <td className="px-3 py-2">{lead.source}</td>
                <td className="px-3 py-2">{lead.createdAt}</td>
                <td className="px-3 py-2">{lead.statut}</td>
                <td className="px-3 py-2">{lead.assignedTo ?? '-'}</td>
                <td className="px-3 py-2">{lead.noteInterne ?? '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
