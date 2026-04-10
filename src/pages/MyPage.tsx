import { useState } from 'react'
import { Link } from 'react-router-dom'

const WORKS = [
  { id: 1, title: 'Neon Rain District',    likes: '1.8k', bg: 'linear-gradient(135deg,#0a1628,#2f81f7)', featured: true },
  { id: 2, title: 'Cloud Peak Sanctuary',  likes: '3.2k', bg: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { id: 3, title: 'The Last Voyager',      likes: '940',  bg: 'linear-gradient(135deg,#2c1810,#6b3020)' },
  { id: 4, title: 'Retro Wave Ocean',      likes: '5.4k', bg: 'linear-gradient(135deg,#0a0a1a,#f0883e)' },
  { id: 5, title: 'Geometric Flow 04',     likes: '1.1k', bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
  { id: 6, title: 'Cozy Code Terminal',    likes: '10k',  bg: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
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

const SAVED = [
  { id: 1, title: 'Dungeon Tileset WIP', lastEdit: '2일 전', bg: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { id: 2, title: 'Hero Sprite Sheet',   lastEdit: '5일 전', bg: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { id: 3, title: 'UI Elements v3',      lastEdit: '1주 전', bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
]

const TABS = [
  { key: 'works',      label: '작품',          icon: 'palette',    count: '84' },
  { key: 'assets',     label: '에셋',          icon: 'sell',       count: '12' },
  { key: 'liked',      label: '좋아요',        icon: 'favorite',   count: '2.1k' },
  { key: 'following',  label: '팔로잉',        icon: 'person',     count: '450' },
  { key: 'followers',  label: '팔로워',        icon: 'group',      count: '1,200' },
  { key: 'saved',      label: '저장된 프로젝트', icon: 'folder',    count: '3',   private: true },
  { key: 'commission', label: '커미션',         icon: 'payments',  count: '0',   private: true },
]

export default function MyPage() {
  const [tab, setTab]   = useState('works')
  const [sort, setSort] = useState<'recent' | 'popular'>('recent')

  return (
    <div className="min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>

      {/* 커버 배너 */}
      <div className="relative h-44 overflow-hidden"
        style={{ background: 'linear-gradient(90deg,#2f81f7cc,#2f81f7,#6366f1)' }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: [
            'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(255,255,255,0.2) 20px,rgba(255,255,255,0.2) 21px)',
            'repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(255,255,255,0.2) 20px,rgba(255,255,255,0.2) 21px)',
          ].join(','),
        }} />
        <div className="absolute right-16 top-6 text-7xl opacity-15 select-none">🎨</div>
        <div className="absolute right-44 bottom-3 text-4xl opacity-10 select-none">✦</div>
        {/* 커버 변경 버튼 */}
        <button className="absolute bottom-3 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors hover:bg-white/20"
          style={{ background: 'rgba(0,0,0,0.3)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
          <span className="material-symbols-outlined text-sm">photo_camera</span>
          커버 변경
        </button>
      </div>

      {/* 프로필 인포 바 */}
      <div className="border-b" style={{ background: '#161b22', borderColor: '#30363d' }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 pt-2" style={{ marginTop: -32 }}>
            {/* 아바타 + 이름 */}
            <div className="flex items-end gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl border-4 shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#2f81f7,#1a3a6b)', color: '#fff', borderColor: '#0d1117' }}>
                  AP
                </div>
                <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors hover:bg-[#292f38]"
                  style={{ background: '#21262d', borderColor: '#0d1117' }}
                  title="아바타 변경">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: 12 }}>edit</span>
                </button>
              </div>
              <div className="pb-1">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h1 className="text-xl font-bold">PixelMaster_01</h1>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7' }}>Master</span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(63,185,80,0.1)', color: '#3fb950' }}>커미션 Open</span>
                </div>
                <p className="text-xs" style={{ color: '#7d8590' }}>@artiste_pixel · 가입 2023.04 · Seoul, Korea</p>
              </div>
            </div>
            {/* 액션 버튼 */}
            <div className="flex gap-2 sm:mb-1">
              <Link to="/editor"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg,#2f81f7,#6366f1)', color: '#fff' }}>
                <span className="material-symbols-outlined text-base">add</span>
                새 작품
              </Link>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-sm transition-all hover:bg-[#292f38]"
                style={{ background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }}>
                <span className="material-symbols-outlined text-base">edit</span>
                프로필 편집
              </button>
              <button className="p-2 rounded-xl transition-all hover:bg-[#1c2128]"
                style={{ border: '1px solid #30363d' }}>
                <span className="material-symbols-outlined text-base" style={{ color: '#7d8590' }}>settings</span>
              </button>
            </div>
          </div>

          {/* 바이오 + 링크 */}
          <div className="pb-4 max-w-2xl">
            <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>
              아이소메트릭 배경 전문 픽셀아티스트 🎨 16비트 클래식 & 사이버펑크 영감.
              <span className="font-bold ml-1" style={{ color: '#2f81f7' }}>'The Neon Grid' 시리즈 작업 중.</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs" style={{ color: '#7d8590' }}>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">link</span>
                <a href="#" className="hover:underline" style={{ color: '#2f81f7' }}>artiste.pixel.io</a>
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">palette</span>
                Lospec: artiste_pixel
              </span>
            </div>
          </div>

          {/* 통계 */}
          <div className="flex flex-wrap gap-6 py-3 border-t text-sm" style={{ borderColor: '#30363d' }}>
            {[['84', '작품'], ['1,200', '팔로워'], ['450', '팔로잉'], ['8.4k', '총 좋아요'], ['12', '에셋']].map(([val, label]) => (
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
          {TABS.map((t, i) => (
            <div key={t.key}>
              {/* 공개/비공개 구분선 */}
              {t.private && !TABS[i - 1]?.private && (
                <div className="my-2 border-t" style={{ borderColor: '#21262d' }} />
              )}
              <button onClick={() => setTab(t.key)}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all"
                style={tab === t.key
                  ? { background: 'rgba(47,129,247,0.12)', color: '#2f81f7' }
                  : { color: '#7d8590' }}>
                <span className="material-symbols-outlined text-base flex-shrink-0"
                  style={{ fontVariationSettings: tab === t.key ? "'FILL' 1" : "'FILL' 0" }}>
                  {t.icon}
                </span>
                <span className="flex-1 flex items-center gap-1">
                  {t.label}
                  {t.private && (
                    <span className="material-symbols-outlined opacity-40" style={{ fontSize: 12 }}>lock</span>
                  )}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: tab === t.key ? 'rgba(47,129,247,0.15)' : '#21262d', color: tab === t.key ? '#2f81f7' : '#484f58' }}>
                  {t.count}
                </span>
              </button>
            </div>
          ))}
        </nav>

        {/* ── 우측 콘텐츠 ─── */}
        <div className="flex-1 min-w-0">

          {/* 모바일 탭 */}
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
            {tab === 'saved' && (
              <Link to="/editor"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all"
                style={{ background: '#2f81f7', color: '#fff' }}>
                <span className="material-symbols-outlined text-base">add</span>
                새 프로젝트
              </Link>
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
                    <button className="absolute top-1.5 right-1.5 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(0,0,0,0.6)' }}
                      onClick={e => e.preventDefault()}>
                      <span className="material-symbols-outlined text-sm text-white">more_horiz</span>
                    </button>
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

          {/* 저장된 프로젝트 */}
          {tab === 'saved' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
              {SAVED.map(p => (
                <Link key={p.id} to="/editor"
                  className="group rounded-xl border overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: '#21262d', borderColor: '#30363d' }}>
                  <div className="aspect-video checkerboard" style={{ background: p.bg }} />
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">{p.title}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#7d8590' }}>최근 편집 {p.lastEdit}</div>
                    </div>
                    <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: '#7d8590' }}>arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* 커미션 */}
          {tab === 'commission' && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="material-symbols-outlined text-5xl" style={{ color: '#30363d' }}>payments</span>
              <p className="font-bold text-lg" style={{ color: '#7d8590' }}>커미션 기능 준비 중</p>
              <p className="text-sm" style={{ color: '#484f58' }}>커미션 수락 및 진행 현황이 여기에 표시됩니다.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
