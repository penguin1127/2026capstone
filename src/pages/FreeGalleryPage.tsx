import { useState } from 'react'
import { Link } from 'react-router-dom'

const TAGS = ['All', 'Landscape', 'Portrait', 'Isometric', 'Animation', 'Fantasy', 'Cyberpunk', 'Cute']

const ARTWORKS = [
  { id: 1, title: 'Neon Rain', author: 'pixel_witch', likes: '1.2k', views: '8.4k', bg: 'linear-gradient(135deg, #0a0e1a, #1a2a4a, #2f81f7)' },
  { id: 2, title: 'Forest Walk', author: 'leaf_draw', likes: '870', views: '5.3k', bg: 'linear-gradient(135deg, #0d2818, #1a5c2a, #3abf6b)' },
  { id: 3, title: 'Cyber Cat', author: 'neon_art', likes: '760', views: '4.8k', bg: 'linear-gradient(135deg, #1a0a2e, #4a1060, #8b2de0)' },
  { id: 4, title: 'Space Travel', author: 'cosmos_art', likes: '650', views: '3.9k', bg: 'linear-gradient(135deg, #0a0a1a, #0d0d3a, #1a1a6b)' },
  { id: 5, title: 'Old Castle', author: 'retro_rpg', likes: '540', views: '3.2k', bg: 'linear-gradient(135deg, #2c1810, #5c3020, #8b4513)' },
  { id: 6, title: 'Mini Farm', author: 'cute_pixel', likes: '480', views: '2.8k', bg: 'linear-gradient(135deg, #1a3a0a, #3a7020, #6abf30)' },
  { id: 7, title: 'Fire Dragon', author: 'dungeon_dev', likes: '430', views: '2.6k', bg: 'linear-gradient(135deg, #2c0a00, #6b1a00, #bf3000)' },
  { id: 8, title: 'Night Market', author: 'sky_art', likes: '390', views: '2.3k', bg: 'linear-gradient(135deg, #0a0a0a, #1a1a2a, #f0883e)' },
  { id: 9, title: 'Sea Monster', author: 'wave_pixel', likes: '350', views: '2.1k', bg: 'linear-gradient(135deg, #0a1a2a, #0d3a5c, #1a6b8f)' },
]

export default function FreeGalleryPage() {
  const [activeTag, setActiveTag] = useState('All')

  return (
    <div style={{ background: '#0d1117' }}>
      {/* 히어로 */}
      <div className="w-full relative mb-16" style={{ height: 600 }}>
        <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #2f81f7 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        <div className="absolute bottom-12 left-12 max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-bold"
              style={{ background: '#2f81f7', color: '#fff' }}>Featured</span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-bold"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#e6edf3' }}>자유 갤러리</span>
          </div>
          <h1 className="text-5xl font-bold mb-3 tracking-tight">Neon Rain</h1>
          <p className="text-base mb-2" style={{ color: '#7d8590' }}>by @pixel_witch</p>
          <div className="flex items-center gap-4 mb-6 text-sm" style={{ color: '#7d8590' }}>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">favorite</span>1,240
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">visibility</span>8,420
            </span>
          </div>
          <Link to="/gallery/1"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-90"
            style={{ background: '#2f81f7', color: '#fff' }}>
            작품 보기
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 pb-16">
        {/* 필터 바 */}
        <div className="flex items-center justify-between gap-4 mb-12 flex-wrap">
          <div className="flex gap-3 flex-wrap">
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className="px-8 py-3 rounded-full text-sm font-bold transition-colors"
                style={activeTag === tag
                  ? { background: '#2f81f7', color: '#fff' }
                  : { background: '#21262d', color: '#7d8590', border: '1px solid #30363d' }}>
                #{tag}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <select className="appearance-none px-5 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#21262d', border: '1px solid #30363d', color: '#e6edf3' }}>
              <option>카테고리</option>
            </select>
            <select className="appearance-none px-5 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#21262d', border: '1px solid #30363d', color: '#e6edf3' }}>
              <option>최신순</option>
              <option>인기순</option>
            </select>
          </div>
        </div>

        {/* 그리드 */}
        <div className="grid grid-cols-3 gap-12">
          {ARTWORKS.map(item => (
            <Link key={item.id} to={`/gallery/${item.id}`} className="group flex flex-col cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative"
                style={{ background: item.bg }}>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-sm">View Work</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm font-medium" style={{ color: '#7d8590' }}>by @{item.author}</p>
                </div>
                <div className="flex items-center gap-3 text-sm" style={{ color: '#7d8590' }}>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">favorite</span>{item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span>{item.views}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
