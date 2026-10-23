import React from 'react';
import { useStore } from '../context/StoreContext';

const ICONS = {
  success: '✓',
  error:   '✕',
  warning: '⚠',
  info:    'ℹ',
};
const BG = {
  success: '#22C55E',
  error:   '#EF4444',
  warning: '#F59E0B',
  info:    '#8B5CF6',
};

export default function Toast() {
  const { toasts, dispatch } = useStore();
  if (!toasts.length) return null;

  return (
    <div className="toast-container" role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast--${t.type}`}>
          <span
            className="toast__icon"
            style={{ background: BG[t.type] || BG.info }}
          >
            {t.icon || ICONS[t.type] || ICONS.info}
          </span>
          <span className="toast__msg">{t.message}</span>
          <button
            className="toast__close"
            onClick={() => dispatch({ type: 'TOAST_REMOVE', payload: t.id })}
            aria-label="Dismiss notification"
          >×</button>
        </div>
      ))}
      <style>{`
        .toast-container {
          position: fixed; bottom: 24px; right: 24px; z-index: 9999;
          display: flex; flex-direction: column; gap: 10px;
          pointer-events: none; max-width: 360px; width: calc(100vw - 48px);
        }
        .toast {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px 14px 14px;
          background: #1C1917; color: white;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,.25), 0 2px 8px rgba(0,0,0,.15);
          font-size: 0.875rem; font-weight: 500; line-height: 1.4;
          pointer-events: all;
          animation: toast-slide-in 320ms cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes toast-slide-in {
          from { opacity:0; transform: translateX(60px) scale(0.9); }
          to   { opacity:1; transform: translateX(0)   scale(1); }
        }
        .toast__icon {
          width: 26px; height: 26px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.78rem; font-weight: 800; flex-shrink: 0;
        }
        .toast__msg { flex: 1; }
        .toast__close {
          background: none; border: none; color: rgba(255,255,255,.45);
          cursor: pointer; font-size: 1.2rem; line-height: 1;
          padding: 0 2px; flex-shrink: 0;
          transition: color 150ms ease;
        }
        .toast__close:hover { color: white; }
        @media (max-width: 480px) {
          .toast-container { bottom: 16px; right: 16px; left: 16px; max-width: none; width: auto; }
        }
      `}</style>
    </div>
  );
}
