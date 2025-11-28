import { useEffect } from 'react';
import { useFormStore } from '@/stores/useFormStore';

// Session storage utilities
const setSessionStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, value);
  }
};

const getSessionStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
};

const removeSessionStorage = (keys: string[]) => {
  if (typeof window !== 'undefined') {
    keys.forEach(key => sessionStorage.removeItem(key));
  }
};

// Generate stable session ID
const generateStableSessionId = (): string => {
  if (typeof window !== 'undefined') {
    let stableSessionId = localStorage.getItem('stable_session_id');
    if (!stableSessionId) {
      stableSessionId = 'sid_' + Math.random().toString(36).substr(2, 9) + Date.now();
      localStorage.setItem('stable_session_id', stableSessionId);
    }
    return stableSessionId;
  }
  return '';
};

export const useTrackingParams = () => {
  const { setTrackingParams } = useFormStore();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gclid = urlParams.get('gclid') || '';
    const fbclid = urlParams.get('fbclid') || '';
    const igclid = urlParams.get('igclid') || '';
    const ttclid = urlParams.get('ttclid') || '';

    // Set tracking parameters in session storage
    if (gclid) {
      setSessionStorage('gclid', gclid);
      removeSessionStorage(['fbclid', 'igclid', 'ttclid']);
    }
    if (fbclid) {
      setSessionStorage('fbclid', fbclid);
      removeSessionStorage(['gclid', 'igclid', 'ttclid']);
    }
    if (igclid) {
      setSessionStorage('igclid', igclid);
      removeSessionStorage(['gclid', 'fbclid', 'ttclid']);
    }
    if (ttclid) {
      setSessionStorage('ttclid', ttclid);
      removeSessionStorage(['gclid', 'fbclid', 'igclid']);
    }

    // Get values from session storage and set to form store
    const sessionGclid = getSessionStorage('gclid') || '';
    const sessionFbclid = getSessionStorage('fbclid') || '';
    const sessionIgclid = getSessionStorage('igclid') || '';
    const sessionTtclid = getSessionStorage('ttclid') || '';

    // Generate stable session ID
    const stableSessionId = generateStableSessionId();

    // Set tracking parameters in form store
    setTrackingParams({
      gclid: sessionGclid,
      fbclid: sessionFbclid,
      igclid: sessionIgclid,
      ttclid: sessionTtclid,
      stable_session_id: stableSessionId,
    });

    // Load FingerprintJS
    const loadFingerprintJS = async () => {
      try {
        const script = document.createElement('script');
        script.src = '/assets/js/fp.min.js';
        script.async = true;

        script.onload = async () => {
          if (window.FingerprintJS) {
            try {
              const fpPromise = window.FingerprintJS.load();
              const fp = await fpPromise;
              const result = await fp.get();
              const visitorId = result.visitorId;
              const components = result.components || {};

              const fingerprintData = {
                fingerprint: visitorId,
                device: components.platform?.value || 'Unknown',
                timezone: components.timezone?.value || 'Unknown',
              };

              const fingerprintJson = JSON.stringify(fingerprintData);

              setTrackingParams({
                fingerprint: visitorId,
                fingerprintdata: fingerprintJson,
              });

              // console.log('Visitor ID:', visitorId);
            } catch (error) {
              console.error('Error generating fingerprint:', error);
            }
          }
        };

        script.onerror = () => {
          console.error('Error loading FingerprintJS script');
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error setting up fingerprint:', error);
      }
    };

    loadFingerprintJS();
  }, [setTrackingParams]);
};

// Add FingerprintJS types to window
declare global {
  interface Window {
    FingerprintJS: any;
  }
}
