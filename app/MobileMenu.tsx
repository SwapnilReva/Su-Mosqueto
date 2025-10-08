'use client';

import { useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 will-change-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-blue-50 to-indigo-50/70 border-l border-blue-100 rounded-l-2xl shadow-2xl z-[60] transform-gpu will-change-transform transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-blue-100/70">
            <h2 className="text-lg font-semibold text-gray-900 tracking-wide">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-5 py-3">
            <div className="space-y-0.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg transition-all duration-200 ring-1 ring-transparent hover:ring-blue-200"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-3 pt-3 border-t border-gray-100/80">
              <a
                href="tel:+49123456789"
                className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-blue-50/60 hover:from-blue-50 hover:to-blue-100 text-blue-700 font-medium rounded-lg transition-colors ring-1 ring-blue-100 shadow-sm"
                onClick={onClose}
              >
                <Phone className="w-5 h-5" />
                <span>+49 123 456 789</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
