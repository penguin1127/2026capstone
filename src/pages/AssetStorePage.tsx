import { useState } from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = ['All', 'Characters', 'Tilesets', 'Environments', 'UI/Icons', 'Sprites', 'Effects']

const ASSETS = [
  { id: 1, title: 'Sword Pack Vol.1', author: 'sprite_master', price: 0, rating: 4.8, downloads: 2340, bg: 'linear-gradient(135deg, #2c1810, #6b3020)' },
  { id: 2, title: 'Forest Tileset', author: 'leaf_draw', price: 4900, rating: 4.6, downloads: 980, bg: 'linear-gradient(135deg, #0d2818, #1a5c2a)' },
  { id: 3, title: 'UI Button Pack', author: 'neon_art', price: 0, rating: 4.9, downloads: 5200, bg: 'linear-gradient(135deg, #0a1628, #2f81f7)' },
  { id: 4, title: 'Cyber Character', author: 'mech_art', price: 9900, rating: 4.7, downloads: 640, bg: 'linear-gradient(135deg, #0a0a1a, #1a1a4a)' },
  { id: 5, title: 'Magic Effects', author: 'cosmos_art', price: 6900, rating: 4.5, downloads: 820, bg: 'linear-gradient(135deg, #1a0a2e, #8b2de0)' },
  { id: 6, title: 'Castle Tiles', author: 'retro_rpg', price: 0, rating: 4.4, downloads: 3100, bg: 'linear-gradient(135deg, #2c1810, #8b4513)' },
  { id: 7, title: 'Slime Sprites', author: 'cute_pixel', price: 3900, rating: 4.8, downloads: 1200, bg: 'linear-gradient(135deg, #0a1a0a, #1a6b1a)' },
  { id: 8, title: 'Dark Forest BG', author: 'sky_art', price: 12000, rating: 4.3, downloads: 450, bg: 'linear-gradient(135deg, #0a0a0a, #1a1a2a)' },
]

export default function AssetStorePage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState<'all' | 'free' | 'paid'>('all')

  const filtered = ASSETS.filter(a =>
    priceFilter === 'all' || (priceFilter === 'free' ? a.price === 0 : a.price > 0)
  )

  return (
    <div style={{ background: '#0d1117' }}>
      {/* 히어로 */}
      <div className="relative py-20 px-8 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, rgba(47,129,247,0.3) 0%, #161b22 50%, #0d1117 100%)' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #2f81f7 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">에셋 스토어</h1>
          <p className="text-base mb-8" style={{ color: '#7d8590' }}>최고의 픽셀아트 에셋을 발견하고, 만들고, 공유하세요</p>
          <div className="flex justify-center gap-10">
            {[['12.4k', '에셋'], ['3.2k', '크리에이터'], ['68%', '무료']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold" style={{ color: '#2f81f7' }}>{val}</p>
                <p className="text-sm mt-1" style={{ color: '#7d8590' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-8 pb-16">
        {/* 필터 */}
        <div className="flex items-center gap-4 mb-8 flex-wrap">
          {/* 가격 필터 */}
          <div className="flex gap-2">
            {([['all', '전체'], ['free', '무료'], ['paid', '유료']] as const).map(([val, label]) => (
              <button key={val} onClick={() => setPriceFilter(val)}
                className="px-5 py-2.5 rounded-full text-sm font-bold transition-colors"
                style={priceFilter === val
                  ? { background: '#2f81f7', color: '#fff' }
                  : { background: '#21262d', color: '#7d8590', border: '1px solid #30363d' }}>
                {label}
              </button>
            ))}
          </div>
          <div className="w-px h-6" style={{ background: '#30363d' }} />
          {/* 카테고리 */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-bold transition-colors"
                style={activeCategory === cat
                  ? { background: '#2f81f7', color: '#fff' }
                  : { background: '#21262d', color: '#7d8590', border: '1px solid #30363d' }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <select className="appearance-none px-5 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#21262d', border: '1px solid #30363d', color: '#e6edf3' }}>
              <option>인기순</option>
              <option>최신순</option>
              <option>낮은 가격순</option>
            </select>
          </div>
        </div>

        {/* 그리드 */}
        <div className="grid grid-cols-4 gap-5">
          {filtered.map(item => (
            <Link key={item.id} to={`/assets/${item.id}`}
              className="group rounded-2xl overflow-hidden border transition-all hover:border-[#2f81f7]/50 hover:-translate-y-1"
              style={{ background: '#21262d', borderColor: '#30363d' }}>
              {/* 이미지 */}
              <div className="aspect-square checkerboard relative">
                <div className="w-full h-full" style={{ background: item.bg, opacity: 0.6 }} />
                {/* 가격 뱃지 */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-bold border"
                  style={item.price === 0
                    ? { background: 'rgba(63,185,80,0.2)', color: '#3fb950', borderColor: 'rgba(63,185,80,0.3)' }
                    : { background: 'rgba(47,129,247,0.2)', color: '#2f81f7', borderColor: 'rgba(47,129,247,0.3)' }}>
                  {item.price === 0 ? 'FREE' : `₩${item.price.toLocaleString()}`}
                </div>
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                    style={{ background: 'rgba(255,255,255,0.15)' }}>미리보기</button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-bold"
                    style={{ background: '#2f81f7', color: '#fff' }}>
                    {item.price === 0 ? '무료 받기' : '구매하기'}
                  </button>
                </div>
              </div>
              {/* 정보 */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs mb-3" style={{ color: '#7d8590' }}>@{item.author}</p>
                <div className="flex items-center gap-3 text-xs" style={{ color: '#7d8590' }}>
                  <span className="flex items-center gap-1">
                    <span style={{ color: '#f0883e' }}>★</span>{item.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">download</span>
                    {item.downloads.toLocaleString()}
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
