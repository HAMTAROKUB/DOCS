import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { msalConfig } from './auth/msalConfig'
import { GOOGLE_CLIENT_ID } from './auth/googleConfig'
import './index.css'
import App from './App.tsx'

const msalInstance = new PublicClientApplication(msalConfig)

async function bootstrap() {
  await msalInstance.initialize()

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <MsalProvider instance={msalInstance}>
            <App />
          </MsalProvider>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </StrictMode>,
  )
}

bootstrap()
