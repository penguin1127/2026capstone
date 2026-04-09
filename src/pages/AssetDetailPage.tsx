import { useState } from 'react'
import { Link } from 'react-router-dom'

const THUMBS = [
  'linear-gradient(135deg,#2c1810,#6b3020)',
  'linear-gradient(135deg,#0d2818,#1a5c2a)',
  'linear-gradient(135deg,#1a0a2e,#4a1060)',
  'linear-gradient(135deg,#0a1628,#2f81f7)',
  'linear-gradient(135deg,#2c0a00,#6b1a00)',
  'linear-gradient(135deg,#0a0a1a,#3a3a6b)',
]

const REVIEWS = [
  { id: 1, author: 'retro_rpg', rating: 5, content: '퀄리티 최고예요! 게임에 바로 쓸 수 있을 정도로 완성도가 높습니다.', time: '3일 전', verified: true, gradient: 'linear-gradient(135deg,#2c1810,#6b3020)' },
  { id: 2, author: 'dungeon_dev', rating: 4, content: '다양한 변형이 포함되어 있어서 활용도가 높네요. 다음 팩도 기대됩니다.', time: '1주 전', verified: true, gradient: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
  { id: 3, author: 'mech_art', rating: 5, content: '무료인데 이 정도 퀄리티면 정말 감사한 에셋이에요.', time: '2주 전', verified: false, gradient: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
]

const RATING_DIST = [78, 15, 5, 1, 1]

export default function AssetDetailPage() {
  const [selectedThumb, setSelectedThumb] = useState(0)

  return (
    <div style={{ background: '#0d1117', color: '#e6edf3' }}>
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* 브레드크럼 */}
        <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: '#7d8590' }}>
          <Link to="/assets" className="hover:text-white transition-colors">에셋 스토어</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span>무기</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span style={{ color: '#e6edf3' }}>Sword Pack Vol.1</span>
        </div>

        {/* 상단: 프리뷰 + 구매 패널 */}
        <div className="flex gap-8 mb-12">
          {/* 프리뷰 */}
          <div className="flex-1">
            <div className="checkerboard rounded-2xl border mb-3 flex items-center justify-center"
              style={{ height: 320, borderColor: '#30363d' }}>
              <div className="w-48 h-48 rounded-xl" style={{ background: THUMBS[selectedThumb] }} />
            </div>
            <div className="flex gap-2">
              {THUMBS.map((bg, i) => (
                <button key={i} onClick={() => setSelectedThumb(i)}
                  className="w-16 h-16 checkerboard rounded-xl border-2 transition-all flex items-center justify-center"
                  style={{ borderColor: selectedThumb === i ? '#2f81f7' : '#30363d' }}>
                  <div className="w-8 h-8 rounded" style={{ background: bg }} />
                </button>
              ))}
              <div className="w-16 h-16 checkerboard rounded-xl border-2 flex items-center justify-center text-sm font-bold"
                style={{ borderColor: '#30363d', color: '#7d8590' }}>+12</div>
            </div>
          </div>

          {/* 구매 패널 */}
          <div className="w-80 shrink-0">
            <div className="rounded-2xl border p-6" style={{ background: '#292f38', borderColor: '#30363d' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-lg text-xs font-bold"
                  style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7', border: '1px solid rgba(47,129,247,0.2)' }}>
                  무기
                </span>
                <span className="px-2 py-0.5 rounded-lg text-xs font-bold"
                  style={{ background: 'rgba(63,185,80,0.1)', color: '#3fb950', border: '1px solid rgba(63,185,80,0.2)' }}>
                  PNG
                </span>
              </div>
              <h1 className="text-2xl font-bold mb-1">Sword Pack Vol.1</h1>
              <Link to="/profile/sprite_master" className="text-sm hover:underline" style={{ color: '#2f81f7' }}>
                @sprite_master
              </Link>
              <div className="grid grid-cols-3 gap-2 my-4 text-center">
                {[['⭐ 4.8', '평점'], ['2,340', '다운로드'], ['38', '리뷰']].map(([val, label]) => (
                  <div key={label} className="rounded-xl py-2" style={{ background: '#21262d' }}>
                    <p className="font-bold text-sm">{val}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#7d8590' }}>{label}</p>
                  </div>
                ))}
              </div>
              <div className="py-4 border-y mb-4" style={{ borderColor: '#30363d' }}>
                <p className="text-4xl font-bold" style={{ color: '#3fb950' }}>무료</p>
              </div>
              <button className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 mb-2 hover:opacity-90 transition-opacity"
                style={{ background: '#2f81f7', color: '#fff' }}>
                <span className="material-symbols-outlined text-base">download</span>
                다운로드
              </button>
              <button className="w-full py-2.5 rounded-xl text-sm transition-colors hover:bg-[#292f38]"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>
                즐겨찾기
              </button>
              <div className="mt-4 space-y-1.5 text-xs" style={{ color: '#7d8590' }}>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">folder</span>PNG · 32×32 · 1.2 MB</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span>라이선스: 상업적 이용 가능</p>
                <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">update</span>최종 업데이트: 2026.03.15</p>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 설명 + 리뷰 + 사이드바 */}
        <div className="flex gap-8">
          <div className="flex-1 space-y-10">
            {/* 설명 */}
            <section>
              <h2 className="text-xl font-bold mb-4">에셋 설명</h2>
              <div className="rounded-2xl border p-6 text-sm leading-relaxed"
                style={{ background: '#161b22', borderColor: '#30363d', color: '#7d8590' }}>
                <p className="mb-4">다양한 판타지 검 스프라이트 팩입니다. 총 24종의 검 디자인이 포함되어 있으며, 각각 일반/빛나는/파손 3가지 상태를 제공합니다.</p>
                <ul className="space-y-2">
                  {['✅ 24종 검 스프라이트', '✅ 3가지 상태 (일반/빛나는/파손)', '✅ 32×32 해상도', '✅ 투명 배경 PNG', '✅ 상업적 이용 가능'].map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['무기', '판타지', '검', 'RPG', '무료', '32x32'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs"
                      style={{ background: '#21262d', border: '1px solid #30363d' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* 리뷰 */}
            <section>
              <h2 className="text-xl font-bold mb-4">리뷰 ({REVIEWS.length})</h2>
              {/* 평점 분포 */}
              <div className="rounded-2xl border p-5 mb-6" style={{ background: '#161b22', borderColor: '#30363d' }}>
                <div className="flex items-center gap-6 mb-4">
                  <div className="text-center">
                    <p className="text-5xl font-bold">4.8</p>
                    <div className="flex mt-1">{[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f0883e' }}>★</span>)}</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {RATING_DIST.map((pct, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs" style={{ color: '#7d8590' }}>
                        <span>{5 - i}★</span>
                        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#21262d' }}>
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: '#f0883e' }} />
                        </div>
                        <span>{pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {REVIEWS.map(r => (
                  <div key={r.id} className="rounded-2xl border p-5"
                    style={{ background: '#161b22', borderColor: '#30363d' }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full" style={{ background: r.gradient }} />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">@{r.author}</span>
                            {r.verified && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                                style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7' }}>구매 인증</span>
                            )}
                          </div>
                          <div className="flex mt-0.5">{[1,2,3,4,5].map(i => (
                            <span key={i} style={{ color: i <= r.rating ? '#f0883e' : '#30363d', fontSize: 12 }}>★</span>
                          ))}</div>
                        </div>
                      </div>
                      <span className="text-xs" style={{ color: '#7d8590' }}>{r.time}</span>
                    </div>
                    <p className="text-sm" style={{ color: '#7d8590' }}>{r.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 사이드바 */}
          <div className="w-64 shrink-0 space-y-4">
            <div className="rounded-2xl border p-4" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <p className="font-bold mb-3">라이선스</p>
              {[['상업적 이용', true], ['수정 가능', true], ['재배포', false], ['출처 표기 필요', true]].map(([label, ok]) => (
                <div key={String(label)} className="flex justify-between py-2 border-b last:border-0 text-sm"
                  style={{ borderColor: '#30363d', color: '#7d8590' }}>
                  <span>{String(label)}</span>
                  <span style={{ color: ok ? '#3fb950' : '#f85149' }}>{ok ? '✓' : '✗'}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border p-4" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <p className="font-bold mb-3 text-sm">버전 내역</p>
              {[['v1.2', '2026.03.15', '아이템 6종 추가'], ['v1.1', '2026.01.20', '파손 상태 추가'], ['v1.0', '2025.12.01', '최초 출시']].map(([ver, date, note]) => (
                <div key={ver} className="py-2 border-b last:border-0 text-xs" style={{ borderColor: '#30363d', color: '#7d8590' }}>
                  <div className="flex justify-between mb-0.5">
                    <span className="font-bold" style={{ color: '#2f81f7' }}>{ver}</span>
                    <span>{date}</span>
                  </div>
                  <p>{note}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border p-4" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <p className="font-bold mb-3 text-sm">작가</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: 'linear-gradient(135deg,#2c1810,#6b3020)' }} />
                <div>
                  <p className="font-bold text-sm">sprite_master</p>
                  <p className="text-xs" style={{ color: '#7d8590' }}>에셋 24개</p>
                </div>
              </div>
              <Link to="/profile/sprite_master"
                className="block w-full text-center py-2 rounded-xl text-sm transition-colors hover:bg-[#21262d]"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>
                프로필 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
