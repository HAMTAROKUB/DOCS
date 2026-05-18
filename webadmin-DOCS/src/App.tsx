import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { InteractionStatus } from '@azure/msal-browser'
import TopNav from './components/TopNav'
import Sidebar from './components/Sidebar'
import SearchModal from './components/SearchModal'
import CategoryPage from './pages/CategoryPage'
import NamingPage from './pages/NamingPage'
import FormattingPage from './pages/FormattingPage'
import DesignPatternPage from './pages/DesignPatternPage'
import RepoStructurePage from './pages/RepoStructurePage'
import LoginPage from './pages/LoginPage'
import type { GoogleUser } from './auth/googleConfig'
import type { PageId } from './data/navigation'

export function App() {
  const isMsalAuthenticated = useIsAuthenticated()
  const { inProgress } = useMsal()
  const reactNavigate = useNavigate()
  const location = useLocation()

  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(() => {
    const stored = localStorage.getItem('google-user')
    return stored ? (JSON.parse(stored) as GoogleUser) : null
  })

  const isAuthenticated = isMsalAuthenticated || googleUser !== null

  const handleGoogleSuccess = (user: GoogleUser) => {
    localStorage.setItem('google-user', JSON.stringify(user))
    setGoogleUser(user)
  }

  const handleGoogleLogout = () => {
    localStorage.removeItem('google-user')
    setGoogleUser(null)
  }

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  if (inProgress !== InteractionStatus.None) {
    return (
      <div className="auth-loading">
        <div className="auth-loading-spinner" />
        <span>กำลังเข้าสู่ระบบ...</span>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginPage onGoogleSuccess={handleGoogleSuccess} />
  }

  const currentPage = (location.pathname.slice(1) as PageId) || 'repo-structure'

  const navigate = (page: PageId, anchor?: string) => {
    reactNavigate(`/${page}`)
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const closeSidebarOnMobile = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      <TopNav
        onMenuClick={() => setSidebarOpen((o) => !o)}
        onSearchClick={() => setSearchOpen(true)}
        googleUser={googleUser}
        onGoogleLogout={handleGoogleLogout}
      />
      <div className="layout">
        <Sidebar currentPage={currentPage} navigate={navigate} open={sidebarOpen} />
        {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebarOnMobile} />}
        <main
          className={`main-content${sidebarOpen ? '' : ' sidebar-hidden'}`}
          onClick={closeSidebarOnMobile}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/repo-structure" replace />} />
            <Route path="/repo-structure" element={<RepoStructurePage navigate={navigate} />} />
            <Route path="/naming" element={<NamingPage navigate={navigate} />} />
            <Route path="/formatting" element={<FormattingPage navigate={navigate} />} />
            <Route path="/design-pattern" element={<DesignPatternPage navigate={navigate} />} />
            <Route path="/foundation" element={<CategoryPage navigate={navigate} />} />
            <Route path="*" element={<Navigate to="/repo-structure" replace />} />
          </Routes>
        </main>
      </div>
      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          navigate={navigate}
        />
      )}
    </>
  )
}

export default App
