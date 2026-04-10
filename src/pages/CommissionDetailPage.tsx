import { Link, useParams } from 'react-router-dom'

const SAMPLES = [
  { bg: 'linear-gradient(135deg,#1a1a4a,#2f81f7)' },
  { bg: 'linear-gradient(135deg,#1a0a2e,#6b3020)' },
  { bg: 'linear-gradient(135deg,#0d2818,#3abf6b)' },
  { bg: 'linear-gradient(135deg,#2c1810,#8b2de0)' },
  { bg: 'linear-gradient(135deg,#0a1628,#f0883e)' },
  { bg: 'linear-gradient(135deg,#0a0a1a,#3a3a6b)' },
  { bg: 'linear-gradient(135deg,#1a3a0a,#2f81f7)' },
  { bg: 'linear-gradient(135deg,#2a0a2a,#f43f5e)' },
]

const SCOPE = [
  { icon: 'straighten', label: '해상도', value: '16×16 ~ 64×64 px' },
  { icon: 'animation', label: '애니메이션', value: 'Walk / Run / Attack / Idle 등 협의' },
  { icon: 'folder_zip', label: '납품 파일', value: 'PNG 프레임 + 스프라이트시트 + .ase 소스' },
  { icon: 'sync', label: '수정 횟수', value: '플랜별 1~무제한 (사전 협의)' },
  { icon: 'schedule', label: '예상 납기', value: '7~21일 (복잡도에 따라 협의)' },
  { icon: 'extension', label: '엔진 지원', value: 'Unity / Godot 최적화 설정 파일 포함' },
]

const NOTICES = [
  '의뢰 전 반드시 레퍼런스 이미지 또는 상세 설명을 준비해 주세요.',
  '결제 후 취소는 작업 착수 전까지만 가능합니다.',
  '상업적 사용은 별도 라이선스 요금이 발생할 수 있습니다.',
  '2차 창작물(기존 IP 캐릭터)은 작가 재량으로 수락 여부가 결정됩니다.',
]

const REVIEWS = [
  {
    initials: 'G',
    gradient: 'linear-gradient(135deg,#22d3ee,#3b82f6)',
    author: '@GameDev_Kim',
    rating: 5,
    date: '2026.03.20',
    text: '소통도 잘 되고 납기일도 정확히 지켜주셨어요. 스프라이트 퀄리티가 기대 이상이었습니다. 재의뢰 예정!',
  },
  {
    initials: 'L',
    gradient: 'linear-gradient(135deg,#f472b6,#f43f5e)',
    author: '@LevelDesigner_Lee',
    rating: 4,
    date: '2026.02.28',
    text: '중간 WIP 공유가 특히 좋았어요. 방향 맞는지 확인하며 진행해서 결과물에 만족합니다.',
  },
  {
    initials: 'P',
    gradient: 'linear-gradient(135deg,#34d399,#059669)',
    author: '@PixelFanatic',
    rating: 5,
    date: '2026.01.15',
    text: '완성도가 정말 높아요. 애니메이션 프레임 하나하나가 매끄럽고 게임에 바로 쓸 수 있는 수준입니다.',
  },
]

export default function CommissionDetailPage() {
  useParams() // 추후 API 연동 시 사용

  return (
    <div style={{ background: '#0d1117', color: '#e6edf3' }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">

        {/* 브레드크럼 */}
        <div className="flex items-center gap-1.5 mb-6 text-sm" style={{ color: '#7d8590' }}>
          <Link to="/commission" className="hover:text-white transition-colors">커미션</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link to="/commission" className="hover:text-white transition-colors">작가 찾기</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span style={{ color: '#e6edf3' }}>SpriteKnight</span>
        </div>

        {/* 2단 레이아웃: 좌측 콘텐츠 + 우측 사이드바 */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ===== 좌측 메인 ===== */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* 작가 프로필 카드 */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border"
              style={{ background: '#161b22', borderColor: '#30363d' }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#2f81f7,#6366f1)', color: '#fff' }}>SP</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <Link to="/profile/spriteknight" className="text-lg font-bold hover:text-[#2f81f7] transition-colors">
                    SpriteKnight
                  </Link>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(63,185,80,0.15)', color: '#3fb950', border: '1px solid rgba(63,185,80,0.3)' }}>
                    커미션 오픈
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm flex-wrap" style={{ color: '#7d8590' }}>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1", color: '#f59e0b' }}>star</span>
                    <span className="font-bold" style={{ color: '#e6edf3' }}>4.9</span>
                    <span>(128)</span>
                  </span>
                  <span>·</span>
                  <span>완료 94건</span>
                  <span>·</span>
                  <span>응답률 98%</span>
                </div>
              </div>
              <Link to="/profile/spriteknight"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-colors hover:bg-[#21262d]"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>
                <span className="material-symbols-outlined text-base">person</span>
                프로필 보기
              </Link>
            </div>

            {/* 커미션 제목 & 설명 */}
            <div>
              <h1 className="text-2xl font-bold mb-3">판타지 RPG 캐릭터 픽셀 스프라이트 제작</h1>
              <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>
                16×16 ~ 64×64 해상도의 판타지 캐릭터 스프라이트를 제작해드립니다.
                Walk, Run, Attack, Idle 등 풀 애니메이션 사이클 제작이 특기이며,
                의뢰자의 레퍼런스 이미지와 설명을 바탕으로 원하시는 스타일로 제작합니다.
                Unity 및 Godot 최적화 스프라이트시트 납품 경험이 다수 있습니다.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['캐릭터', '애니메이션', '판타지', 'RPG', 'Unity', 'Godot'].map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: '#1c2128', color: '#7d8590', border: '1px solid #30363d' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 샘플 이미지 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold">샘플 작품</h2>
                <Link to="/profile/spriteknight" className="text-xs hover:underline" style={{ color: '#2f81f7' }}>
                  전체 포트폴리오 →
                </Link>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {SAMPLES.map((s, i) => (
                  <div key={i}
                    className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative border"
                    style={{ borderColor: '#30363d' }}>
                    <div className="w-full h-full checkerboard transition-transform duration-300 group-hover:scale-105"
                      style={{ background: s.bg }} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-xl" />
                  </div>
                ))}
              </div>
            </div>

            {/* 작업 범위 & 조건 */}
            <div className="rounded-2xl border p-5" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <h2 className="font-bold mb-4">작업 범위 및 조건</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCOPE.map(item => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: '#1c2128' }}>
                    <span className="material-symbols-outlined text-lg mt-0.5 flex-shrink-0"
                      style={{ color: '#2f81f7' }}>{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: '#7d8590' }}>{item.label}</div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 진행 프로세스 */}
            <div className="rounded-2xl border p-5" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <h2 className="font-bold mb-5">진행 과정</h2>
              <div className="flex flex-col sm:flex-row gap-0">
                {[
                  { n: '1', label: '의뢰 접수', sub: '레퍼런스·해상도 협의', color: '#2f81f7' },
                  { n: '2', label: '결제 & 스케치', sub: '선결제 후 초안 컨펌', color: '#2f81f7' },
                  { n: '3', label: '제작 & WIP', sub: '50% 시점 중간 공유', color: '#2f81f7' },
                  { n: '4', label: '최종 납품', sub: '전체 파일 전달', color: '#3fb950' },
                ].map((step, i, arr) => (
                  <div key={i} className="flex-1 flex sm:flex-col items-start sm:items-center gap-3 sm:gap-0 relative">
                    {i < arr.length - 1 && (
                      <div className="hidden sm:block absolute top-4 left-1/2 w-full border-t-2 border-dashed z-0"
                        style={{ borderColor: '#30363d' }} />
                    )}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 flex-shrink-0"
                      style={{ background: step.color, color: '#fff' }}>{step.n}</div>
                    <div className="sm:text-center sm:mt-2 pb-4 sm:pb-0">
                      <div className="font-bold text-sm">{step.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#7d8590' }}>{step.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 유의사항 */}
            <div className="rounded-2xl border p-5" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base" style={{ color: '#f0883e' }}>info</span>
                유의사항
              </h2>
              <ul className="space-y-2.5">
                {NOTICES.map((notice, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7d8590' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#30363d' }} />
                    {notice}
                  </li>
                ))}
              </ul>
            </div>

            {/* 리뷰 */}
            <div className="rounded-2xl border p-5" style={{ background: '#161b22', borderColor: '#30363d' }}>
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold">리뷰</h2>
                <div className="flex items-center gap-1.5">
                  <span style={{ color: '#f59e0b' }}>{'★'.repeat(5)}</span>
                  <span className="font-bold">4.9</span>
                  <span className="text-sm" style={{ color: '#7d8590' }}>(128건)</span>
                </div>
              </div>
              <div className="space-y-5">
                {REVIEWS.map((r, i) => (
                  <div key={i} className={`flex gap-3 pb-5 ${i < REVIEWS.length - 1 ? 'border-b' : ''}`}
                    style={{ borderColor: '#30363d' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: r.gradient }}>{r.initials}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <span className="font-bold text-sm">{r.author}</span>
                        <span className="text-sm flex-shrink-0" style={{ color: '#f59e0b' }}>
                          {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>{r.text}</p>
                      <div className="text-xs mt-1.5" style={{ color: '#7d8590' }}>
                        {r.date} · <span style={{ color: '#3fb950' }}>거래 확인됨</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:bg-[#1c2128]"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>
                리뷰 더 보기
              </button>
            </div>

          </div>

          {/* ===== 우측 사이드바 ===== */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="sticky top-20 rounded-2xl border p-5 space-y-5"
              style={{ background: '#161b22', borderColor: '#30363d' }}>

              {/* 가격 */}
              <div>
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#7d8590' }}>가격 (협의 가능)</div>
                <div className="text-3xl font-bold">₩25,000~</div>
                <div className="text-xs mt-1" style={{ color: '#7d8590' }}>작업 범위에 따라 최종 금액 결정</div>
              </div>

              <div className="h-px" style={{ background: '#30363d' }} />

              {/* 수락 상태 */}
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: '#7d8590' }}>수락 상태</span>
                <span className="flex items-center gap-1.5 font-bold" style={{ color: '#3fb950' }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: '#3fb950' }} />
                  오픈
                </span>
              </div>

              {/* 예상 납기 */}
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: '#7d8590' }}>예상 납기</span>
                <span className="font-bold">7~21일</span>
              </div>

              {/* 응답률 */}
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: '#7d8590' }}>평균 응답</span>
                <span className="font-bold">약 2시간</span>
              </div>

              {/* 수정 횟수 */}
              <div className="flex items-center justify-between text-sm">
                <span style={{ color: '#7d8590' }}>수정 횟수</span>
                <span className="font-bold">협의</span>
              </div>

              <div className="h-px" style={{ background: '#30363d' }} />

              {/* 의뢰하기 버튼 */}
              <button className="w-full py-3.5 rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all"
                style={{ background: '#2f81f7', color: '#fff', boxShadow: '0 4px 16px rgba(47,129,247,0.3)' }}>
                의뢰하기
              </button>

              {/* 문의 버튼 */}
              <button className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:bg-[#1c2128]"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>
                <span className="material-symbols-outlined text-base">chat</span>
                작가에게 문의
              </button>

              {/* 안내 문구 */}
              <p className="text-xs text-center leading-relaxed" style={{ color: '#7d8590' }}>
                결제는 의뢰 수락 후 진행됩니다.<br />
                의뢰 전 문의를 통해 작업 범위를 먼저 협의하세요.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 모바일 하단 고정 바 */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t"
        style={{ background: 'rgba(13,17,23,0.97)', borderColor: '#30363d' }}>
        <div className="flex gap-3">
          <button className="flex-1 py-3.5 rounded-xl font-bold text-base hover:opacity-90 active:scale-[0.98] transition-all"
            style={{ background: '#2f81f7', color: '#fff' }}>
            의뢰하기
          </button>
          <button className="px-4 py-3.5 rounded-xl transition-colors hover:bg-[#1c2128]"
            style={{ border: '1px solid #30363d', color: '#7d8590' }}>
            <span className="material-symbols-outlined text-base">chat</span>
          </button>
        </div>
      </div>
    </div>
  )
}
