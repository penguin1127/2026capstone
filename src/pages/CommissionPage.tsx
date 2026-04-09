import { useState } from 'react'
import { Link } from 'react-router-dom'

const STYLES = ['All Styles', 'Character', 'Environment', 'Animation', 'Game Asset', 'Portrait']

const ARTISTS = [
  { id: 1, name: 'SpriteKnight', rating: 4.9, reviews: 124, bio: '판타지 RPG 캐릭터 전문. 빠른 작업 속도와 섬세한 표현력.', tags: ['캐릭터', '판타지', 'RPG'], price: 25000, open: true, samples: ['linear-gradient(135deg,#1a1a3a,#4a4abf)', 'linear-gradient(135deg,#2c1810,#8b4513)', 'linear-gradient(135deg,#0d2818,#3abf6b)'], gradient: 'linear-gradient(135deg,#1a1a3a,#2f81f7)' },
  { id: 2, name: 'PixelWitch', rating: 4.8, reviews: 98, bio: '다크 판타지 및 사이버펑크 배경 전문 작가.', tags: ['배경', '사이버펑크', '다크'], price: 35000, open: true, samples: ['linear-gradient(135deg,#0a0a1a,#1a1a4a)', 'linear-gradient(135deg,#1a0a2e,#8b2de0)', 'linear-gradient(135deg,#0a1628,#2f81f7)'], gradient: 'linear-gradient(135deg,#1a0a2e,#8b2de0)' },
  { id: 3, name: 'NeonBrush', rating: 4.7, reviews: 76, bio: '애니메이션 스프라이트 및 이펙트 전문.', tags: ['애니메이션', '이펙트', '스프라이트'], price: 45000, open: false, samples: ['linear-gradient(135deg,#0a1628,#f0883e)', 'linear-gradient(135deg,#1a1a0a,#f0c030)', 'linear-gradient(135deg,#0a2a1a,#3abf6b)'], gradient: 'linear-gradient(135deg,#0a1628,#f0883e)' },
  { id: 4, name: 'RetroArtist', rating: 4.6, reviews: 65, bio: '클래식 레트로 스타일 게임 에셋 전문.', tags: ['레트로', '게임', '타일셋'], price: 20000, open: true, samples: ['linear-gradient(135deg,#2c1810,#6b3020)', 'linear-gradient(135deg,#1a0a0a,#4a1a1a)', 'linear-gradient(135deg,#0a0a0a,#3a3a3a)'], gradient: 'linear-gradient(135deg,#2c1810,#6b3020)' },
  { id: 5, name: 'CutePixel', rating: 4.9, reviews: 210, bio: '귀여운 캐릭터와 동물 초상화 전문.', tags: ['귀여운', '캐릭터', '동물'], price: 18000, open: true, samples: ['linear-gradient(135deg,#0a2a0a,#3abf6b)', 'linear-gradient(135deg,#0a1a2a,#1a6b8f)', 'linear-gradient(135deg,#2a0a2a,#8b1a8b)'], gradient: 'linear-gradient(135deg,#0a2a1a,#3abf6b)' },
  { id: 6, name: 'MechArtist', rating: 4.5, reviews: 54, bio: '메카닉/SF 디자인 전문. 복잡한 기계 표현 특기.', tags: ['SF', '메카', '캐릭터'], price: 55000, open: false, samples: ['linear-gradient(135deg,#0a0a1a,#3a3a6b)', 'linear-gradient(135deg,#1a1a1a,#4a4a4a)', 'linear-gradient(135deg,#0a1a2a,#2f81f7)'], gradient: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
]

export default function CommissionPage() {
  const [tab, setTab] = useState<'artists' | 'requests'>('artists')
  const [activeStyle, setActiveStyle] = useState('All Styles')

  return (
    <div style={{ background: '#0d1117', color: '#e6edf3' }}>
      {/* 헤더 */}
      <div className="border-b px-8 pt-10 pb-8" style={{ borderColor: '#30363d' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Commission</h1>
              <p style={{ color: '#7d8590' }}>원하는 픽셀아트를 작가에게 의뢰하거나, 서비스를 등록하세요</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-xl font-bold text-sm transition-colors hover:bg-[#21262d]"
                style={{ border: '1px solid #30363d', color: '#e6edf3' }}>의뢰 등록하기</button>
              <button className="px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90"
                style={{ background: '#2f81f7', color: '#fff' }}>서비스 등록하기</button>
            </div>
          </div>
          {/* 탭 */}
          <div className="flex gap-1 rounded-xl p-1 w-fit mt-8"
            style={{ background: '#1c2128' }}>
            {[['artists', '작가 찾기'], ['requests', '의뢰 찾기']].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key as typeof tab)}
                className="px-8 py-2.5 rounded-lg font-bold text-sm transition-colors"
                style={tab === key
                  ? { background: '#292f38', color: '#2f81f7' }
                  : { color: '#7d8590' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-8 pb-16">
        {/* 스타일 필터 */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {STYLES.map(s => (
            <button key={s} onClick={() => setActiveStyle(s)}
              className="px-5 py-2.5 rounded-full font-bold text-sm transition-colors"
              style={activeStyle === s
                ? { background: '#2f81f7', color: '#fff' }
                : { background: '#21262d', color: '#7d8590', border: '1px solid #30363d' }}>
              {s}
            </button>
          ))}
          <div className="ml-auto">
            <select className="appearance-none px-5 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: '#21262d', border: '1px solid #30363d', color: '#e6edf3' }}>
              <option>추천순</option>
              <option>평점순</option>
              <option>낮은 가격순</option>
            </select>
          </div>
        </div>

        {tab === 'artists' && (
          <div className="grid grid-cols-3 gap-6">
            {ARTISTS.map(artist => (
              <div key={artist.id} className="rounded-2xl overflow-hidden border transition-shadow hover:shadow-lg"
                style={{ background: '#161b22', borderColor: '#30363d' }}>
                {/* 샘플 작품 */}
                <div className="grid grid-cols-3 h-36">
                  {artist.samples.map((bg, i) => (
                    <div key={i} className="transition-transform hover:scale-105"
                      style={{ background: bg, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }} />
                  ))}
                </div>
                {/* 정보 */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl" style={{ background: artist.gradient }} />
                      <span className="font-bold">{artist.name}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border"
                      style={artist.open
                        ? { background: 'rgba(63,185,80,0.1)', color: '#3fb950', borderColor: 'rgba(63,185,80,0.3)' }
                        : { background: '#21262d', color: '#7d8590', borderColor: '#30363d' }}>
                      {artist.open ? 'Open' : 'Closed'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs mb-3" style={{ color: '#7d8590' }}>
                    <span style={{ color: '#f0883e' }}>★</span>
                    <span>{artist.rating}</span>
                    <span>· 리뷰 {artist.reviews}</span>
                  </div>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: '#7d8590' }}>{artist.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {artist.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7' }}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t"
                    style={{ borderColor: '#30363d' }}>
                    <div>
                      <span className="text-xs" style={{ color: '#7d8590' }}>시작가</span>
                      <p className="font-bold text-sm">₩{artist.price.toLocaleString()} ~</p>
                    </div>
                    <Link to={`/commission/${artist.id}`}
                      className="px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90"
                      style={{ background: '#2f81f7', color: '#fff' }}>
                      서비스 보기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'requests' && (
          <div className="flex items-center justify-center py-24 rounded-2xl border"
            style={{ borderColor: '#30363d', color: '#7d8590', borderStyle: 'dashed' }}>
            <div className="text-center">
              <span className="material-symbols-outlined text-5xl mb-3 block" style={{ color: '#30363d' }}>inbox</span>
              <p className="font-bold mb-1">등록된 의뢰가 없습니다</p>
              <p className="text-sm">첫 번째로 의뢰를 등록해보세요</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
