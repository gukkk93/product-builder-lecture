import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import posthog from 'posthog-js';
import './i18n';
import './styles/global.css';
import App from './App.jsx';

// Analytics only turns on if a real project key is supplied via env — see
// .env.example. Without one, window.posthog stays undefined and every
// track() call in utils/analytics.js is a no-op, so this is safe to leave
// as-is in any environment that hasn't set the key yet.
const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false, // we send page_view manually per reading via trackPageView()
  });
  window.posthog = posthog;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
