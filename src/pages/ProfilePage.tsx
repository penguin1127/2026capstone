import { useState } from 'react'
import { Link } from 'react-router-dom'

const WORKS = [
  { id: 1,  title: 'Neon Rain',      likes: '12.4k', bg: 'linear-gradient(135deg,#0a1628,#2f81f7)', featured: true },
  { id: 2,  title: 'Dark Keep',      likes: '5.6k',  bg: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { id: 3,  title: 'Arcane Orb',     likes: '3.2k',  bg: 'linear-gradient(135deg,#2c1810,#6b3020)' },
  { id: 4,  title: 'Moonlit Valley', likes: '7.8k',  bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
  { id: 5,  title: 'Thunder Strike', likes: '2.1k',  bg: 'linear-gradient(135deg,#0a0a1a,#f0883e)' },
  { id: 6,  title: 'Shadow Blade',   likes: '4.4k',  bg: 'linear-gradient(135deg,#0a1a2a,#1a6b8f)' },
  { id: 7,  title: 'Potion Lab',     likes: '1.9k',  bg: 'linear-gradient(135deg,#2c0a00,#6b1a00)' },
  { id: 8,  title: 'Forest Shrine',  likes: '6.3k',  bg: 'linear-gradient(135deg,#1a3a0a,#3a7020)' },
  { id: 9,  title: 'Snow Peak',      likes: '3.7k',  bg: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
  { id: 10, title: 'Sakura Town',    likes: '8.9k',  bg: 'linear-gradient(135deg,#2a0a2a,#8b1a8b)' },
  { id: 11, title: 'Dragon Lair',    likes: '11.2k', bg: 'linear-gradient(135deg,#1a0a2e,#8b2de0)' },
  { id: 12, title: 'Deep Sea',       likes: '2.8k',  bg: 'linear-gradient(135deg,#0a1a2a,#2f81f7)' },
]

const ASSETS = [
  { title: 'Potion Icons',   rating: '4.7', price: 0,    bg: 'linear-gradient(135deg,#2c0a00,#6b1a00)' },
  { title: 'RPG UI Kit',     rating: '4.9', price: 5900, bg: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { title: 'Gem & Currency', rating: '4.8', price: 0,    bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
]

const LIKED = [
  { title: 'Cyber City',    author: 'NeonDusk',    bg: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { title: 'Space Invader', author: 'RetroBytes',  bg: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { title: 'Summer Chill',  author: 'LoFiSprite',  bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
  { title: 'Mech Runner',   author: 'CyberCortex', bg: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
]

const FOLLOWING = [
  { name: 'NeonDusk',     initials: 'ND', followers: '3.2k', gradient: 'linear-gradient(135deg,#22d3ee,#3b82f6)' },
  { name: 'CyberCortex',  initials: 'CC', followers: '1.8k', gradient: 'linear-gradient(135deg,#f97316,#ef4444)' },
  { name: 'SpriteKnight', initials: 'SK', followers: '4.5k', gradient: 'linear-gradient(135deg,#2f81f7,#6366f1)' },
]

const FOLLOWERS = [
  { name: 'DarkPixel',  initials: 'DP', works: '34',  gradient: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { name: 'RetroBytes', initials: 'RB', works: '128', gradient: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { name: 'LoFiSprite', initials: 'LS', works: '56',  gradient: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
]

const TABS = [
  { key: 'works',     label: '작품',   icon: 'palette',    count: '128' },
  { key: 'assets',    label: '에셋',   icon: 'sell',       count: '23' },
  { key: 'liked',     label: '좋아요', icon: 'favorite',   count: '4.2k' },
  { key: 'following', label: '팔로잉', icon: 'person',     count: '312' },
  { key: 'followers', label: '팔로워', icon: 'group',      count: '4,821' },
]

export default function ProfilePage() {
  const [tab, setTab]           = useState('works')
  const [followed, setFollowed] = useState(false)
  const [sort, setSort]         = useState<'recent' | 'popular'>('recent')

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>

      {/* 커버 배너 */}
      <div className="relative h-44 overflow-hidden"
        style={{ background: 'linear-gradient(90deg,#2f81f7cc,#2f81f7,#818cf8)' }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: [
            'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,255,255,0.2) 20px,rgba(255,255,255,0.2) 21px)',
            'repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,0.2) 20px,rgba(255,255,255,0.2) 21px)',
          ].join(','),
        }} />
        <div className="absolute right-16 top-6 text-7xl opacity-15 select-none">🔮</div>
        <div className="absolute right-40 bottom-3 text-4xl opacity-10 select-none">🌙</div>
      </div>

      {/* 프로필 인포 바 */}
      <div className="border-b" style={{ background: '#161b22', borderColor: '#30363d' }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 pt-2" style={{ marginTop: -32 }}>
            {/* 아바타 + 이름 */}
            <div className="flex items-end gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl border-4 shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#6ee7b7,#0d9488)', color: '#fff', borderColor: '#0d1117' }}>
                  PW
                </div>
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h1 className="text-xl font-bold">PixelWitch</h1>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7' }}>Master</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(63,185,80,0.1)', color: '#3fb950' }}>커미션 Open</span>
                </div>
                <p className="text-xs" style={{ color: '#7d8590' }}>@pixelwitch · 가입 2023.08 · Seoul, Korea</p>
              </div>
            </div>
            {/* 버튼 */}
            <div className="flex gap-2 sm:mb-1">
              <button onClick={() => setFollowed(v => !v)}
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all"
                style={followed
                  ? { background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }
                  : { background: '#2f81f7', color: '#fff' }}>
                <span className="material-symbols-outlined text-base">{followed ? 'person_check' : 'person_add'}</span>
                {followed ? '팔로잉' : '팔로우'}
              </button>
              <button className="p-2 rounded-xl transition-all hover:bg-[#1c2128]"
                style={{ border: '1px solid #30363d' }}>
                <span className="material-symbols-outlined text-base" style={{ color: '#7d8590' }}>chat</span>
              </button>
              <button className="p-2 rounded-xl transition-all hover:bg-[#1c2128]"
                style={{ border: '1px solid #30363d' }}>
                <span className="material-symbols-outlined text-base" style={{ color: '#7d8590' }}>more_horiz</span>
              </button>
            </div>
          </div>

          {/* 바이오 + 링크 */}
          <div className="pb-4 max-w-2xl">
            <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>
              사이버펑크 & 판타지 픽셀아트 전문 🔮 5년차 RPG 아이템·UI 일러스트레이터
              <Link to="/commission/1" className="font-bold ml-1 hover:underline" style={{ color: '#2f81f7' }}>커미션 보기 →</Link>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs" style={{ color: '#7d8590' }}>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">link</span>
                <a href="#" className="hover:underline" style={{ color: '#2f81f7' }}>pixelwitch.art</a>
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">palette</span>
                Lospec: pixelwitch
              </span>
            </div>
          </div>

          {/* 통계 */}
          <div className="flex flex-wrap gap-6 py-3 border-t text-sm" style={{ borderColor: '#30363d' }}>
            {[['128', '작품'], ['4,821', '팔로워'], ['312', '팔로잉'], ['92.4k', '총 좋아요'], ['23', '에셋']].map(([val, label]) => (
              <div key={label}>
                <span className="font-bold">{val}</span>
                <span className="ml-1" style={{ color: '#7d8590' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 탭 사이드바 + 콘텐츠 */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 flex gap-6 items-start">

        {/* ── 좌측 탭 사이드바 ─── */}
        <nav className="hidden sm:flex flex-col flex-shrink-0 w-44 sticky top-[4.5rem] gap-0.5">
          {TABS.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all"
              style={tab === t.key
                ? { background: 'rgba(47,129,247,0.12)', color: '#2f81f7' }
                : { color: '#7d8590' }}>
              <span className="material-symbols-outlined text-base flex-shrink-0"
                style={{ fontVariationSettings: tab === t.key ? "'FILL' 1" : "'FILL' 0" }}>
                {t.icon}
              </span>
              <span className="flex-1">{t.label}</span>
              <span className="text-xs px-1.5 py-0.5 rounded-full flex-shrink-0"
                style={{ background: tab === t.key ? 'rgba(47,129,247,0.15)' : '#21262d', color: tab === t.key ? '#2f81f7' : '#484f58' }}>
                {t.count}
              </span>
            </button>
          ))}
        </nav>

        {/* ── 우측 콘텐츠 ─── */}
        <div className="flex-1 min-w-0">

          {/* 모바일 탭 (sm 미만) */}
          <div className="flex sm:hidden overflow-x-auto no-scrollbar gap-1 mb-4">
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                style={tab === t.key
                  ? { background: 'rgba(47,129,247,0.15)', color: '#2f81f7' }
                  : { background: '#21262d', color: '#7d8590' }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* 콘텐츠 헤더 */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-base">
              {TABS.find(t => t.key === tab)?.label}
              <span className="ml-2 text-sm font-normal" style={{ color: '#7d8590' }}>
                {TABS.find(t => t.key === tab)?.count}
              </span>
            </h2>
            {tab === 'works' && (
              <div className="flex gap-1">
                {(['recent', 'popular'] as const).map(s => (
                  <button key={s} onClick={() => setSort(s)}
                    className="px-3 py-1 rounded-lg text-xs font-bold transition-colors"
                    style={sort === s
                      ? { background: 'rgba(47,129,247,0.15)', color: '#2f81f7' }
                      : { background: '#21262d', color: '#7d8590' }}>
                    {s === 'recent' ? '최신순' : '인기순'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 작품 */}
          {tab === 'works' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 6 }}>
                {WORKS.map(work => (
                  <Link key={work.id} to={`/gallery/${work.id}`}
                    className="relative overflow-hidden rounded-lg cursor-pointer group"
                    style={{ aspectRatio: '1' }}>
                    <div className="w-full h-full checkerboard" style={{ background: work.bg }} />
                    <div className="absolute inset-0 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-opacity opacity-0 group-hover:opacity-100"
                      style={{ background: 'rgba(0,0,0,0.55)' }}>
                      <span className="font-bold text-sm text-center px-1 text-white">{work.title}</span>
                      <span className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        {work.likes}
                      </span>
                    </div>
                    {work.featured && (
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold"
                        style={{ background: '#2f81f7', color: '#fff' }}>추천</div>
                    )}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:bg-[#2f81f7] hover:text-white active:scale-95"
                  style={{ borderColor: '#2f81f7', color: '#2f81f7' }}>
                  <span className="material-symbols-outlined text-sm">expand_more</span>더 보기
                </button>
              </div>
            </div>
          )}

          {/* 에셋 */}
          {tab === 'assets' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {ASSETS.map(asset => (
                <div key={asset.title} className="rounded-xl border overflow-hidden cursor-pointer hover:shadow-md transition-all"
                  style={{ background: '#21262d', borderColor: '#30363d' }}>
                  <div className="aspect-square checkerboard" style={{ background: asset.bg }} />
                  <div className="p-3">
                    <div className="font-bold text-sm">{asset.title}</div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs" style={{ color: '#7d8590' }}>{asset.rating} ★</span>
                      <span className="text-sm font-bold" style={{ color: asset.price === 0 ? '#3fb950' : '#2f81f7' }}>
                        {asset.price === 0 ? '무료' : `₩${asset.price.toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 좋아요 */}
          {tab === 'liked' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 6 }}>
              {LIKED.map(item => (
                <div key={item.title} className="relative overflow-hidden rounded-lg cursor-pointer group"
                  style={{ aspectRatio: '1' }}>
                  <div className="w-full h-full checkerboard" style={{ background: item.bg }} />
                  <div className="absolute inset-0 rounded-lg flex flex-col items-center justify-center gap-0.5 transition-opacity opacity-0 group-hover:opacity-100"
                    style={{ background: 'rgba(0,0,0,0.55)' }}>
                    <span className="font-bold text-sm text-white">{item.title}</span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>@{item.author}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 팔로잉 */}
          {tab === 'following' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {FOLLOWING.map(user => (
                <div key={user.name} className="rounded-xl border p-4 text-center hover:shadow-md transition-all"
                  style={{ background: '#21262d', borderColor: '#30363d' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-2"
                    style={{ background: user.gradient }}>{user.initials}</div>
                  <div className="font-bold text-sm">{user.name}</div>
                  <div className="text-xs mt-0.5 mb-2" style={{ color: '#7d8590' }}>팔로워 {user.followers}</div>
                  <button className="px-4 py-1 rounded-full text-xs font-bold transition-all hover:opacity-80"
                    style={{ background: 'rgba(47,129,247,0.1)', border: '1px solid rgba(47,129,247,0.2)', color: '#2f81f7' }}>
                    팔로잉
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* 팔로워 */}
          {tab === 'followers' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {FOLLOWERS.map(user => (
                <div key={user.name} className="rounded-xl border p-4 text-center hover:shadow-md transition-all"
                  style={{ background: '#21262d', borderColor: '#30363d' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-2"
                    style={{ background: user.gradient }}>{user.initials}</div>
                  <div className="font-bold text-sm">{user.name}</div>
                  <div className="text-xs mt-0.5 mb-2" style={{ color: '#7d8590' }}>작품 {user.works}개</div>
                  <button className="px-4 py-1 rounded-full text-xs font-bold transition-all hover:bg-[#2f81f7] hover:text-white"
                    style={{ background: '#1c2128', border: '1px solid #30363d', color: '#7d8590' }}>
                    팔로우
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
