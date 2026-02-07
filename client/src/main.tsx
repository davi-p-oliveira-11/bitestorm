import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter as Route } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route>
      <Auth0ProviderWithNavigate>
         <AppRoutes />
      </Auth0ProviderWithNavigate>  
    </Route>
  </StrictMode>,
)
