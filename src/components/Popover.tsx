import React, { useEffect, useRef } from 'react';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
}

const Popover: React.FC<PopoverProps> = ({ isOpen, onClose, children, anchorEl }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !anchorEl) return null;

  const rect = anchorEl.getBoundingClientRect();
  
  return (
    <div
      ref={popoverRef}
      className="absolute z-50 mt-2 bg-white rounded-xl shadow-lg"
      style={{
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX - 100, // Center the popover relative to the button
      }}
    >
      {children}
    </div>
  );
};

export default Popover;
