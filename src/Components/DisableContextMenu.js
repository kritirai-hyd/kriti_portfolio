'use client';

import { useEffect } from 'react';

export default function DisableContextMenu() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      // Block right-click keyboard triggers
      if (
        e.key === 'ContextMenu' || 
        (e.shiftKey && e.key === 'F10') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        e.stopPropagation();
        console.warn('Blocked key:', e.key);
      }
    };

    // Optional: block DevTools by right-click -> Inspect
    const handleKeyPress = (e) => {
      // Block Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        e.stopPropagation();
        console.warn('Blocked shortcut:', e.key);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handleKeyPress); // same listener

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null;
}
