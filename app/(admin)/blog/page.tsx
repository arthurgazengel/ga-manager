export default function BlogPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Blog / Articles</h1>
      <div className="rounded-xl border bg-white p-6 space-y-3">
        <p className="font-semibold">CRUD articles</p>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <input className="border rounded p-2" placeholder="Titre" />
          <input className="border rounded p-2" placeholder="Slug" />
          <input className="border rounded p-2" placeholder="Auteur" />
          <input className="border rounded p-2" placeholder="Catégorie" />
          <input className="border rounded p-2" placeholder="SEO title" />
          <input className="border rounded p-2" placeholder="SEO description" />
          <textarea className="border rounded p-2 md:col-span-2" rows={5} placeholder="Contenu (éditeur riche)" />
        </div>
      </div>
    </section>
  );
}
