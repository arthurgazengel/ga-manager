const homepageBlocks = [
  'Hero principal',
  'Offres & services',
  'Études de cas',
  'Avis clients',
  'FAQ',
  'Formulaire de contact'
];

export default function PagesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Gestion pages : Accueil, Services, À propos, Contact</h1>
      <div className="rounded-xl border bg-white p-6">
        <p className="font-semibold">Blocs de la page Accueil</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {homepageBlocks.map((block) => (
            <li key={block}>{block}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
