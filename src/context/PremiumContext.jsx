import { createContext, useCallback, useContext, useState } from 'react';
import { getUnlockedProducts, setProductUnlocked as writeProductUnlocked } from '../utils/premiumUnlock';

const PremiumContext = createContext(null);

/**
 * Holds per-product premium-unlock state in React state (initialized from
 * localStorage) so every PremiumLock for a given product reacts together
 * the instant it changes — no reload needed. Wraps the whole app above the
 * router so the state survives page navigation.
 */
export function PremiumProvider({ children }) {
  const [unlockedProducts, setUnlockedProducts] = useState(getUnlockedProducts);

  const unlockProduct = useCallback((productKey) => {
    writeProductUnlocked(productKey, true);
    setUnlockedProducts((prev) => ({ ...prev, [productKey]: true }));
  }, []);

  // Not part of the live unlock flow — only used by the dev-only relock UI
  // (see Guide.jsx) so testing doesn't require clearing localStorage by hand.
  const lockProduct = useCallback((productKey) => {
    writeProductUnlocked(productKey, false);
    setUnlockedProducts((prev) => ({ ...prev, [productKey]: false }));
  }, []);

  return (
    <PremiumContext.Provider value={{ unlockedProducts, unlockProduct, lockProduct }}>
      {children}
    </PremiumContext.Provider>
  );
}

export function usePremium() {
  const ctx = useContext(PremiumContext);
  if (!ctx) throw new Error('usePremium must be used within a PremiumProvider');
  return ctx;
}
