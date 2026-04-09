import { useState } from 'react'

const TOOLS = [
  { id: 'pencil', icon: 'edit', label: '펜슬' },
  { id: 'eraser', icon: 'ink_eraser', label: '지우개' },
  { id: 'fill', icon: 'format_color_fill', label: '채우기' },
  { id: 'eyedropper', icon: 'colorize', label: '스포이트' },
  { id: 'select', icon: 'select_all', label: '선택' },
  { id: 'move', icon: 'open_with', label: '이동' },
  { id: 'zoom', icon: 'zoom_in', label: '줌' },
]

const PALETTE = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#8800ff', '#0088ff', '#00ff88', '#ff0088', '#888888', '#444444', '#cccccc']

export default function EditorPage() {
  const [activeTool, setActiveTool] = useState('pencil')
  const [color, setColor] = useState('#2f81f7')
  const [brushSize, setBrushSize] = useState(1)
  const [zoom, setZoom] = useState(8)

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col" style={{ background: 'var(--bg-base)' }}>
      {/* 에디터 헤더 */}
      <div className="flex items-center gap-4 px-4 h-12 border-b shrink-0"
        style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
        <span className="text-sm font-medium">Untitled Project</span>
        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--accent)20', color: 'var(--accent)' }}>미저장</span>
        <div className="flex items-center gap-1 ml-2">
          <button className="p-1 rounded hover:bg-white/5" style={{ color: 'var(--text-secondary)' }}>
            <span className="material-symbols-outlined text-base">undo</span>
          </button>
          <button className="p-1 rounded hover:bg-white/5" style={{ color: 'var(--text-secondary)' }}>
            <span className="material-symbols-outlined text-base">redo</span>
          </button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm px-2" style={{ color: 'var(--text-secondary)' }}>{zoom * 100}%</span>
          <button className="px-3 py-1.5 rounded text-sm"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>내보내기</button>
          <button className="px-3 py-1.5 rounded text-sm font-medium"
            style={{ background: 'var(--primary)', color: '#fff' }}>저장</button>
        </div>
      </div>

      {/* 에디터 본체 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 왼쪽 툴바 */}
        <div className="w-12 flex flex-col items-center py-3 gap-1 border-r shrink-0"
          style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>
          {TOOLS.map(tool => (
            <button key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              title={tool.label}
              className="w-8 h-8 rounded flex items-center justify-center transition-colors"
              style={{
                background: activeTool === tool.id ? 'var(--primary)20' : 'transparent',
                color: activeTool === tool.id ? 'var(--primary)' : 'var(--text-secondary)'
              }}>
              <span className="material-symbols-outlined text-base">{tool.icon}</span>
            </button>
          ))}
        </div>

        {/* 캔버스 영역 */}
        <div className="flex-1 flex items-center justify-center overflow-auto"
          style={{ background: 'repeating-conic-gradient(#1c2128 0% 25%, #161b22 0% 50%) 0 0 / 20px 20px' }}>
          <div className="relative"
            style={{ width: 64 * zoom, height: 64 * zoom, imageRendering: 'pixelated' }}>
            <canvas
              width={64}
              height={64}
              style={{
                width: 64 * zoom,
                height: 64 * zoom,
                imageRendering: 'pixelated',
                cursor: 'crosshair',
                border: '1px solid var(--border)'
              }}
            />
          </div>
        </div>

        {/* 오른쪽 패널 */}
        <div className="w-52 border-l flex flex-col overflow-y-auto"
          style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)' }}>

          {/* 색상 선택 */}
          <div className="p-3 border-b" style={{ borderColor: 'var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>색상</p>
            <div className="w-full h-24 rounded mb-2"
              style={{ background: `linear-gradient(to bottom, white, ${color}), linear-gradient(to right, white, black)`, backgroundBlendMode: 'multiply' }} />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded shrink-0" style={{ background: color, border: '1px solid var(--border)' }} />
              <input type="text" value={color} onChange={e => setColor(e.target.value)}
                className="flex-1 px-2 py-1 rounded text-xs outline-none font-mono"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-primary)' }} />
            </div>
          </div>

          {/* 팔레트 */}
          <div className="p-3 border-b" style={{ borderColor: 'var(--border)' }}>
            <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>팔레트</p>
            <div className="grid grid-cols-8 gap-1">
              {PALETTE.map(c => (
                <button key={c}
                  onClick={() => setColor(c)}
                  className="w-5 h-5 rounded-sm transition-transform hover:scale-110"
                  style={{ background: c, border: color === c ? '2px solid white' : '1px solid var(--border)' }} />
              ))}
            </div>
          </div>

          {/* 브러시 크기 */}
          <div className="p-3 border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="flex justify-between text-xs mb-2">
              <span style={{ color: 'var(--text-secondary)' }}>브러시 크기</span>
              <span style={{ color: 'var(--text-primary)' }}>{brushSize}px</span>
            </div>
            <input type="range" min={1} max={8} value={brushSize} onChange={e => setBrushSize(Number(e.target.value))}
              className="w-full" style={{ accentColor: 'var(--primary)' }} />
          </div>

          {/* 레이어 */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>레이어</p>
              <button style={{ color: 'var(--primary)' }}>
                <span className="material-symbols-outlined text-base">add</span>
              </button>
            </div>
            {['레이어 1'].map(layer => (
              <div key={layer}
                className="flex items-center gap-2 px-2 py-1.5 rounded text-xs"
                style={{ background: 'var(--primary)20', color: 'var(--text-primary)' }}>
                <span className="material-symbols-outlined text-sm">layers</span>
                <span className="flex-1">{layer}</span>
                <span className="material-symbols-outlined text-sm" style={{ color: 'var(--text-secondary)' }}>visibility</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 상태바 */}
      <div className="flex items-center gap-6 px-4 h-7 border-t text-xs shrink-0"
        style={{ background: 'var(--bg-surface)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        <span>64 × 64</span>
        <span>{zoom * 100}%</span>
        <span>레이어 1</span>
        <div className="ml-auto flex items-center gap-3">
          <button onClick={() => setZoom(z => Math.max(1, z - 1))}
            className="material-symbols-outlined text-sm hover:text-white">remove</button>
          <span>{zoom * 100}%</span>
          <button onClick={() => setZoom(z => Math.min(16, z + 1))}
            className="material-symbols-outlined text-sm hover:text-white">add</button>
        </div>
      </div>
    </div>
  )
}
