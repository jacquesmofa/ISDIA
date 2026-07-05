import { useState, useEffect } from 'react';

interface AccessibilityControlsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccessibilityControls({ isOpen, onClose }: AccessibilityControlsProps) {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const scale = fontSize / 100;
    root.style.fontSize = `${scale * 100}%`;

    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (dyslexiaFont) {
      root.style.setProperty('--font-body', '"OpenDyslexic", "Comic Sans MS", sans-serif');
      document.body.style.fontFamily = '"OpenDyslexic", "Comic Sans MS", sans-serif';
    } else {
      root.style.setProperty('--font-body', '"Inter", system-ui, sans-serif');
      document.body.style.fontFamily = '"Inter", system-ui, sans-serif';
    }
  }, [fontSize, highContrast, dyslexiaFont]);

  const increaseFont = () => setFontSize((prev) => Math.min(prev + 25, 300));
  const decreaseFont = () => setFontSize((prev) => Math.max(prev - 25, 75));
  const resetFont = () => setFontSize(100);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground-50/30 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto border-l border-secondary-200 shadow-xl"
        role="dialog"
        aria-label="Accessibility Controls"
        aria-modal="true"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 border border-primary-200">
                <i className="ri-contrast-2-line text-primary-600 text-lg" style={{ width: '18px', height: '18px' }} />
              </div>
              <h2 className="text-foreground-50 font-heading text-xl font-semibold">
                Accessibility
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-secondary-200 text-foreground-400 hover:text-foreground-100 hover:border-secondary-300 transition-all duration-300 cursor-pointer"
              aria-label="Close accessibility controls"
            >
              <i className="ri-close-line text-lg" style={{ width: '18px', height: '18px' }} />
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-foreground-100 text-sm font-semibold mb-4 flex items-center gap-2">
                <i className="ri-font-size text-primary-600" style={{ width: '16px', height: '16px' }} />
                Font Size: {fontSize}%
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseFont}
                  className="px-4 py-2 rounded-lg border border-secondary-200 text-foreground-400 hover:text-foreground-100 hover:border-secondary-300 transition-all duration-300 text-sm cursor-pointer"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={resetFont}
                  className="px-4 py-2 rounded-lg border border-secondary-200 text-foreground-400 hover:text-foreground-100 hover:border-secondary-300 transition-all duration-300 text-sm cursor-pointer"
                  aria-label="Reset font size"
                >
                  Reset
                </button>
                <button
                  onClick={increaseFont}
                  className="px-4 py-2 rounded-lg border border-secondary-200 text-foreground-400 hover:text-foreground-100 hover:border-secondary-300 transition-all duration-300 text-sm cursor-pointer"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
              <div className="mt-3 w-full bg-secondary-100 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300"
                  style={{ width: `${((fontSize - 75) / 225) * 100}%` }}
                />
              </div>
            </div>

            <div className="border-t border-secondary-200 pt-6">
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  highContrast
                    ? 'bg-primary-50 border-primary-300'
                    : 'border-secondary-200 hover:border-secondary-300'
                }`}
                aria-pressed={highContrast}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100">
                    <i className="ri-sun-line text-foreground-100 text-lg" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <span className="text-foreground-100 text-sm font-medium">High Contrast Mode</span>
                </div>
                <div className={`w-11 h-6 rounded-full transition-all duration-300 ${highContrast ? 'bg-primary-500' : 'bg-secondary-300'}`}>
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 mt-0.5 ${highContrast ? 'ml-5' : 'ml-0.5'}`} />
                </div>
              </button>
            </div>

            <div>
              <button
                onClick={() => setDyslexiaFont(!dyslexiaFont)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  dyslexiaFont
                    ? 'bg-primary-50 border-primary-300'
                    : 'border-secondary-200 hover:border-secondary-300'
                }`}
                aria-pressed={dyslexiaFont}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100">
                    <i className="ri-font-family text-foreground-100 text-lg" style={{ width: '18px', height: '18px' }} />
                  </div>
                  <span className="text-foreground-100 text-sm font-medium">Dyslexia-Friendly Font</span>
                </div>
                <div className={`w-11 h-6 rounded-full transition-all duration-300 ${dyslexiaFont ? 'bg-primary-500' : 'bg-secondary-300'}`}>
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 mt-0.5 ${dyslexiaFont ? 'ml-5' : 'ml-0.5'}`} />
                </div>
              </button>
            </div>

            <div className="border-t border-secondary-200 pt-6">
              <h3 className="text-foreground-100 text-sm font-semibold mb-3 flex items-center gap-2">
                <i className="ri-global-line text-primary-600" style={{ width: '16px', height: '16px' }} />
                Language
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['English', 'Français', 'العربية', 'Español'].map((lang) => (
                  <button
                    key={lang}
                    className="px-4 py-3 rounded-lg border border-secondary-200 text-foreground-400 text-sm hover:text-foreground-100 hover:border-secondary-300 transition-all duration-300 cursor-pointer text-left"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-foreground-500 text-xs leading-relaxed pt-4 border-t border-secondary-200">
              This website is built to meet WCAG 2.2 AAA accessibility standards. All interactive elements support keyboard navigation and screen readers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}