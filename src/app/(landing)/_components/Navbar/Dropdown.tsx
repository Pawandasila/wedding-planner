"use client";
import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  className?: string;
  isActive?: boolean;
  onItemClick?: (title: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, className = "", isActive = false, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative group z-[1001] ${className}`} ref={dropdownRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (onItemClick) onItemClick(title);
        }}
        className={`nav-item-hover text-secondary-heading text-center uppercase transition-colors duration-200 flex items-center py-5 px-7 text-xs font-medium ${
          isOpen || isActive ? 'nav-item-active' : ''
        }`}
        style={{ letterSpacing: "2px", lineHeight: "140%" }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-1 w-48 bg-secondary-white shadow-xl border border-secondary-border rounded-md overflow-hidden transition-all duration-200 z-[9999] ${
          isOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
        }`}
        style={{ zIndex: 9999 }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-4 py-3 text-sm text-secondary-paragraphs hover:bg-secondary-background hover:text-secondary-heading transition-colors duration-200 uppercase font-medium"
            style={{ letterSpacing: "1px" }}
            onClick={() => {
              setIsOpen(false);
              if (onItemClick) onItemClick(title);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;