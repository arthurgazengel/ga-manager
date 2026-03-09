# GA Manager – Admin Panel

Panel administrateur moderne pour **ga-manager.fr** (marketing digital artisans/commerçants), construit avec Next.js, Tailwind, Prisma et PostgreSQL.

## Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, composants UI style shadcn, Chart.js
- **Backend**: API Routes REST (App Router), Prisma ORM
- **DB**: PostgreSQL
- **Auth**: NextAuth (Credentials + bcrypt)
- **Sécurité**: Validation Zod, anti brute-force simple, protection CSRF sur endpoints sensibles
- **Uploads**: dossier `public/uploads` prêt à l’emploi

## Arborescence

```txt
app/
  (admin)/
    dashboard/
    leads/
    blog/
    pages/
    services/
    portfolio/
    testimonials/
    seo/
    newsletter/
    statistics/
    settings/
    users/
  api/
    auth/[...nextauth]/
    leads/
    blog/
    services/
    testimonials/
    seo/
    newsletter/
    statistics/
    settings/
    users/
components/
  dashboard/
  forms/
  layout/
  ui/
lib/
prisma/
types/
public/uploads/
```

## Fonctionnalités livrées

### Interface admin
- Sidebar complète (Dashboard, Leads, Blog, Pages, Services, Portfolio, Avis, SEO, Newsletter, Stats, Paramètres, Utilisateurs).
- Header avec recherche globale, notifications et profil.
- UI responsive et style SaaS moderne.

### Dashboard principal
- KPI: nombre de leads, leads du mois, taux de conversion, visites.
- Graphiques: trafic et sources de leads.
- Bloc pages populaires.

### Leads / Prospects
- Table complète avec colonnes demandées.
- Filtre texte + filtre statut.
- Export CSV côté client.
- Statuts: `nouveau`, `contacte`, `devis_envoye`, `client_gagne`, `perdu`.

### Modules de gestion
Pages dédiées prêtes à être branchées CRUD pour:
- Blog / Articles
- Pages du site
- Services
- Portfolio
- Témoignages
- SEO Manager
- Newsletter
- Statistiques
- Utilisateurs admin
- Paramètres site

### Base de données Prisma
Schéma prêt avec modèles:
- `AdminUser`, `Lead`, `BlogPost`, `Service`, `Testimonial`, `SeoEntry`, `NewsletterEmail`, `SiteSetting`, `AdminLog`
- enums `LeadStatus`, `AdminRole`

### API backend
- Endpoint complet: `POST/GET /api/leads` avec validation Zod + CSRF + anti brute-force.
- Endpoints scaffoldés pour autres modules, prêts pour intégration Prisma complète.

## Setup local

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Variables d’environnement (`.env.example`)

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ga_manager"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="change-me"
```

## Déploiement
Compatible Vercel / Railway / Render avec PostgreSQL managé.

