import { useState } from 'react'
import { Link } from 'react-router-dom'

const PALETTE = ['#0d1117','#2f81f7','#f0883e','#3fb950','#f85149','#d2a8ff','#ffa657','#79c0ff','#56d364','#ff7b72','#e3b341','#bc8cff','#f47067','#b1bac4','#161b22','#21262d']

const COMMENTS = [
  { id: 1, author: 'sprite_master', content: '정말 분위기 있는 작품이네요! 비 내리는 느낌이 너무 잘 살아있어요.', likes: 24, time: '2시간 전', isArtist: false, gradient: 'linear-gradient(135deg, #2f81f7, #1a3a6b)' },
  { id: 2, author: 'pixel_witch', content: '감사합니다! 빛 반사 효과에 공을 많이 들였어요 😊', likes: 12, time: '1시간 전', isArtist: true, gradient: 'linear-gradient(135deg, #8b2de0, #4a1060)' },
  { id: 3, author: 'neon_art', content: '팔레트 선택이 훌륭하네요. 어떤 도구로 작업하셨나요?', likes: 8, time: '45분 전', isArtist: false, gradient: 'linear-gradient(135deg, #f0883e, #6b3a00)' },
]

export default function GalleryDetailPage() {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(12400)
  const [zoom, setZoom] = useState(4)

  const handleLike = () => {
    setLiked(v => !v)
    setLikeCount(v => liked ? v - 1 : v + 1)
  }

  return (
    <div style={{ background: '#0d1117', color: '#e6edf3' }}>
      {/* 뷰어 */}
      <div className="flex items-center justify-center py-12 relative"
        style={{ background: 'repeating-conic-gradient(#1c2128 0% 25%, #21262d 0% 50%) 0 0 / 16px 16px', minHeight: 480 }}>
        <div className="relative">
          <div className="shadow-[0_0_80px_rgba(47,129,247,0.3)]"
            style={{ width: 64 * zoom, height: 64 * zoom, background: 'linear-gradient(135deg, #0a1628, #1a3a5c, #2f81f7)' }} />
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs text-white"
            style={{ background: 'rgba(0,0,0,0.6)' }}>{zoom * 100}%</span>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 rounded-xl"
            style={{ background: 'rgba(0,0,0,0.6)' }}>
            <button onClick={() => setZoom(z => Math.max(1, z - 1))} className="text-white">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="text-white text-xs px-2">{zoom * 100}%</span>
            <button onClick={() => setZoom(z => Math.min(8, z + 1))} className="text-white">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        </div>
      </div>

      {/* 액션 바 */}
      <div className="border-y h-14 flex items-center px-8"
        style={{ background: '#161b22', borderColor: '#30363d' }}>
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={handleLike}
              className="flex items-center gap-2 px-4 py-2 rounded-xl transition-colors hover:bg-[#1c2128]"
              style={{ color: liked ? '#e11d48' : '#7d8590' }}>
              <span className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: liked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
              <span className="text-sm font-medium">{(likeCount / 1000).toFixed(1)}k</span>
            </button>
            <span className="flex items-center gap-2 text-sm" style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined text-base">visibility</span>8.4k
            </span>
            <span className="flex items-center gap-2 text-sm" style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined text-base">chat_bubble</span>38
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setBookmarked(v => !v)}
              className="p-2 rounded-xl transition-colors hover:bg-[#1c2128]"
              style={{ color: bookmarked ? '#2f81f7' : '#7d8590' }}>
              <span className="material-symbols-outlined"
                style={{ fontVariationSettings: bookmarked ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
            </button>
            <button className="p-2 rounded-xl hover:bg-[#1c2128] transition-colors" style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="p-2 rounded-xl hover:bg-[#1c2128] transition-colors" style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined">flag</span>
            </button>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="max-w-[1440px] mx-auto px-8 py-10 flex gap-10">
        {/* 왼쪽 */}
        <div className="flex-1 min-w-0 space-y-10">
          {/* 작품 정보 */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Neon Rain</h1>
            <Link to="/profile/pixel_witch" className="text-sm font-medium hover:underline" style={{ color: '#2f81f7' }}>
              @pixel_witch
            </Link>
            <p className="mt-3 text-base leading-relaxed" style={{ color: '#7d8590' }}>
              비 오는 밤의 네온 도시. 반사되는 빛과 빗줄기를 64×64 해상도에 담아냈습니다.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['#풍경', '#사이버펑크', '#야경', '#비', '#네온'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm"
                  style={{ background: '#21262d', color: '#7d8590', border: '1px solid #30363d' }}>{tag}</span>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              {[['해상도', '64 × 64'], ['색상 수', '16색'], ['형식', 'EXCLUSIVE']].map(([k, v]) => (
                <div key={k} className="rounded-xl p-3" style={{ background: '#161b22', border: '1px solid #30363d' }}>
                  <p style={{ color: '#7d8590' }}>{k}</p>
                  <p className="font-bold mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 팔레트 */}
          <div>
            <h3 className="font-bold mb-3">사용 팔레트</h3>
            <div className="grid grid-cols-3 gap-1.5">
              {PALETTE.map(color => (
                <div key={color} className="w-6 h-6 rounded cursor-pointer hover:scale-110 transition-transform"
                  style={{ background: color, border: '1px solid #30363d' }} title={color} />
              ))}
            </div>
          </div>

          {/* 댓글 */}
          <div>
            <h3 className="font-bold mb-6">댓글 38</h3>
            <div className="flex gap-3 mb-8">
              <div className="w-9 h-9 rounded-full shrink-0"
                style={{ background: 'linear-gradient(135deg, #2f81f7, #1a3a6b)' }} />
              <div className="flex-1">
                <textarea rows={3} placeholder="댓글을 입력하세요..."
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none"
                  style={{ background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }} />
                <div className="flex justify-end mt-2">
                  <button className="px-4 py-2 rounded-xl text-sm font-bold"
                    style={{ background: '#2f81f7', color: '#fff' }}>등록</button>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {COMMENTS.map(c => (
                <div key={c.id} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full shrink-0" style={{ background: c.gradient }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">@{c.author}</span>
                      {c.isArtist && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                          style={{ background: 'rgba(47,129,247,0.1)', color: '#2f81f7' }}>작가</span>
                      )}
                      <span className="text-xs" style={{ color: '#7d8590' }}>{c.time}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>{c.content}</p>
                    <button className="flex items-center gap-1 mt-2 text-xs transition-colors hover:text-white"
                      style={{ color: '#7d8590' }}>
                      <span className="material-symbols-outlined text-sm">favorite_border</span>{c.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽 사이드바 */}
        <div className="w-72 shrink-0 space-y-5">
          {/* 작가 카드 */}
          <div className="rounded-2xl border p-5" style={{ background: '#21262d', borderColor: '#30363d' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full" style={{ background: 'linear-gradient(135deg, #8b2de0, #4a1060)' }} />
              <div>
                <p className="font-bold">pixel_witch</p>
                <p className="text-xs" style={{ color: '#7d8590' }}>팔로워 2,840</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-xl font-bold text-sm"
                style={{ background: '#2f81f7', color: '#fff' }}>팔로우</button>
              <button className="px-3 py-2 rounded-xl text-sm"
                style={{ border: '1px solid #30363d', color: '#7d8590' }}>메시지</button>
            </div>
          </div>

          {/* 다른 작품 */}
          <div className="rounded-2xl border p-5" style={{ background: '#21262d', borderColor: '#30363d' }}>
            <p className="font-bold mb-3">다른 작품</p>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                'linear-gradient(135deg,#0d2818,#1a5c2a)',
                'linear-gradient(135deg,#1a0a2e,#4a1060)',
                'linear-gradient(135deg,#2c0a00,#6b1a00)',
                'linear-gradient(135deg,#0a0a1a,#1a1a3a)',
                'linear-gradient(135deg,#1a3a0a,#3a7020)',
                'linear-gradient(135deg,#0a1628,#1a3a5c)',
              ].map((bg, i) => (
                <div key={i} className="aspect-square rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ background: bg }} />
              ))}
            </div>
          </div>

          {/* 유사 작품 */}
          <div className="rounded-2xl border p-5" style={{ background: '#21262d', borderColor: '#30363d' }}>
            <p className="font-bold mb-3">유사 작품</p>
            <div className="space-y-3">
              {[
                { title: 'Cyber City', author: 'neon_art', bg: 'linear-gradient(135deg,#0a1628,#2f81f7)' },
                { title: 'Night Alley', author: 'wave_pixel', bg: 'linear-gradient(135deg,#1a0a2e,#8b2de0)' },
                { title: 'Pixel Rain', author: 'sky_art', bg: 'linear-gradient(135deg,#0a0a0a,#f0883e)' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 items-center cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg shrink-0" style={{ background: item.bg }} />
                  <div>
                    <p className="text-sm font-medium group-hover:text-[#2f81f7] transition-colors">{item.title}</p>
                    <p className="text-xs" style={{ color: '#7d8590' }}>@{item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
