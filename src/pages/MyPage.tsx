import { useState } from 'react'
import { Link } from 'react-router-dom'

const SIDENAV = [
  { label: 'Profile', icon: 'person' },
  { label: 'Creations', icon: 'palette', active: true },
  { label: 'Activity', icon: 'bolt' },
  { label: 'Commissions', icon: 'payments' },
  { label: 'Social', icon: 'group' },
]

const WORKS = [
  { id: 1, title: 'Neon Rain District', category: 'Isometric Series', likes: 245, views: '1.8k', bg: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { id: 2, title: 'Cloud Peak Sanctuary', category: 'Landscape', likes: 412, views: '3.2k', bg: 'linear-gradient(135deg,#1a0a2e,#4a1060)' },
  { id: 3, title: 'The Last Voyager', category: 'Character Design', likes: 189, views: '940', bg: 'linear-gradient(135deg,#2c1810,#6b3020)' },
  { id: 4, title: 'Retro Wave Ocean', category: 'Environment', likes: 560, views: '5.4k', bg: 'linear-gradient(135deg,#0a0a1a,#f0883e)' },
  { id: 5, title: 'Geometric Flow 04', category: 'Abstract', likes: 128, views: '1.1k', bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
  { id: 6, title: 'Cozy Code Terminal', category: 'Isometric Series', likes: 892, views: '10k', bg: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
]

export default function MyPage() {
  const [activeTab, setActiveTab] = useState('Creations')
  const [activeContent, setActiveContent] = useState('Gallery Works')

  return (
    <div className="flex min-h-screen" style={{ background: '#0d1117', color: '#e6edf3' }}>

      {/* 사이드바 (xl 이상만 표시) */}
      <aside className="hidden xl:flex flex-col w-64 fixed left-0 top-0 h-screen pt-14 z-30"
        style={{ background: '#1c2128' }}>
        {/* 미니 프로필 */}
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: 'rgba(47,129,247,0.2)', color: '#2f81f7' }}>AP</div>
            <div>
              <div className="font-bold text-sm">ArtistePixel</div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: '#2f81f7' }}>Master Rank</div>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <nav className="flex flex-col gap-1 flex-1">
          {SIDENAV.map(item => (
            <button key={item.label} onClick={() => setActiveTab(item.label)}
              className="flex items-center gap-4 px-6 py-3 text-sm font-semibold transition-colors text-left"
              style={activeTab === item.label
                ? { background: '#21262d', color: '#2f81f7', borderRadius: '0 9999px 9999px 0' }
                : { color: '#7d8590' }}>
              <span className="material-symbols-outlined"
                style={{ fontVariationSettings: activeTab === item.label ? "'FILL' 1" : "'FILL' 0" }}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* 하단 버튼 */}
        <div className="px-6 pb-8 flex flex-col gap-4">
          <Link to="/editor"
            className="w-full py-3 rounded-lg font-bold text-sm text-center hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #2f81f7, #6366f1)', color: '#fff' }}>
            New Creation
          </Link>
          <div className="flex flex-col gap-1">
            {[['settings', 'Settings'], ['help', 'Help']].map(([icon, label]) => (
              <a key={label} href="#" className="flex items-center gap-4 py-2 text-xs font-semibold transition-colors hover:text-white"
                style={{ color: '#7d8590' }}>
                <span className="material-symbols-outlined text-lg">{icon}</span>{label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* 메인 */}
      <main className="flex-1 xl:ml-64 pt-10 pb-12 px-6 md:px-12 max-w-7xl mx-auto">

        {/* 프로필 섹션 */}
        <section className="relative rounded-xl p-8 mb-12 border"
          style={{ background: '#21262d', borderColor: '#30363d' }}>
          {/* 픽셀 도트 배경 */}
          <div className="absolute inset-0 rounded-xl opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, #2f81f7 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* 아바타 */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center font-bold text-4xl ring-4 ring-[#161b22]"
                style={{ background: 'linear-gradient(135deg,#2f81f7,#1a3a6b)', color: '#fff' }}>
                AP
              </div>
              <div className="absolute bottom-2 right-2 p-1.5 rounded-full border-2"
                style={{ background: '#2f81f7', borderColor: '#161b22' }}>
                <span className="material-symbols-outlined text-sm text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>

            {/* 정보 */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight">PixelMaster_01</h1>
                  <p className="text-sm font-bold mt-1" style={{ color: '#2f81f7' }}>@artiste_pixel</p>
                </div>
                <button className="px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 self-center md:self-start transition-colors hover:bg-[#292f38]"
                  style={{ background: '#30363d', color: '#e6edf3' }}>
                  <span className="material-symbols-outlined text-lg">edit</span>
                  Edit Profile
                </button>
              </div>
              <p className="max-w-xl mb-6 leading-relaxed text-sm" style={{ color: '#7d8590' }}>
                Pixel artist specializing in isometric landscapes. Inspired by 16-bit classics and cyberpunk aesthetics.
                Currently working on 'The Neon Grid' series. Available for commissions.
              </p>
              <div className="flex justify-center md:justify-start gap-12 border-t pt-6" style={{ borderColor: '#30363d' }}>
                {[['1.2k', 'Followers'], ['450', 'Following'], ['8.4k', 'Likes']].map(([val, label]) => (
                  <div key={label} className="text-center md:text-left">
                    <div className="text-2xl font-bold">{val}</div>
                    <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: '#7d8590' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 콘텐츠 탭 */}
        <section>
          <div className="flex items-center justify-between border-b mb-8" style={{ borderColor: '#30363d' }}>
            <div className="flex gap-8">
              {['Gallery Works', 'Registered Assets', 'Saved Projects'].map(tab => (
                <button key={tab} onClick={() => setActiveContent(tab)}
                  className="pb-4 font-bold text-base transition-all border-b-2"
                  style={activeContent === tab
                    ? { color: '#e6edf3', borderColor: '#2f81f7' }
                    : { color: '#7d8590', borderColor: 'transparent' }}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="hidden sm:flex gap-2 mb-4">
              <button className="p-2 rounded-lg" style={{ background: '#21262d', color: '#7d8590' }}>
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-2 rounded-lg opacity-50 hover:bg-[#21262d] transition-colors" style={{ color: '#7d8590' }}>
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>

          {/* 작품 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WORKS.map(work => (
              <Link key={work.id} to={`/gallery/${work.id}`}
                className="group rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: '#21262d', borderColor: '#30363d' }}>
                <div className="aspect-square relative overflow-hidden"
                  style={{ background: '#292f38' }}>
                  <div className="w-full h-full pixel-step transition-transform duration-500 group-hover:scale-105"
                    style={{ background: work.bg }} />
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                      <span className="font-bold">{work.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">visibility</span>
                      <span className="font-bold">{work.views}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold truncate">{work.title}</h3>
                    <p className="text-xs uppercase tracking-tight mt-0.5" style={{ color: '#7d8590' }}>{work.category}</p>
                  </div>
                  <button className="transition-colors hover:text-[#2f81f7]" style={{ color: '#7d8590' }}>
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* 더 보기 */}
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 px-10 py-4 rounded-lg font-bold transition-all hover:bg-[#292f38] active:scale-95"
              style={{ background: '#30363d', color: '#e6edf3' }}>
              Explore More
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
      </main>

      {/* 모바일 하단 네비 */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 z-50 border-t"
        style={{ background: 'rgba(22,27,34,0.95)', borderColor: '#21262d' }}>
        {[
          { label: 'Profile', icon: 'person' },
          { label: 'Creations', icon: 'palette', active: true },
          { label: 'Activity', icon: 'bolt' },
          { label: 'Earn', icon: 'payments' },
        ].map(item => (
          <button key={item.label} className="flex flex-col items-center gap-1"
            style={{ color: item.active ? '#2f81f7' : '#7d8590', opacity: item.active ? 1 : 0.5 }}>
            <span className="material-symbols-outlined"
              style={{ fontVariationSettings: item.active ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
