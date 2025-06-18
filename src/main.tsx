import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GameProvider } from '@/context/GameContext';
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx';
import App from './App.tsx';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/index.css';
import '@/styles/variables.css';
import '@/styles/animation.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <GameProvider>
        <App />
      </GameProvider>
    </ErrorBoundary>
  </StrictMode>,
);
