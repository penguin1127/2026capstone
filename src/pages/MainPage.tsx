import { Link } from 'react-router-dom'

/* ── 더미 데이터 ─────────────────────────────────────────── */
const TRENDING = [
  { id: 1, title: 'Neon Nocturne', author: 'PixelVisions', liked: true, bg: 'linear-gradient(135deg, #6a0dad, #1a1a2e, #0d4f8c)' },
  { id: 2, title: 'Silent Snow', author: 'GlitchArtisan', liked: false, bg: 'linear-gradient(135deg, #1a3a5c, #2d6a8f, #e8f4f8)' },
  { id: 3, title: 'Aether Haven', author: 'CloudRunner', liked: false, bg: 'linear-gradient(135deg, #ff6b35, #f7c59f, #4ecdc4)' },
  { id: 4, title: 'Cyber Core', author: 'SynthSpirit', liked: false, bg: 'linear-gradient(135deg, #2c1810, #8b4513, #d4a574)' },
  { id: 5, title: 'Tonal Shift', author: 'ChromaKey', liked: false, bg: 'linear-gradient(135deg, #f0883e, #c0392b, #2c3e50)' },
  { id: 6, title: 'Dawn Whisper', author: 'NaturePixel', liked: false, bg: 'linear-gradient(135deg, #0d2818, #1a5c2a, #2d8f3e)' },
]

const RECENTLY_ADDED = [
  { id: 1, bg: 'linear-gradient(135deg, #1a0a2e, #4a1060, #8b2de0)' },
  { id: 2, bg: 'linear-gradient(135deg, #0d2818, #1a6b3a, #2de06b)' },
  { id: 3, bg: 'linear-gradient(135deg, #0a1628, #0d3a6b, #1a6bbf)' },
  { id: 4, bg: 'linear-gradient(135deg, #2c0d0d, #6b1a1a, #bf2d2d)' },
  { id: 5, bg: 'linear-gradient(135deg, #0d2818, #1a5c3a, #3abf6b)' },
  { id: 6, bg: 'linear-gradient(135deg, #1a1a0d, #4a4a1a, #8b8b2d)' },
]

// 좌측 사이드바: 인기 작가
const POPULAR_AUTHORS = [
  { id: 1, nickname: 'PixelVisions', works: 142, thumb: 'linear-gradient(135deg, #6a0dad, #1a1a2e)', avatar: 'linear-gradient(135deg, #6a0dad, #8b2de0)' },
  { id: 2, nickname: 'GlitchArtisan', works: 98, thumb: 'linear-gradient(135deg, #1a3a5c, #2d6a8f)', avatar: 'linear-gradient(135deg, #0d3a6b, #1a6bbf)' },
  { id: 3, nickname: 'CloudRunner', works: 76, thumb: 'linear-gradient(135deg, #ff6b35, #4ecdc4)', avatar: 'linear-gradient(135deg, #ff6b35, #f7c59f)' },
  { id: 4, nickname: 'SynthSpirit', works: 65, thumb: 'linear-gradient(135deg, #2c1810, #8b4513)', avatar: 'linear-gradient(135deg, #4a2000, #8b3a00)' },
  { id: 5, nickname: 'NaturePixel', works: 53, thumb: 'linear-gradient(135deg, #0d2818, #2d8f3e)', avatar: 'linear-gradient(135deg, #0d2818, #1a5c2a)' },
]

// 우측 사이드바: 핫한 작품
const HOT_ARTWORKS = [
  { id: 1, title: 'Neon Streets Alpha', author: '@NightCity', likes: '12.4k', bg: 'linear-gradient(135deg, #0a1628, #1a3a5c)' },
  { id: 2, title: 'Ethereal Plane', author: '@VoidSpirit', likes: '10.1k', bg: 'linear-gradient(135deg, #1a1a1a, #3a3a3a)' },
  { id: 3, title: 'Verdant Souls', author: '@MossChild', likes: '8.7k', bg: 'linear-gradient(135deg, #0d2818, #1a5c2a)' },
  { id: 4, title: 'Circuit Breaker', author: '@Sparky', likes: '7.2k', bg: 'linear-gradient(135deg, #1a0a0a, #3a1a1a)' },
  { id: 5, title: 'Obsidian Flow', author: '@Gravel', likes: '6.8k', bg: 'linear-gradient(135deg, #0d0d2e, #2d2d6b)' },
  { id: 6, title: 'Solar Flare', author: '@BurnPixel', likes: '5.9k', bg: 'linear-gradient(135deg, #4a2000, #d45000)' },
  { id: 7, title: 'Deep Current', author: '@AquaFrame', likes: '5.1k', bg: 'linear-gradient(135deg, #0d2c3a, #1a6b8f)' },
]

export default function MainPage() {
  return (
    <div className="pb-16" style={{ background: 'var(--bg-base)' }}>
      <div className="max-w-[1440px] mx-auto px-8 pt-8 flex gap-8 items-start">

        {/* ── 좌측 사이드바: 인기 작가 ── */}
        <aside className="w-52 shrink-0 sticky top-24 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: 'var(--primary)' }}>
            Popular Artists
          </h3>

          {POPULAR_AUTHORS.map(author => (
            <Link key={author.id} to={`/profile/${author.nickname}`}
              className="flex items-center gap-3 p-2 rounded-xl group transition-colors hover:bg-[#21262d]">
              {/* 아바타 */}
              <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden"
                style={{ background: author.avatar }} />
              {/* 정보 */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate group-hover:text-[var(--primary)] transition-colors">
                  {author.nickname}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {author.works} works
                </p>
              </div>
            </Link>
          ))}

          <Link to="/gallery/free"
            className="block text-center text-xs font-bold py-2 rounded-lg mt-2 transition-colors hover:text-[var(--primary)]"
            style={{ color: 'var(--text-secondary)', background: 'var(--bg-elevated)' }}>
            View All Artists →
          </Link>
        </aside>

        {/* ── 중앙: 갤러리 피드 ── */}
        <main className="flex-1 min-w-0 space-y-14">

          {/* Trending Artworks */}
          <section>
            <div className="flex justify-between items-end mb-7">
              <div>
                <span className="block text-xs font-bold tracking-widest uppercase mb-1.5"
                  style={{ color: 'var(--primary)' }}>Curated Selection</span>
                <h2 className="text-3xl font-bold tracking-tight">Trending Artworks</h2>
              </div>
              <Link to="/gallery/free"
                className="flex items-center gap-1.5 font-semibold text-sm hover:underline underline-offset-4"
                style={{ color: 'var(--primary)' }}>
                Explore All
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {TRENDING.map(item => (
                <Link key={item.id} to={`/gallery/${item.id}`} className="group cursor-pointer">
                  <div className="overflow-hidden mb-3 aspect-[4/3]"
                    style={{
                      background: item.bg,
                      clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))',
                    }}>
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-bold">{item.title}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                        by {item.author}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-xl"
                      style={{
                        color: item.liked ? 'var(--primary)' : 'var(--border)',
                        fontVariationSettings: item.liked ? "'FILL' 1" : "'FILL' 0",
                      }}>
                      favorite
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Recently Added */}
          <section>
            <div className="flex items-center justify-between mb-6">
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

            <button className="w-full py-3.5 rounded-xl font-bold mt-5 transition-colors"
              style={{ background: 'var(--bg-elevated)', color: 'var(--primary)' }}>
              Load More
            </button>
          </section>

        </main>

        {/* ── 우측 사이드바: 핫한 작품 ── */}
        <aside className="w-56 shrink-0 sticky top-24">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: 'var(--primary)' }}>
            🔥 Hot Right Now
          </h3>

          <div className="space-y-3">
            {HOT_ARTWORKS.map((item, idx) => (
              <Link key={item.id} to={`/gallery/${item.id}`}
                className="flex items-center gap-3 group">
                {/* 순위 */}
                <span className="text-sm font-bold italic w-4 shrink-0 text-center"
                  style={{ color: idx === 0 ? 'var(--primary)' : 'var(--text-secondary)' }}>
                  {idx + 1}
                </span>
                {/* 썸네일 */}
                <div className="w-12 h-12 rounded-lg shrink-0 overflow-hidden"
                  style={{ background: item.bg }} />
                {/* 정보 */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate group-hover:text-[var(--primary)] transition-colors leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {item.author}
                  </p>
                  <p className="text-xs font-bold mt-0.5" style={{ color: 'var(--accent)' }}>
                    ♥ {item.likes}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link to="/gallery/free"
            className="block text-center text-xs font-bold py-2 rounded-lg mt-4 transition-colors hover:text-[var(--primary)]"
            style={{ color: 'var(--text-secondary)', background: 'var(--bg-elevated)' }}>
            View More →
          </Link>
        </aside>

      </div>
    </div>
  )
}
