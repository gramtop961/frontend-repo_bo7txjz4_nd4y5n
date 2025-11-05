import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="events" className="relative bg-gradient-to-b from-amber-50 to-amber-100 py-16 text-amber-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-sm text-amber-700">
            <Calendar className="h-4 w-4 text-amber-600" />
            <span>Tanggal & Acara</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Akad & Resepsi</h2>
          <p className="mt-2 text-amber-700/80">Dengan adat nuansa batik Jawa.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-amber-600">Akad Nikah</p>
            <h3 className="mt-1 font-serif text-2xl">Sabtu, 27 Juli 2025</h3>
            <div className="mt-3 flex items-center gap-2 text-amber-700">
              <Clock className="h-4 w-4" />
              <span>08.00 WIB - selesai</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-amber-700">
              <MapPin className="h-4 w-4" />
              <span>Masjid Gedhe Kauman, Yogyakarta</span>
            </div>
            <a
              href="https://maps.app.goo.gl/8yGg8W8xCwH9xqQv8"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500"
            >
              Lihat Peta
            </a>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-widest text-amber-600">Resepsi</p>
            <h3 className="mt-1 font-serif text-2xl">Minggu, 28 Juli 2025</h3>
            <div className="mt-3 flex items-center gap-2 text-amber-700">
              <Clock className="h-4 w-4" />
              <span>11.00 - 14.00 WIB</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-amber-700">
              <MapPin className="h-4 w-4" />
              <span>Graha Batik Yogyakarta</span>
            </div>
            <a
              href="https://maps.app.goo.gl/8yGg8W8xCwH9xqQv8"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500"
            >
              Lihat Peta
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6 text-center text-amber-700 shadow-sm">
          Mohon kehadiran Bapak/Ibu/Saudara/i untuk memberikan doa restu kepada kami.
        </div>
      </div>
    </section>
  );
}
