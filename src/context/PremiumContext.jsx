import { createContext, useCallback, useContext, useState } from 'react';
import { isPremiumUnlocked, setPremiumUnlocked as writePremiumUnlocked } from '../utils/premiumUnlock';

const PremiumContext = createContext(null);

/**
 * Holds the user's premium-unlock state in React state (initialized from
 * localStorage) so every PremiumLock on the page reacts together the
 * instant it changes — no reload needed. Wraps the whole app above the
 * router so the state survives page navigation.
 */
export function PremiumProvider({ children }) {
  const [unlocked, setUnlocked] = useState(isPremiumUnlocked);

  const setPremiumUnlocked = useCallback((value) => {
    writePremiumUnlocked(value);
    setUnlocked(value);
  }, []);

  return (
    <PremiumContext.Provider value={{ isPremiumUnlocked: unlocked, setPremiumUnlocked }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const ctx = useContext(PremiumContext);
  if (!ctx) throw new Error('usePremium must be used within a PremiumProvider');
  return ctx;
}
