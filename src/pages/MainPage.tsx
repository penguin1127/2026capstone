import { Link } from 'react-router-dom'

const TRENDING = [
  { id: 1, title: 'Neon Nocturne', author: 'PixelVisions', liked: true, bg: 'linear-gradient(135deg, #6a0dad, #1a1a2e, #0d4f8c)' },
  { id: 2, title: 'Silent Snow', author: 'GlitchArtisan', liked: false, bg: 'linear-gradient(135deg, #1a3a5c, #2d6a8f, #e8f4f8)' },
  { id: 3, title: 'Aether Haven', author: 'CloudRunner', liked: false, bg: 'linear-gradient(135deg, #ff6b35, #f7c59f, #4ecdc4)' },
  { id: 4, title: 'Cyber Core', author: 'SynthSpirit', liked: false, bg: 'linear-gradient(135deg, #2c1810, #8b4513, #d4a574)' },
  { id: 5, title: 'Tonal Shift', author: 'ChromaKey', liked: false, bg: 'linear-gradient(135deg, #f0883e, #c0392b, #2c3e50)' },
  { id: 6, title: 'Dawn Whisper', author: 'NaturePixel', liked: false, bg: 'linear-gradient(135deg, #0d2818, #1a5c2a, #2d8f3e)' },
]

const RECOMMENDED = [
  { id: 1, title: 'Antique Archives', desc: 'Recommended based on your interest in Isometric Art', bg: 'linear-gradient(135deg, #2c1810, #6b3a2a, #8b5e3c)' },
  { id: 2, title: 'Cosmic Drift', desc: 'Trending in Space categories you follow', bg: 'linear-gradient(135deg, #0d0d2e, #4a0d6b, #8b2de0)' },
  { id: 3, title: 'Midnight Session', desc: 'Similar to artists you recently viewed', bg: 'linear-gradient(135deg, #0a1628, #1a3a5c, #2a5f8f)' },
  { id: 4, title: 'Obsidian Dunes', desc: 'Highly rated in Surrealism this week', bg: 'linear-gradient(135deg, #4a2000, #8b3a00, #d45000)' },
]

const RECENTLY_ADDED = [
  { id: 1, bg: 'linear-gradient(135deg, #1a0a2e, #4a1060, #8b2de0)' },
  { id: 2, bg: 'linear-gradient(135deg, #0d2818, #1a6b3a, #2de06b)' },
  { id: 3, bg: 'linear-gradient(135deg, #0a1628, #0d3a6b, #1a6bbf)' },
  { id: 4, bg: 'linear-gradient(135deg, #2c0d0d, #6b1a1a, #bf2d2d)' },
  { id: 5, bg: 'linear-gradient(135deg, #0d2818, #1a5c3a, #3abf6b)' },
  { id: 6, bg: 'linear-gradient(135deg, #1a1a0d, #4a4a1a, #8b8b2d)' },
  { id: 7, bg: 'linear-gradient(135deg, #0d0d2e, #1a1a6b, #2d2dbf)' },
]

const RANKINGS = [
  { rank: 1, title: 'Neon Streets Alpha', author: '@NightCity', delta: '+12.4k', bg: 'linear-gradient(135deg, #0a1628, #1a3a5c)' },
  { rank: 2, title: 'Ethereal Plane', author: '@VoidSpirit', delta: '+10.1k', bg: 'linear-gradient(135deg, #1a1a1a, #3a3a3a)' },
  { rank: 3, title: 'Verdant Souls', author: '@MossChild', delta: '+8.7k', bg: 'linear-gradient(135deg, #0d2818, #1a5c2a)' },
  { rank: 4, title: 'Circuit Breaker', author: '@Sparky', delta: '+7.2k', bg: 'linear-gradient(135deg, #1a0a0a, #3a1a1a)' },
  { rank: 5, title: 'Obsidian Flow', author: '@Gravel', delta: '+6.8k', bg: 'linear-gradient(135deg, #0d0d2e, #2d2d6b)' },
]

export default function MainPage() {
  return (
    <div className="pb-16 space-y-16" style={{ background: 'var(--bg-base)' }}>

      {/* Trending Artworks */}
      <section className="max-w-[1440px] mx-auto px-8 pt-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--primary)' }}>
              Curated Selection
            </span>
            <h2 className="text-4xl font-bold tracking-tight">Trending Artworks</h2>
          </div>
          <Link to="/gallery/free"
            className="flex items-center gap-2 font-semibold text-sm hover:underline underline-offset-4"
            style={{ color: 'var(--primary)' }}>
            Explore Trending
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {TRENDING.map(item => (
            <Link key={item.id} to={`/gallery/${item.id}`} className="group cursor-pointer">
              {/* pixel-step 클립 */}
              <div className="overflow-hidden mb-4 aspect-[4/5]"
                style={{
                  background: item.bg,
                  clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))',
                }}>
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>by {item.author}</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: item.liked ? 'var(--primary)' : 'var(--border)', fontVariationSettings: item.liked ? "'FILL' 1" : "'FILL' 0" }}>
                  favorite
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recommended for You */}
      <section className="py-16" style={{ background: 'var(--bg-elevated)' }}>
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight shrink-0">Recommended for You</h2>
            <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          </div>
          <div className="flex overflow-x-auto pb-4 gap-8"
            style={{ scrollSnapType: 'x mandatory' }}>
            {RECOMMENDED.map(item => (
              <Link key={item.id} to={`/gallery/${item.id}`}
                className="group shrink-0 rounded-xl p-4"
                style={{ background: 'var(--bg-surface)', minWidth: 360, scrollSnapAlign: 'start' }}>
                <div className="h-48 overflow-hidden rounded-lg mb-4 transition-transform group-hover:scale-[1.02]"
                  style={{ background: item.bg }} />
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added + Weekly Rankings */}
      <section className="max-w-[1440px] mx-auto px-8 grid grid-cols-12 gap-12">
        {/* 왼쪽: Recently Added */}
        <div className="col-span-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recently Added</h2>
            <div className="flex gap-2">
              {['All', 'Characters', 'Enviro'].map((label, i) => (
                <button key={label}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter transition-colors"
                  style={{
                    background: i === 0 ? 'var(--bg-surface)' : 'transparent',
                    color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {RECENTLY_ADDED.map(item => (
              <Link key={item.id} to={`/gallery/${item.id}`}
                className="aspect-square rounded-lg overflow-hidden relative group"
                style={{ background: item.bg }}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-sm">View Work</span>
                </div>
              </Link>
            ))}
          </div>

          <button className="w-full py-4 rounded-xl font-bold transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--primary)' }}>
            Load More Recent Art
          </button>
        </div>

        {/* 오른쪽: Weekly Rankings */}
        <div className="col-span-4">
          <div className="rounded-2xl p-6"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>analytics</span>
              Weekly Rankings
            </h2>
            <div className="space-y-6">
              {RANKINGS.map(item => (
                <div key={item.rank} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center font-bold italic text-xl shrink-0"
                    style={{ color: item.rank === 1 ? 'var(--primary)' : 'var(--text-secondary)' }}>
                    {item.rank}
                  </div>
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0"
                    style={{ background: item.bg }} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm truncate group-hover:text-[var(--primary)] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{item.author}</p>
                  </div>
                  <div className="text-xs font-bold shrink-0" style={{ color: 'var(--accent)' }}>
                    {item.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
