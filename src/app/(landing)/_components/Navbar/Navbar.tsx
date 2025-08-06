"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('HOME');
  const [mobileVenuesOpen, setMobileVenuesOpen] = useState(false);
  const pathname = usePathname();

  // Update active nav item based on current pathname
  useEffect(() => {
    if (pathname === '/') {
      setActiveNavItem('HOME');
    } else if (pathname.startsWith('/events')) {
      setActiveNavItem('VENUES');
    } else if (pathname.startsWith('/services')) {
      setActiveNavItem('SERVICES');
    } else if (pathname === '/gallery') {
      setActiveNavItem('GALLERY');
    } else if (pathname === '/contact') {
      setActiveNavItem('CONTACT');
    } else if (pathname === '/about') {
      setActiveNavItem('ABOUT US');
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdown states when mobile menu is closed
    if (isMobileMenuOpen) {
      setMobileVenuesOpen(false);
    }
  };

  const toggleMobileVenues = () => {
    setMobileVenuesOpen(!mobileVenuesOpen);
  };

  
  return (
    <>
      <nav
        className="font-sans bg-secondary-background relative p-4 flex items-center justify-center z-[1000]"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="lg:max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:grid grid-cols-3 gap-2 items-center h-16">
            <div className="flex items-center justify-end animate-on-load animate-slide-left delay-100">
              <Link
                href="/"
                className={`nav-item-hover text-secondary-heading text-center uppercase transition-colors duration-200 py-5 px-7 text-xs font-medium ${
                  activeNavItem === 'HOME' ? 'nav-item-active' : ''
                }`}
                style={{ letterSpacing: "2px", lineHeight: "140%" }}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`nav-item-hover text-secondary-heading text-center text-nowrap uppercase transition-colors duration-200 py-5 px-7 text-xs font-medium ${
                  activeNavItem === 'ABOUT US' ? 'nav-item-active' : ''
                }`}
                style={{ letterSpacing: "2px", lineHeight: "140%" }}
              >
                ABOUT US
              </Link>
              <Dropdown
                title="VENUES"
                isActive={activeNavItem === 'VENUES'}
                onItemClick={() => {}} // Remove manual setting since useEffect handles it
                items={[
                  { label: "Wedding Venues", href: "/events/weddings" },
                  { label: "Reception Halls", href: "/events/receptions" },
                  { label: "Engagement Venues", href: "/events/engagement" },
                  { label: "Function Halls", href: "/events/mehendi" },
                  { label: "Corporate Spaces", href: "/events/corporate" },
                  { label: "Destination Venues", href: "/events/destination" }
                ]}
              />
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center items-center animate-on-load animate-scale-in delay-300">
              <Link
                href="/"
                className="flex flex-col justify-center items-center p-2 relative"
              >
                <div
                  className="text-secondary-heading font-bold"
                  style={{
                    fontSize: "24px",
                    letterSpacing: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={"/Logo.svg"}
                    alt="Logo"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-start animate-on-load animate-slide-right delay-200">
              <Link
                href="/gallery"
                className={`nav-item-hover text-secondary-heading text-center uppercase transition-colors duration-200 py-5 px-7 text-xs font-medium ${
                  activeNavItem === 'GALLERY' ? 'nav-item-active' : ''
                }`}
                style={{ letterSpacing: "2px", lineHeight: "140%" }}
              >
                GALLERY
              </Link>
              {/* <Dropdown
                title="SERVICES"
                isActive={activeNavItem === 'SERVICES'} 
                items={[
                  { label: "View All Services", href: "/services" },
                  { label: "Traditional Weddings", href: "/services/weddings" },
                  { label: "Event Design", href: "/services/event-design" },
                  { label: "Venue Coordination", href: "/services/venue-coordination" },
                  { label: "Wedding Planning", href: "/services/wedding-planning" },
                  { label: "Cultural Ceremonies", href: "/cultural" }
                ]}
              /> */}
              <Link
                href="/services"
                className={`nav-item-hover text-secondary-heading text-center uppercase transition-colors duration-200 py-5 px-7 text-xs font-medium ${
                  activeNavItem === 'SERVICES' ? 'nav-item-active' : ''
                }`}
                style={{ letterSpacing: "2px", lineHeight: "140%" }}
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className={`nav-item-hover text-secondary-heading text-center uppercase transition-colors duration-200 py-5 px-7 text-xs font-medium ${
                  activeNavItem === 'CONTACT' ? 'nav-item-active' : ''
                }`}
                style={{ letterSpacing: "2px", lineHeight: "140%" }}
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between h-16">
            {/* Mobile Cart Button - Far Left */}
            <button
              className="nav-item-hover text-secondary-heading cursor-pointer transition-colors duration-200 p-3 text-xs flex items-center justify-center font-medium uppercase rounded-lg hover:bg-gray-100"
              style={{ letterSpacing: "2px", lineHeight: "140%" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.9 5.25L18.75 10.5A1.5 1.5 0 0 1 20.25 12v0a1.5 1.5 0 0 1-1.5 1.5H6l-.75 3.75H20"
                />
                <circle cx="9" cy="19.5" r="1.5" />
                <circle cx="20" cy="19.5" r="1.5" />
              </svg>
            </button>

            {/* Mobile Logo - Center */}
            <Link
              href="/"
              className="flex flex-col justify-center items-center animate-on-load animate-scale-in delay-300"
            >
              <div
                className="text-secondary-heading font-bold"
                style={{
                  fontSize: "20px",
                  letterSpacing: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={"/Logo.svg"}
                  alt="Logo"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </Link>

            {/* Mobile Hamburger Menu - Far Right */}
            <button
              onClick={toggleMobileMenu}
              className={`nav-item-hover text-secondary-heading cursor-pointer transition-all duration-300 p-3 rounded-lg hover:bg-gray-100 ${
                isMobileMenuOpen ? "hamburger-open" : ""
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="hamburger-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                />
                <path
                  className="hamburger-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <path
                  className="hamburger-line"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Cart Button - Absolute Right Corner */}
          <div className="hidden lg:flex absolute top-0 right-6 h-full items-center animate-on-load animate-fade-up delay-500">
            <button
              className="nav-item-hover cart-pulse text-secondary-heading cursor-pointer transition-colors duration-200 py-5 px-4 text-xs flex items-center justify-center font-medium uppercase"
              style={{ letterSpacing: "2px", lineHeight: "140%" }}
            >
              <span>CART</span>
              <svg
                className="w-4 h-4 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.9 5.25L18.75 10.5A1.5 1.5 0 0 1 20.25 12v0a1.5 1.5 0 0 1-1.5 1.5H6l-.75 3.75H20"
                />
                <circle cx="9" cy="19.5" r="1.5" />
                <circle cx="20" cy="19.5" r="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden mobile-overlay"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 mobile-menu-panel border-l border-secondary-border transform transition-transform duration-400 ease-out z-50 lg:hidden ${
          isMobileMenuOpen
            ? "mobile-menu-enter translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full mobile-menu-scroll">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-secondary-border bg-white/80 backdrop-blur-sm sticky top-0 z-10">
            <div
              className="text-secondary-heading font-bold"
              style={{ fontSize: "18px", letterSpacing: "2px" }}
            >
              MENU
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-secondary-heading hover:text-secondary-accent transition-all duration-200 p-2 rounded-full hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col flex-1 py-4 px-2">
            <Link
              href="/"
              className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl mx-2 mb-1 border-b border-transparent hover:border-secondary-accent/20"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ letterSpacing: "1.5px" }}
            >
              <div className="flex items-center justify-between">
                <span>HOME</span>
                <svg
                  className="w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/about"
              className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl mx-2 mb-1 border-b border-transparent hover:border-secondary-accent/20"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ letterSpacing: "1.5px" }}
            >
              <div className="flex items-center justify-between">
                <span>ABOUT US</span>
                <svg
                  className="w-4 h-4 opacity-0 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {/* Mobile Venues Dropdown */}
            <div className="mx-2 mb-1">
              <button
                onClick={toggleMobileVenues}
                className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl w-full text-left border-b border-transparent hover:border-secondary-accent/20"
                style={{ letterSpacing: "1.5px" }}
              >
                <div className="flex items-center justify-between">
                  <span>VENUES</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileVenuesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {/* Mobile Venues Dropdown Items */}
              <div className={`overflow-hidden transition-all duration-300 ${mobileVenuesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="py-2 px-4 bg-secondary-background/30 rounded-b-xl">
                  <Link
                    href="/events/weddings"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Wedding Venues
                  </Link>
                  <Link
                    href="/events/receptions"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Reception Halls
                  </Link>
                  <Link
                    href="/events/engagement"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Engagement Venues
                  </Link>
                  <Link
                    href="/events/mehendi"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Function Halls
                  </Link>
                  <Link
                    href="/events/corporate"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Corporate Spaces
                  </Link>
                  <Link
                    href="/events/destination"
                    className="block px-4 py-3 text-sm text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200 hover:bg-white/50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Destination Venues
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl mx-2 mb-1 border-b border-transparent hover:border-secondary-accent/20"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ letterSpacing: "1.5px" }}
            >
              <div className="flex items-center justify-between">
                <span>GALLERY</span>
                <svg
                  className="w-4 h-4 opacity-0 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {/* Mobile Services Dropdown */}
           <Link
              href="/services"
              className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl mx-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ letterSpacing: "1.5px" }}
            >
              <div className="flex items-center justify-between">
                <span>SERVICES</span>
                <svg
                  className="w-4 h-4 opacity-0 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href="/contact"
              className="mobile-menu-item text-secondary-heading hover:text-secondary-accent px-6 py-4 text-base font-medium uppercase tracking-wider transition-all duration-300 rounded-xl mx-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ letterSpacing: "1.5px" }}
            >
              <div className="flex items-center justify-between">
                <span>CONTACT</span>
                <svg
                  className="w-4 h-4 opacity-0 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Footer Section */}
          <div className="p-4 border-t border-secondary-border bg-white/50 backdrop-blur-sm">
            <div className="text-center">
              <div
                className="text-secondary-heading font-bold text-lg mb-1"
                style={{ letterSpacing: "2px" }}
              >
                LŌŌVIO
              </div>
              <p className="text-sm text-gray-600">Elevating experiences</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
