const backgroundImageUrl = 'https://res.cloudinary.com/decxirb8i/image/upload/v1774536332/Gemini_Generated_Image_uyugm0uyugm0uyug_jxk7cx.png';

const testimonials = [
  {
    author: 'Marie, fleuriste à Nantes',
    content: 'Très bon accompagnement : plus de visibilité locale et des contacts qualifiés en quelques semaines.'
  },
  {
    author: 'Thomas, artisan à Toulouse',
    content: 'L’équipe est claire, réactive et les résultats sont concrets sur nos demandes de devis.'
  }
];

export default function TestimonialsPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Témoignages clients</h1>

      <div
        className="relative overflow-hidden rounded-xl border bg-slate-900"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" aria-hidden="true" />
        <div className="relative space-y-4 p-6">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Témoignages
          </p>

          <div className="grid gap-3 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author} className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-slate-100">“{testimonial.content}”</p>
                <p className="mt-3 text-xs font-medium text-slate-200">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
