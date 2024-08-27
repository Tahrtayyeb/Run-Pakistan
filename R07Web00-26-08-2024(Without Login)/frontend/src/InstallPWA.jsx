import React, { useState, useEffect } from 'react';

function InstallPWA() {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setInstallPrompt(null);
      });
    }
  };

  if (!installPrompt) return null;

  return (
    <button 
      onClick={handleInstallClick}
      style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        zIndex: 1000
      }}
    >
      Install App
    </button>
  );
}

export default InstallPWA;