import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function CongratulationsSection() {
  const [wishes, setWishes] = useState([
    { name: 'Ayu', message: 'Barakallah, semoga sakinah, mawaddah, warahmah.' },
    { name: 'Rudi', message: 'Selamat menempuh hidup baru! Lancar sampai hari H.' },
    { name: 'Nina', message: 'Semoga selalu diberi kebahagiaan dan keberkahan.' },
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const addWish = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes((prev) => [{ name, message }, ...prev]);
    setName('');
    setMessage('');
  };

  return (
    <section id="congratulations" className="relative bg-amber-50 py-16 text-amber-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-sm text-amber-700">
            <Heart className="h-4 w-4 text-amber-600" />
            <span>Ucapan Selamat</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Doa & Harapan</h2>
          <p className="mt-2 text-amber-700/80">Titipkan doa baik Anda untuk kami berdua.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={addWish} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
            <div>
              <label className="block text-sm text-amber-700">Nama</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 outline-none ring-amber-400 focus:ring"
                placeholder="Nama Anda"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-amber-700">Ucapan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 outline-none ring-amber-400 focus:ring"
                placeholder="Tulis ucapan terbaik Anda di sini"
              />
            </div>
            <button type="submit" className="mt-4 w-full rounded-lg bg-amber-600 px-4 py-2 font-medium text-white hover:bg-amber-500">
              Kirim Ucapan
            </button>
            <p className="mt-2 text-xs text-amber-600/80">Ucapan tersimpan di perangkat Anda (non-permanen).</p>
          </form>

          <div className="grid gap-4">
            {wishes.map((w, idx) => (
              <div key={idx} className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-amber-800">{w.name}</p>
                  <Heart className="h-4 w-4 text-amber-500" />
                </div>
                <p className="mt-2 text-amber-700">{w.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
