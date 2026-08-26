import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { fetchCreditsState, consumeCredit as consumeCreditRequest } from '../utils/credits';

const CreditsContext = createContext(null);

/**
 * Holds the credits balance + unlocked-item state in React state, fetched
 * from the server (Cloudflare D1, via utils/credits.js) on mount so every
 * CreditLock reacts together — same shape as PremiumContext.jsx, but this
 * state is server-sourced (not localStorage) since a Paddle webhook can
 * only ever write to the server, never directly to a specific browser.
 */
export function CreditsProvider({ children }) {
  const [balance, setBalance] = useState(null); // null = not loaded yet
  const [unlockedKeys, setUnlockedKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshCredits = useCallback(async () => {
    try {
      const state = await fetchCreditsState();
      setBalance(state.balance);
      setUnlockedKeys(state.unlockedKeys);
    } catch {
      // Network hiccup or Functions not running (e.g. plain `vite dev`
      // instead of `pages:dev`) — leave prior state as-is rather than
      // wiping a known-good balance to 0.
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshCredits();
  }, [refreshCredits]);

  const consumeCredit = useCallback(async (itemKey) => {
    const result = await consumeCreditRequest(itemKey);
    if (result.unlocked) {
      setBalance(result.balance);
      setUnlockedKeys((prev) => (prev.includes(itemKey) ? prev : [...prev, itemKey]));
    }
    return result;
  }, []);

  return (
    <CreditsContext.Provider value={{ balance, unlockedKeys, loading, refreshCredits, consumeCredit }}>
      {children}
    </CreditsContext.Provider>
  );
}

export function useCredits() {
  const ctx = useContext(CreditsContext);
  if (!ctx) throw new Error('useCredits must be used within a CreditsProvider');
  return ctx;
}
