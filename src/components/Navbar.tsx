"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import PickupModal from "./PickupModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pickupModalOpen, setPickupModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-[#f8f9ff]/90 backdrop-blur-xl border-b border-[#dee9fc] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-[#3f4941]">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-lg transition-colors bg-[#eff4ff] text-[#006a3b] font-medium"
            >
              Home
            </Link>
            <a
              href="/#categories"
              className="px-3 py-1.5 rounded-lg hover:text-[#006a3b] hover:bg-[#eff4ff] transition-colors"
            >
              Categories
            </a>
            <a
              href="/#how-it-works"
              className="px-3 py-1.5 rounded-lg hover:text-[#006a3b] hover:bg-[#eff4ff] transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#centers"
              className="px-3 py-1.5 rounded-lg hover:text-[#006a3b] hover:bg-[#eff4ff] transition-colors"
            >
              Collection Hubs
            </a>
            <a
              href="/#about"
              className="px-3 py-1.5 rounded-lg hover:text-[#006a3b] hover:bg-[#eff4ff] transition-colors"
            >
              About Us
            </a>
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-lg hover:text-[#006a3b] hover:bg-[#eff4ff] transition-colors flex items-center gap-1 text-[#196c3b]"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>Dashboard</span>
            </Link>
          </nav>

          {/* User actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 pl-2 pr-3 py-1 bg-white border border-[#becabe]/60 rounded-full shadow-xs hover:border-[#006a3b] transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-[#006a3b] text-white flex items-center justify-center font-bold text-xs">
                M
              </div>
              <div className="text-left text-xs leading-none">
                <span className="font-semibold text-slate-800 block">Mansi R.</span>
                <span className="text-[10px] text-[#196c3b] font-medium">120 EcoPoints</span>
              </div>
            </Link>

            <Link
              href="/auth"
              className="text-xs font-semibold px-3 py-2 rounded-xl text-slate-700 hover:text-[#006a3b] transition-colors"
            >
              Login / Register
            </Link>

            <button
              onClick={() => setPickupModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#006a3b] hover:bg-[#196c3b] text-white text-xs font-semibold rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Request Pickup</span>
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setPickupModalOpen(true)}
              className="px-3 py-1.5 bg-[#006a3b] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              Pickup
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-[#eff4ff]"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden px-4 pt-2 pb-4 bg-white border-b border-[#dee9fc] space-y-2 shadow-lg animate-fadeIn">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#eff4ff]"
            >
              Home
            </Link>
            <a
              href="/#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#eff4ff]"
            >
              Categories
            </a>
            <a
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#eff4ff]"
            >
              How It Works
            </a>
            <a
              href="/#centers"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-[#eff4ff]"
            >
              Collection Hubs
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-[#006a3b] hover:bg-[#eff4ff]"
            >
              User Dashboard
            </Link>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-semibold rounded-lg border border-slate-200"
              >
                Login / Register
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setPickupModalOpen(true);
                }}
                className="w-full py-2 bg-[#006a3b] text-white text-sm font-semibold rounded-lg shadow-sm"
              >
                Request Pickup Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Pickup modal */}
      <PickupModal
        isOpen={pickupModalOpen}
        onClose={() => setPickupModalOpen(false)}
      />
    </>
  );
}
