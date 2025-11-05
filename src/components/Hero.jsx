import { useRef, useState } from 'react';
import { Play, Pause, Music, Calendar, MapPin, Heart } from 'lucide-react';

const batikBg = {
  backgroundImage:
    "radial-gradient(circle at 25px 25px, rgba(255,255,255,0.08) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.08) 2px, transparent 2px), radial-gradient(circle at 25px 75px, rgba(255,255,255,0.06) 2px, transparent 2px), radial-gradient(circle at 75px 25px, rgba(255,255,255,0.06) 2px, transparent 2px)",
  backgroundSize: '100px 100px',
};

export default function Hero() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        // autoplay might be blocked until user interacts
      }
    }
  };

  const handleReveal = async () => {
    setRevealed(true);
    // try start music on reveal
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        // ignore
      }
    }
    const el = document.getElementById('congratulations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-amber-900 text-amber-50">
      <div className="absolute inset-0 opacity-30" style={batikBg} />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-900/80" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-800/50 px-3 py-1 text-sm">
          <Music className="h-4 w-4 text-amber-300" />
          <span className="text-amber-200">Undangan Pernikahan</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide">
          Satria
          <span className="mx-3 text-amber-300">&</span>
          Celana
        </h1>
        <p className="mt-4 max-w-xl text-amber-100/90">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan akad nikah dan resepsi pernikahan.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <button onClick={handleReveal} className="rounded-full bg-amber-500/90 px-6 py-3 font-medium text-amber-900 shadow-lg shadow-amber-900/30 transition hover:bg-amber-400">
            Buka Undangan
          </button>
          <div className="flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-800/40 px-4 py-2 text-sm">
            <Calendar className="h-4 w-4 text-amber-300" />
            <span>Sabtu, 27 Juli 2025</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-amber-200/90">
          <MapPin className="h-4 w-4" />
          <span>Yogyakarta, Indonesia</span>
        </div>

        <div className="mt-12 flex items-center gap-2 text-amber-200">
          <Heart className="h-5 w-5 text-amber-300" />
          <span className="text-sm">Turut berbahagia, keluarga besar</span>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button onClick={togglePlay} className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-800/40 px-4 py-2 text-sm text-amber-100 transition hover:bg-amber-700/60">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? 'Jeda Musik' : 'Putar Musik'}
          </button>
        </div>
      </div>

      {/* audio element */}
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2023/03/23/audio_2b03f2af37.mp3?filename=soft-romantic-piano-143172.mp3"
        preload="auto"
        loop
      />

      {/* subtle corner ornaments */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rotate-12 rounded-full border-4 border-amber-500/20" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 -rotate-12 rounded-full border-4 border-amber-500/20" />

      {/* Reveal curtain */}
      {!revealed && (
        <div className="absolute inset-0 z-20 grid place-items-center bg-amber-950/70 backdrop-blur-sm">
          <div className="mx-6 max-w-md rounded-2xl border border-amber-700/40 bg-amber-900/60 p-6 text-center shadow-xl">
            <p className="text-sm uppercase tracking-widest text-amber-300">Kepada Yth.</p>
            <h2 className="mt-2 font-serif text-3xl">Bapak/Ibu/Saudara/i</h2>
            <p className="mt-3 text-amber-100/90">Kami mengundang Anda untuk hadir di hari bahagia kami.</p>
            <button onClick={handleReveal} className="mt-6 w-full rounded-full bg-amber-500 px-5 py-3 font-medium text-amber-900 shadow-md hover:bg-amber-400">
              Buka Undangan
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
