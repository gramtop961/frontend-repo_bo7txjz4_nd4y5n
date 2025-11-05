export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1559628233-159f8aa3b3d1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922323-27af3f77b14e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542044801-7aded84de0d8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="relative bg-amber-50 py-16 text-amber-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">Galeri</h2>
          <p className="mt-2 text-amber-700/80">Sepenggal momen cinta dalam balutan batik.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white shadow-sm">
              <img
                src={src}
                alt={`gallery-${i}`}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44 md:h-56"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
