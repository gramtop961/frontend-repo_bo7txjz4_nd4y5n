import Hero from './components/Hero';
import CongratulationsSection from './components/CongratulationsSection';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import { Home, Calendar } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-900 text-amber-50">
      {/* Simple top nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-amber-950/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-serif text-xl">
            <span className="rounded bg-amber-600/90 p-1 text-amber-950"><Home className="h-4 w-4" /></span>
            Satria & Celana
          </a>
          <div className="hidden items-center gap-4 sm:flex">
            <a href="#congratulations" className="text-amber-100 hover:text-white">Ucapan</a>
            <a href="#events" className="text-amber-100 hover:text-white">Acara</a>
            <a href="#gallery" className="text-amber-100 hover:text-white">Galeri</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <CongratulationsSection />
        <EventDetails />
        <Gallery />
      </main>

      <footer className="bg-amber-950/70 py-8 text-center text-amber-200">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            27–28 Juli 2025 • Yogyakarta
          </p>
          <p className="mt-2 text-sm">Dengan cinta dan batik Jawa yang anggun.</p>
        </div>
      </footer>
    </div>
  );
}
