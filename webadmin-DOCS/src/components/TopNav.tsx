import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { useMsal } from '@azure/msal-react'
import type { GoogleUser } from '../auth/googleConfig'

type TopNavProps = {
  onMenuClick: () => void
  onSearchClick: () => void
  googleUser?: GoogleUser | null
  onGoogleLogout?: () => void
}

const TopNav: FC<TopNavProps> = ({ onMenuClick, onSearchClick, googleUser, onGoogleLogout }) => {
  const { instance, accounts } = useMsal()
  const msalAccount = accounts[0]

  const handleMsalLogout = async () => {
    await instance.clearCache()
    window.location.href = window.location.origin
  }

  // Display either MSAL account or Google user
  const displayName = msalAccount?.name ?? msalAccount?.username ?? googleUser?.name ?? null
  const displayInitial = displayName?.[0]?.toUpperCase() ?? null
  const isGoogleUser = !msalAccount && googleUser !== null

  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => (localStorage.getItem('docs-theme') as 'dark' | 'light') ?? 'dark',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('docs-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <header className="topnav">
      <div className="topnav-left">
        <button className="hamburger" onClick={onMenuClick} aria-label="Toggle sidebar">
          <span />
          <span />
          <span />
        </button>
        <span className="brand-name">WebBackOffice DOCS</span>
      </div>

      <div className="topnav-center">
        <button className="search-bar" onClick={onSearchClick} aria-label="Open search">
          <svg className="search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M8.5 3a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 8.5a6.5 6.5 0 1111.436 4.23l3.857 3.857a.75.75 0 01-1.06 1.06l-3.857-3.856A6.5 6.5 0 012 8.5z"
              fill="currentColor"
            />
          </svg>
          <span className="search-placeholder">ค้นหา</span>
          <kbd className="search-kbd">⌘K</kbd>
        </button>
      </div>

      <div className="topnav-right">
        <button className="topnav-search-icon" onClick={onSearchClick} aria-label="Open search">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M8.5 3a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 8.5a6.5 6.5 0 1111.436 4.23l3.857 3.857a.75.75 0 01-1.06 1.06l-3.857-3.856A6.5 6.5 0 012 8.5z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
        {displayName && (
          <div className="topnav-user">
            <div
              className={`topnav-avatar${isGoogleUser ? ' topnav-avatar-google' : ''}`}
              title={googleUser?.email ?? msalAccount?.username}
            >
              {displayInitial}
            </div>
            <span className="topnav-username">{displayName}</span>
            <button
              className="topnav-logout"
              onClick={isGoogleUser ? onGoogleLogout : handleMsalLogout}
              title="Sign out"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default TopNav
