export type LeadStatus = 'nouveau' | 'contacte' | 'devis_envoye' | 'client_gagne' | 'perdu';

export interface Lead {
  id: string;
  nom: string;
  email: string;
  telephone?: string;
  entreprise?: string;
  message: string;
  source: 'formulaire' | 'pub' | 'seo';
  statut: LeadStatus;
  assignedTo?: string;
  noteInterne?: string;
  createdAt: string;
}
