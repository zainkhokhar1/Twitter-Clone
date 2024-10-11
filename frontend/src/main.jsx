import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import { AuthProvider } from './components/ContextApi.jsx';
import './index.css'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
</style>
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Auth0Provider
      domain="dev-4bvrsfrxw7je15qg.us.auth0.com"
      clientId="E5wlLkADpXUuoEQvpv8yYk1TcajhYItJ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <StrictMode>
        <App />
      </StrictMode>,
    </Auth0Provider >,
  </AuthProvider>
)
