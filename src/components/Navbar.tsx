import { Link, useLocation } from 'react-router-dom'
import FontSelector from './FontSelector'

const NAV_LINKS = [
  { label: 'Gallery', to: '/gallery/free' },
  { label: 'Store', to: '/assets' },
  { label: 'Editor', to: '/editor' },
  { label: 'Commission', to: '/commission' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 border-b"
      style={{ background: 'rgba(22,27,34,0.95)', backdropFilter: 'blur(20px)', borderColor: '#21262d' }}>
      <div className="flex justify-between items-center h-20 px-8 max-w-[1440px] mx-auto">

        <Link to="/" className="text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          style={{ color: '#2f81f7', fontFamily: 'Galmuri11' }}>
          PixelHub
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map(link => {
            const active = location.pathname.startsWith(link.to) ||
              (link.to === '/gallery/free' && location.pathname === '/')
            return (
              <Link key={link.to} to={link.to}
                className="text-base font-semibold tracking-tight transition-colors"
                style={{
                  color: active ? '#2f81f7' : '#7d8590',
                  borderBottom: active ? '2px solid #2f81f7' : '2px solid transparent',
                  paddingBottom: 3,
                }}>
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center space-x-4">
          <FontSelector />
          <div className="relative hidden lg:block">
            <input
              className="rounded-full py-2.5 pl-11 pr-5 w-72 text-sm outline-none"
              placeholder="Search curated art..."
              style={{ background: '#21262d', color: '#e6edf3' }}
            />
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-xl"
              style={{ color: '#7d8590' }}>search</span>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-2.5 rounded-lg transition-all hover:bg-[#1c2128]"
              style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <Link to="/mypage" className="p-2.5 rounded-lg transition-all hover:bg-[#1c2128]"
              style={{ color: '#7d8590' }}>
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
