import { Link } from 'react-router-dom'

const TOP3 = [
  { rank: 1, title: 'Celestial Knight', author: 'sprite_master', likes: '2.1k', bg: 'linear-gradient(135deg, #1a1a3a, #2a2a6b, #4a4abf)' },
  { rank: 2, title: 'Neon Dragon', author: 'neon_art', likes: '1.8k', bg: 'linear-gradient(135deg, #2c0a00, #6b1a00, #f0883e)' },
  { rank: 3, title: 'Mystic Tower', author: 'pixel_witch', likes: '1.6k', bg: 'linear-gradient(135deg, #1a0a2e, #4a1060, #8b2de0)' },
]

const ARTWORKS = [
  { id: 4, title: 'Pixel Palace', author: 'retro_rpg', likes: '980', bg: 'linear-gradient(135deg, #2c1810, #5c3020, #8b4513)' },
  { id: 5, title: 'Cyber Angel', author: 'mech_art', likes: '870', bg: 'linear-gradient(135deg, #0a1628, #1a3a5c, #2f81f7)' },
  { id: 6, title: 'Sea Titan', author: 'wave_pixel', likes: '760', bg: 'linear-gradient(135deg, #0a1a2a, #0d3a5c, #1a6b8f)' },
  { id: 7, title: 'Dark Forest', author: 'leaf_draw', likes: '650', bg: 'linear-gradient(135deg, #0d1a0a, #1a3a10, #2a5c1a)' },
  { id: 8, title: 'Star Forge', author: 'cosmos_art', likes: '540', bg: 'linear-gradient(135deg, #0a0a1a, #1a1a3a, #f0883e)' },
  { id: 9, title: 'Lava Golem', author: 'fire_pixel', likes: '480', bg: 'linear-gradient(135deg, #1a0000, #4a0000, #bf2000)' },
]

export default function ExGalleryPage() {
  return (
    <div style={{ background: '#0d1117' }}>
      {/* 히어로 */}
      <div className="relative rounded-xl overflow-hidden mx-8 mt-8 mb-16" style={{ aspectRatio: '21/9' }}>
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #0a1628, #1a3a5c, #4a4abf)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.7), transparent)' }} />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-lg text-sm font-bold mb-4"
            style={{ background: '#f0883e', color: '#fff' }}>전용 갤러리</span>
          <h2 className="text-4xl font-bold mb-2">Celestial Knight</h2>
          <p className="text-sm mb-6" style={{ color: '#7d8590' }}>by @sprite_master · 2,100 좋아요</p>
          <Link to="/gallery/1"
            className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl font-bold hover:opacity-90"
            style={{ background: '#2f81f7', color: '#fff' }}>
            작품 보기
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 pb-16 space-y-16">
        {/* 주간 TOP 3 */}
        <section>
          <h2 className="text-2xl font-bold mb-8">🏆 Weekly Top 3</h2>
          <div className="grid grid-cols-3 gap-8">
            {TOP3.map(item => (
              <Link key={item.rank} to={`/gallery/${item.rank}`}
                className="relative rounded-xl flex flex-col gap-4 border p-4 transition-transform hover:-translate-y-1 cursor-pointer"
                style={{ background: '#21262d', borderColor: '#30363d' }}>
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg z-10"
                  style={{ background: item.rank === 1 ? '#2f81f7' : '#21262d', color: item.rank === 1 ? '#fff' : '#7d8590', border: '1px solid #30363d' }}>
                  {item.rank}
                </div>
                <div className="w-full aspect-square overflow-hidden rounded-lg"
                  style={{ background: item.bg }} />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm" style={{ color: '#7d8590' }}>@{item.author} · {item.likes} 좋아요</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 필터 */}
        <div className="flex gap-3">
          {['전체 해상도', '전체 색상', '최신순'].map(opt => (
            <select key={opt} className="appearance-none px-5 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#21262d', border: '1px solid #30363d', color: '#e6edf3' }}>
              <option>{opt}</option>
            </select>
          ))}
        </div>

        {/* 그리드 */}
        <div className="grid grid-cols-3 gap-12">
          {ARTWORKS.map(item => (
            <Link key={item.id} to={`/gallery/${item.id}`} className="group flex flex-col cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4 relative"
                style={{
                  background: item.bg,
                  clipPath: 'polygon(0 4px,4px 4px,4px 0,calc(100% - 4px) 0,calc(100% - 4px) 4px,100% 4px,100% calc(100% - 4px),calc(100% - 4px) calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,4px calc(100% - 4px),0 calc(100% - 4px))'
                }}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-sm">View Work</span>
                </div>
              </div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm" style={{ color: '#7d8590' }}>@{item.author} · {item.likes} 좋아요</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 푸터 */}
      <footer className="border-t py-12 px-6" style={{ background: '#161b22', borderColor: '#30363d' }}>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <span className="text-xl font-bold" style={{ color: '#2f81f7' }}>PixelHub</span>
          <div className="flex gap-6 text-sm" style={{ color: '#7d8590' }}>
            {['이용약관', '개인정보처리방침', '고객지원', '작가센터'].map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
