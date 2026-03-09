import { Lead } from '@/types';

export const leads: Lead[] = [
  {
    id: 'l1',
    nom: 'Sophie Laurent',
    email: 'sophie@atelierlumina.fr',
    telephone: '0612345678',
    entreprise: 'Atelier Lumina',
    message: 'Besoin d\'une stratégie Google Ads locale.',
    source: 'pub',
    statut: 'nouveau',
    createdAt: '2026-03-01'
  },
  {
    id: 'l2',
    nom: 'Nicolas Martin',
    email: 'nicolas@boulangerie-martin.fr',
    entreprise: 'Boulangerie Martin',
    message: 'Refonte SEO et contenu blog',
    source: 'seo',
    statut: 'devis_envoye',
    assignedTo: 'Camille',
    createdAt: '2026-03-04'
  }
];

export const dashboardKpis = {
  totalLeads: 238,
  leadsMois: 42,
  tauxConversion: 18.6,
  visites: 12890
};
