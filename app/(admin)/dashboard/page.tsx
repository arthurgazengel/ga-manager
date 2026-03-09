import { Card } from '@/components/ui/card';
import { dashboardKpis } from '@/lib/mock-data';
import { LeadsChart, TrafficChart } from '@/components/dashboard/charts';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard marketing</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <Card title="Nombre de leads"><p className="text-3xl font-bold">{dashboardKpis.totalLeads}</p></Card>
        <Card title="Leads du mois"><p className="text-3xl font-bold">{dashboardKpis.leadsMois}</p></Card>
        <Card title="Taux conversion"><p className="text-3xl font-bold">{dashboardKpis.tauxConversion}%</p></Card>
        <Card title="Visites du site"><p className="text-3xl font-bold">{dashboardKpis.visites}</p></Card>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card title="Évolution du trafic"><TrafficChart /></Card>
        <Card title="Sources de leads"><LeadsChart /></Card>
      </div>
      <Card title="Pages les plus consultées">
        <ul className="text-sm space-y-2">
          <li>/services/google-ads — 3 280 vues</li>
          <li>/contact — 2 210 vues</li>
          <li>/blog/seo-local-artisans — 1 902 vues</li>
        </ul>
      </Card>
    </div>
  );
}
