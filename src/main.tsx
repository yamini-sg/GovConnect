import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AppDataProvider } from './context/AppDataContext.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
// @ts-expect-error CSS is loaded by the bundler and has no TypeScript declarations.
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <AppDataProvider>
          <App />
        </AppDataProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
