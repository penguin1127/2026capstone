import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import MainPage from './pages/MainPage'
import FreeGalleryPage from './pages/FreeGalleryPage'
import ExGalleryPage from './pages/ExGalleryPage'
import GalleryDetailPage from './pages/GalleryDetailPage'
import AssetStorePage from './pages/AssetStorePage'
import AssetDetailPage from './pages/AssetDetailPage'
import EditorPage from './pages/EditorPage'
import CommissionPage from './pages/CommissionPage'
import CommissionDetailPage from './pages/CommissionDetailPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <Routes>
      {/* 네이버/로그인은 레이아웃 없이 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* 에디터는 풀스크린 */}
      <Route element={<MainLayout />}>
        <Route path="/editor" element={<EditorPage />} />
      </Route>

      {/* 일반 페이지 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery/free" element={<FreeGalleryPage />} />
        <Route path="/gallery/exclusive" element={<ExGalleryPage />} />
        <Route path="/gallery/:id" element={<GalleryDetailPage />} />
        <Route path="/assets" element={<AssetStorePage />} />
        <Route path="/assets/:id" element={<AssetDetailPage />} />
        <Route path="/commission" element={<CommissionPage />} />
        <Route path="/commission/:id" element={<CommissionDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}
