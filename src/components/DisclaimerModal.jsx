import React, { useState, useEffect } from 'react';

const DisclaimerModal = ({ onAccept }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      setIsOpen(true);
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
    
    // Panggil callback untuk memicu re-render/animasi di App.jsx
    if (onAccept) {
      onAccept();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.tagGroup}>
          <span style={styles.accentLine}></span>
          <span style={styles.subtitle}>DISCLAIMER & PORTFOLIO NOTICE</span>
        </div>

        <h1 style={styles.title}>PROJECT NOTICE</h1>

        <h3 style={styles.highlightText}>
          Personal Concept & Demonstration Project
        </h3>

        <p style={styles.description}>
          Disclaimer: This website is a personal portfolio project created solely for design and web development demonstration purposes. It is not affiliated with, endorsed by, or associated with <strong>Lockheed Martin</strong> or the <strong>United States Air Force (USAF)</strong> in any way. All logos, trademarks, and imagery are the property of their respective owners.
        </p>

        <button style={styles.button} onClick={handleAccept}>
          I UNDERSTAND & ACCEPT
        </button>

        <div style={styles.footerDecor}>
          <span style={styles.decorLineLong}></span>
          <span style={styles.decorLineShort}></span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(5, 8, 13)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '20px',
  },
  modal: {
    backgroundColor: '#0c1017',
    border: '1px solid #1c2633',
    borderRadius: '8px',
    padding: '36px 32px',
    maxWidth: '520px',
    width: '100%',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(40, 180, 165, 0.1)',
    textAlign: 'left',
    color: '#e2e8f0',
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
    position: 'relative',
  },
  tagGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  },
  accentLine: {
    width: '16px',
    height: '2px',
    backgroundColor: '#28b4a5',
  },
  subtitle: {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#28b4a5',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: '38px',
    fontWeight: '900',
    letterSpacing: '1px',
    color: '#eff572',
    margin: '0 0 12px 0',
    lineHeight: '1',
    textTransform: 'UPPERCASE',
  },
  highlightText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#28b4a5',
    margin: '0 0 18px 0',
    letterSpacing: '0.5px',
  },
  description: {
    fontSize: '13px',
    lineHeight: '1.65',
    color: '#94a3b8',
    marginBottom: '28px',
  },
  button: {
    width: '100%',
    backgroundColor: '#eff572',
    color: '#0c1017',
    border: 'none',
    padding: '14px 24px',
    fontSize: '13px',
    fontWeight: '800',
    letterSpacing: '1.5px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
  },
  footerDecor: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '20px',
  },
  decorLineLong: {
    width: '32px',
    height: '2px',
    backgroundColor: '#28b4a5',
  },
  decorLineShort: {
    width: '10px',
    height: '2px',
    backgroundColor: '#28b4a5',
  },
};

export default DisclaimerModal;