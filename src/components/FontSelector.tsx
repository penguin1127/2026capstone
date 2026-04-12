import { useState, useRef, useEffect } from 'react'
import { useFontStore, PRESET_FONTS, type CustomFont } from '../store/fontStore'

const PREVIEW_TEXT = '픽셀아트 PixelHub'

export default function FontSelector() {
  const { selectedFontId, customFonts, setFont, addCustomFont, removeCustomFont } = useFontStore()
  const [open, setOpen] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [form, setForm] = useState({ name: '', fontFamily: '', url: '' })
  const [formError, setFormError] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
        setShowAddForm(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentLabel = () => {
    const preset = PRESET_FONTS.find(f => f.id === selectedFontId)
    if (preset) return preset.label
    const custom = customFonts.find(f => f.id === selectedFontId)
    return custom?.name ?? '기본'
  }

  const handleAddFont = () => {
    setFormError('')
    if (!form.name.trim()) return setFormError('폰트 이름을 입력해주세요.')
    if (!form.fontFamily.trim()) return setFormError('CSS font-family 값을 입력해주세요.')
    addCustomFont({
      name: form.name.trim(),
      fontFamily: form.fontFamily.trim(),
      url: form.url.trim() || undefined,
    })
    setForm({ name: '', fontFamily: '', url: '' })
    setShowAddForm(false)
  }

  return (
    <div className="relative" ref={ref}>
      {/* 트리거 버튼 */}
      <button
        onClick={() => { setOpen(v => !v); setShowAddForm(false) }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors hover:bg-[#1c2128]"
        style={{ color: '#7d8590' }}
        title="폰트 선택"
      >
        <span className="material-symbols-outlined text-lg">font_download</span>
        <span className="hidden xl:inline">{currentLabel()}</span>
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>

      {/* 드롭다운 패널 */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-72 rounded-2xl shadow-2xl z-50 overflow-hidden"
          style={{ background: '#161b22', border: '1px solid #30363d' }}
        >
          {/* 프리셋 */}
          <div className="p-3">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 px-1"
              style={{ color: '#7d8590' }}>기본 폰트</p>
            {PRESET_FONTS.map(font => (
              <button
                key={font.id}
                onClick={() => setFont(font.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors hover:bg-[#21262d] group"
                style={{ background: selectedFontId === font.id ? '#21262d' : 'transparent' }}
              >
                <div className="text-left">
                  <p className="text-sm font-bold" style={{ fontFamily: font.fontFamily }}>
                    {font.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{
                    color: '#7d8590',
                    fontFamily: font.fontFamily,
                  }}>
                    {PREVIEW_TEXT}
                  </p>
                </div>
                {selectedFontId === font.id && (
                  <span className="material-symbols-outlined text-base" style={{ color: '#2f81f7' }}>
                    check
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* 커스텀 폰트 목록 */}
          {customFonts.length > 0 && (
            <div className="px-3 pb-2 border-t" style={{ borderColor: '#21262d' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2 px-1 pt-3"
                style={{ color: '#7d8590' }}>커스텀 폰트</p>
              {customFonts.map((font: CustomFont) => (
                <div
                  key={font.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl group hover:bg-[#21262d] transition-colors"
                  style={{ background: selectedFontId === font.id ? '#21262d' : 'transparent' }}
                >
                  <button
                    className="flex-1 text-left"
                    onClick={() => setFont(font.id)}
                  >
                    <p className="text-sm font-bold" style={{ fontFamily: font.fontFamily }}>
                      {font.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#7d8590', fontFamily: font.fontFamily }}>
                      {PREVIEW_TEXT}
                    </p>
                  </button>
                  {selectedFontId === font.id && (
                    <span className="material-symbols-outlined text-base shrink-0" style={{ color: '#2f81f7' }}>check</span>
                  )}
                  <button
                    onClick={() => removeCustomFont(font.id)}
                    className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-[#30363d]"
                    style={{ color: '#f85149' }}
                    title="삭제"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* 커스텀 폰트 추가 */}
          <div className="p-3 border-t" style={{ borderColor: '#21262d' }}>
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-colors hover:bg-[#21262d]"
                style={{ color: '#2f81f7' }}
              >
                <span className="material-symbols-outlined text-base">add</span>
                커스텀 폰트 추가
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-xs font-bold" style={{ color: '#e6edf3' }}>커스텀 폰트 추가</p>

                <input
                  placeholder="표시 이름 (예: 나눔고딕)"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg text-xs outline-none"
                  style={{ background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }}
                />
                <input
                  placeholder="font-family (예: 'Nanum Gothic', sans-serif)"
                  value={form.fontFamily}
                  onChange={e => setForm(f => ({ ...f, fontFamily: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg text-xs outline-none"
                  style={{ background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }}
                />
                <input
                  placeholder="Google Fonts URL (선택)"
                  value={form.url}
                  onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                  className="w-full px-3 py-2 rounded-lg text-xs outline-none"
                  style={{ background: '#1c2128', border: '1px solid #30363d', color: '#e6edf3' }}
                />
                <p className="text-xs px-1" style={{ color: '#7d8590' }}>
                  Google Fonts URL 예시:<br />
                  https://fonts.googleapis.com/css2?family=Nanum+Gothic
                </p>

                {formError && (
                  <p className="text-xs" style={{ color: '#f85149' }}>{formError}</p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={handleAddFont}
                    className="flex-1 py-2 rounded-lg text-xs font-bold transition-colors hover:opacity-90"
                    style={{ background: '#2f81f7', color: '#fff' }}
                  >
                    추가
                  </button>
                  <button
                    onClick={() => { setShowAddForm(false); setFormError('') }}
                    className="flex-1 py-2 rounded-lg text-xs font-bold transition-colors hover:bg-[#21262d]"
                    style={{ color: '#7d8590' }}
                  >
                    취소
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
