import { LeadsTable } from '@/components/forms/leads-table';
import { leads } from '@/lib/mock-data';

export default function LeadsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Leads / Prospects</h1>
      <LeadsTable initialData={leads} />
    </div>
  );
}
