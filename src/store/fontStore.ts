import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CustomFont {
  id: string
  name: string        // 표시 이름 (예: "나눔고딕")
  fontFamily: string  // CSS font-family 값 (예: "'Nanum Gothic', sans-serif")
  url?: string        // Google Fonts URL (선택)
}

export interface PresetFont {
  id: string
  name: string
  label: string       // 한글 설명
  fontFamily: string
}

export const PRESET_FONTS: PresetFont[] = [
  {
    id: 'pretendard',
    name: 'Pretendard',
    label: '기본 (Pretendard)',
    fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
  },
  {
    id: 'galmuri11',
    name: 'Galmuri11',
    label: '갈무리체',
    fontFamily: "'Galmuri11', sans-serif",
  },
  {
    id: 'maplestory',
    name: 'MaplestoryOTFBold',
    label: '메이플스토리',
    fontFamily: "'MaplestoryOTFBold', sans-serif",
  },
]

interface FontState {
  selectedFontId: string
  customFonts: CustomFont[]
  setFont: (fontId: string) => void
  addCustomFont: (font: Omit<CustomFont, 'id'>) => void
  removeCustomFont: (id: string) => void
}

export const useFontStore = create<FontState>()(
  persist(
    (set, get) => ({
      selectedFontId: 'pretendard',
      customFonts: [],

      setFont: (fontId) => {
        set({ selectedFontId: fontId })
        applyFont(fontId, get().customFonts)
      },

      addCustomFont: (font) => {
        const id = `custom_${Date.now()}`
        const newFont: CustomFont = { ...font, id }
        const updated = [...get().customFonts, newFont]
        set({ customFonts: updated })
        // URL이 있으면 동적으로 <link> 주입
        if (font.url) injectFontLink(id, font.url)
      },

      removeCustomFont: (id) => {
        const updated = get().customFonts.filter(f => f.id !== id)
        set((state) => ({
          customFonts: updated,
          // 삭제된 폰트가 선택 중이었으면 기본으로 복구
          selectedFontId: state.selectedFontId === id ? 'pretendard' : state.selectedFontId,
        }))
        // 주입된 <link> 태그 제거
        document.getElementById(`font-link-${id}`)?.remove()
      },
    }),
    { name: 'font-storage' }
  )
)

/** body에 CSS 변수 적용 */
export function applyFont(fontId: string, customFonts: CustomFont[]) {
  const preset = PRESET_FONTS.find(f => f.id === fontId)
  const custom = customFonts.find(f => f.id === fontId)
  const fontFamily = preset?.fontFamily ?? custom?.fontFamily ?? "'Pretendard Variable', sans-serif"
  document.documentElement.style.setProperty('--site-font', fontFamily)
}

/** Google Fonts 등 외부 URL을 <link>로 동적 주입 */
function injectFontLink(id: string, url: string) {
  if (document.getElementById(`font-link-${id}`)) return
  const link = document.createElement('link')
  link.id = `font-link-${id}`
  link.rel = 'stylesheet'
  link.href = url
  document.head.appendChild(link)
}

/** 앱 초기화 시 저장된 폰트 + 커스텀 URL 복원 */
export function restoreFonts() {
  const raw = localStorage.getItem('font-storage')
  if (!raw) return
  try {
    const { state } = JSON.parse(raw)
    const { selectedFontId, customFonts } = state as FontState
    // 커스텀 폰트 URL 재주입
    customFonts?.forEach((f: CustomFont) => {
      if (f.url) injectFontLink(f.id, f.url)
    })
    applyFont(selectedFontId, customFonts ?? [])
  } catch {
    // 파싱 실패 시 무시
  }
}
