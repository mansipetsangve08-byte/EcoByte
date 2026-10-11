"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionMapSection from "@/components/CollectionMapSection";
import PickupModal from "@/components/PickupModal";

export default function HomePage() {
  const [pickupModalOpen, setPickupModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main className="w-full pt-16 bg-[#f8f9ff]">
        {/* Ambient Top Glows */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#9af6b8]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 left-[-5%] w-80 h-80 bg-[#a3f5b6]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#196c3b] font-semibold text-xs uppercase tracking-wider mb-5 shadow-xs border border-[#becabe]/50">
                  <span
                    className="material-symbols-outlined text-[16px] text-[#006a3b]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    eco
                  </span>
                  <span>Certified Sustainable Electronics Lifecycle</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121c2a] tracking-tight leading-[1.12] mb-5">
                  Dispose E-Waste <span className="text-[#006a3b]">Responsibly</span>
                </h1>

                <p className="text-base sm:text-lg text-[#3f4941] max-w-xl mb-8 leading-relaxed font-normal">
                  Recycle your electronic waste safely and help build a cleaner, greener future.
                  From doorstep secure pickups to zero-landfill certified processing.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={() => setPickupModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#006a3b] hover:bg-[#196c3b] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Request Pickup</span>
                    <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                  </button>
                  <a
                    href="#centers"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e6eeff] hover:bg-[#dee9fc] text-[#006a3b] font-bold text-sm rounded-xl transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                    <span>Find Collection Centers</span>
                  </a>
                </div>

                {/* Trust Sub-strip */}
                <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-6 text-[#535f58] text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#196c3b] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                    <span>DoD 5220.22-M Data Destruction</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#196c3b] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      energy_savings_leaf
                    </span>
                    <span>Zero-Landfill Commitment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#196c3b] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      workspace_premium
                    </span>
                    <span>R2v3 & ISO 14001 Compliant</span>
                  </div>
                </div>
              </div>

              {/* Hero Graphic Composition */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square max-w-lg mx-auto p-4 bg-white rounded-3xl shadow-xl flex flex-col justify-between overflow-hidden border border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#dee9fc]/40 via-transparent to-[#9af6b8]/20 pointer-events-none" />

                  {/* Clean Visual Scene */}
                  <div className="relative h-2/3 w-full rounded-2xl overflow-hidden shadow-xs bg-gradient-to-br from-emerald-800 to-teal-950 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#9af6b8] animate-ping" />
                        <span className="text-xs uppercase tracking-widest font-bold text-[#9af6b8]">
                          Live Facility Feed
                        </span>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-white/10 rounded-full backdrop-blur-md">
                        Pune Main Facility #01
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#a3f5b6]">
                        <span className="material-symbols-outlined text-[28px]">
                          precision_manufacturing
                        </span>
                        <span className="font-extrabold text-xl">Hydrometallurgical Refining</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed">
                        Automated robotic disassembly, laser sorting, and rare-earth element extraction with zero chemical runoff.
                      </p>
                    </div>

                    <div className="px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        Batch #MH-2026-904 Active
                      </span>
                      <span className="font-mono text-emerald-300">99.2% Purity</span>
                    </div>
                  </div>

                  {/* Material Recovery Metric Pill */}
                  <div className="relative p-3.5 flex items-center justify-between gap-3 bg-[#eff4ff] rounded-xl border border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#006a3b] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">autorenew</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#121c2a]">
                          Circularity Score
                        </div>
                        <div className="text-xs text-[#535f58]">
                          98.4% Material Recovery Yield
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#006a3b]">+2.4T</span>
                      <span className="block text-[11px] font-semibold text-[#535f58]">
                        Gold & Copper
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Key Metrics Statistics Counter Banner */}
        <section className="w-full bg-white py-12 border-y border-[#dee9fc]/70 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#eff4ff]/80 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#9af6b8]/50 flex items-center justify-center text-[#006a3b] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">scale</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a]">50k+</div>
                  <div className="text-xs font-medium text-[#535f58]">Kg E-Waste Collected</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#eff4ff]/80 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#a3f5b6]/50 flex items-center justify-center text-[#196c3b] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">rv_hookup</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a]">12,400+</div>
                  <div className="text-xs font-medium text-[#535f58]">Successful Pickups</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#eff4ff]/80 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#9af6b8]/50 flex items-center justify-center text-[#006a3b] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">factory</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a]">120+</div>
                  <div className="text-xs font-medium text-[#535f58]">Recycling Centers</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#eff4ff]/80 border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#a3f5b6]/50 flex items-center justify-center text-[#196c3b] shrink-0">
                  <span className="material-symbols-outlined text-[24px]">sentiment_satisfied</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a]">35,000+</div>
                  <div className="text-xs font-medium text-[#535f58]">Users Helped</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="categories">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[#196c3b] font-bold text-xs uppercase tracking-wider mb-1">
                Material Streams
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121c2a]">
                Accepted E-Waste Categories
              </h2>
            </div>
            <p className="text-sm text-[#535f58] max-w-md leading-relaxed">
              Every electronic component holds reclaimable rare earth elements and hazardous chemicals.
              Sort and dispose properly with our certified facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">smartphone</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Mobile Phones</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                Smartphones, legacy feature phones, iPads, Android tablets, and cellular connected wearables.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Lithium Safe
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Memory Shredding
                </span>
              </div>
            </div>

            {/* Category 2 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">laptop_mac</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Laptops & PCs</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                Workstations, MacBooks, desktop towers, CPU units, LED/LCD monitors, and internal solid state drives.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  HDD Demagnetizing
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Circuit Board Yield
                </span>
              </div>
            </div>

            {/* Category 3 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">battery_charging_full</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Batteries</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                Rechargeable Li-ion, sealed lead-acid, high-capacity power banks, uninterruptible power supplies (UPS).
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Thermal Neutralization
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Cobalt Salvage
                </span>
              </div>
            </div>

            {/* Category 4 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">cable</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Chargers & Cables</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                High-wattage GaN adapters, USB-C lines, Ethernet cables, copper cords, and legacy power bricks.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Pure Copper Stripping
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Polymer Regrind
                </span>
              </div>
            </div>

            {/* Category 5 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">headphones</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Accessories</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                Over-ear headphones, mechanical keyboards, optical mice, remotes, webcams, and docking stations.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Component Separation
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  ABS Pelletizing
                </span>
              </div>
            </div>

            {/* Category 6 */}
            <div className="group p-6 rounded-2xl bg-white shadow-xs hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] mb-4 group-hover:bg-[#006a3b] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[26px]">tv</span>
              </div>
              <h3 className="text-lg font-bold text-[#121c2a] mb-2">Other Electronics</h3>
              <p className="text-sm text-[#535f58] mb-4 leading-relaxed">
                Smart TVs, microwave ovens, laser printers, studio audio receivers, and smart-home appliances.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Heavy Metal Safety
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#eff4ff] text-[#3f4941] text-xs font-semibold">
                  Glass Decontamination
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (4-Step Visual Flow) */}
        <section className="w-full bg-[#eff4ff] py-16 border-y border-[#dee9fc]" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[#196c3b] font-bold text-xs uppercase tracking-wider mb-1">
                Process Flow
              </div>
              <h2 className="text-3xl font-extrabold text-[#121c2a]">
                How It Works in 4 Simple Steps
              </h2>
              <p className="text-sm text-[#535f58] mt-2">
                Effortless logistics engineered for enterprise sustainability and responsible domestic recycling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-white shadow-xs flex flex-col justify-between border border-slate-200/70">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#006a3b] text-white font-extrabold text-base flex items-center justify-center">
                      1
                    </span>
                    <span className="material-symbols-outlined text-[#006a3b] text-[28px]">
                      how_to_reg
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#121c2a] mb-2">Register</h3>
                  <p className="text-xs text-[#535f58] leading-relaxed">
                    Create an eco-profile in seconds as an individual consumer or commercial enterprise account.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-xs font-semibold text-[#196c3b] flex items-center gap-1">
                  <span>Instant verification</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-white shadow-xs flex flex-col justify-between border border-slate-200/70">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#006a3b] text-white font-extrabold text-base flex items-center justify-center">
                      2
                    </span>
                    <span className="material-symbols-outlined text-[#006a3b] text-[28px]">
                      devices
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#121c2a] mb-2">Submit E-Waste</h3>
                  <p className="text-xs text-[#535f58] leading-relaxed">
                    Catalog your electronic inventory, declare sensitive data wipe requirements, and get estimates.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-xs font-semibold text-[#196c3b] flex items-center gap-1">
                  <span>Automated SKU recognition</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-white shadow-xs flex flex-col justify-between border border-slate-200/70">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#006a3b] text-white font-extrabold text-base flex items-center justify-center">
                      3
                    </span>
                    <span className="material-symbols-outlined text-[#006a3b] text-[28px]">
                      calendar_month
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#121c2a] mb-2">Schedule Pickup</h3>
                  <p className="text-xs text-[#535f58] leading-relaxed">
                    Pick a convenient doorstep pickup window or select the closest certified drop-off collection hub.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-xs font-semibold text-[#196c3b] flex items-center gap-1">
                  <span>Real-time driver tracking</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-white shadow-xs flex flex-col justify-between border border-slate-200/70">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#006a3b] text-white font-extrabold text-base flex items-center justify-center">
                      4
                    </span>
                    <span className="material-symbols-outlined text-[#006a3b] text-[28px]">
                      verified
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#121c2a] mb-2">Responsible Recycling</h3>
                  <p className="text-xs text-[#535f58] leading-relaxed">
                    Receive a verifiable Green Certificate along with your DoD data destruction audit trail.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-xs font-semibold text-[#196c3b] flex items-center gap-1">
                  <span>Downloadable ESG report</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[#196c3b] font-bold text-xs uppercase tracking-wider mb-1">
              System Advantages
            </div>
            <h2 className="text-3xl font-extrabold text-[#121c2a]">
              Why EcoCycle Sets The Benchmark
            </h2>
            <p className="text-sm text-[#535f58] mt-2">
              Engineered for security compliance, environmental integrity, and circular economy governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#a3f5b6]/40 text-[#196c3b] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">doorbell</span>
              </div>
              <h3 className="text-base font-bold text-[#121c2a] mb-2">Easy Pickup</h3>
              <p className="text-xs text-[#535f58] leading-relaxed">
                Flexible doorstep collection logistics for bulk commercial electronics and domestic household items.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#9af6b8]/40 text-[#006a3b] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">security</span>
              </div>
              <h3 className="text-base font-bold text-[#121c2a] mb-2">Safe Disposal</h3>
              <p className="text-xs text-[#535f58] leading-relaxed">
                Certified DoD 5220.22-M magnetic degaussing & physical drive shredding with non-recoverable compliance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#a3f5b6]/40 text-[#196c3b] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">compost</span>
              </div>
              <h3 className="text-base font-bold text-[#121c2a] mb-2">Eco Friendly</h3>
              <p className="text-xs text-[#535f58] leading-relaxed">
                Closed-loop recovery guaranteeing that precious metals, rare minerals, and engineered plastics re-enter production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs border border-slate-200/70 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#9af6b8]/40 text-[#006a3b] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">policy</span>
              </div>
              <h3 className="text-base font-bold text-[#121c2a] mb-2">Responsible Recycling</h3>
              <p className="text-xs text-[#535f58] leading-relaxed">
                State-of-the-art government authorized, R2v3-audited, and ISO 14001 environmental certified operations.
              </p>
            </div>
          </div>
        </section>

        {/* About Section with Mission Statement */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full" id="about">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col items-start">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a3f5b6]/40 text-[#196c3b] font-bold text-xs uppercase tracking-wide mb-3">
                  <span className="material-symbols-outlined text-[16px]">public</span>
                  <span>Global Environmental Mission</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121c2a] mb-4">
                  Guarding Tomorrow by Reclaiming Yesterday&apos;s Technology
                </h2>
                <p className="text-sm text-[#3f4941] mb-3 leading-relaxed">
                  Over 50 million metric tons of electronic waste are discarded every year, with less than 20% recycled formally. Toxic heavy metals seep into ecosystems while finite precious elements are permanently lost.
                </p>
                <p className="text-xs text-[#535f58] mb-6 leading-relaxed">
                  EcoCycle bridges high-throughput industrial circularity with effortless public participation. Our mission is total landfill diversion: ensuring every printed circuit board, lithium cell, and polymer casing is renewed for the next technological epoch.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 bg-[#eff4ff] rounded-2xl border border-slate-200/60">
                    <div className="text-2xl font-extrabold text-[#006a3b]">100%</div>
                    <div className="text-xs text-[#535f58]">Traceable Material Custody</div>
                  </div>
                  <div className="p-4 bg-[#eff4ff] rounded-2xl border border-slate-200/60">
                    <div className="text-2xl font-extrabold text-[#196c3b]">Zero</div>
                    <div className="text-xs text-[#535f58]">Incineration or Landfill Export</div>
                  </div>
                </div>
              </div>

              {/* Cleanroom Disassembly graphic showcase */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-md h-80 w-full relative bg-gradient-to-tr from-[#196c3b] via-[#006a3b] to-emerald-900 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[24px] text-[#9af6b8]">
                        biotech
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9af6b8]">
                        ISO 14001:2015 & R2v3 Facility
                      </span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-white/20 font-mono">
                      Cleanroom Grade 8
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-extrabold">Cleanroom Disassembly Facility</h4>
                    <p className="text-xs text-white/85 leading-relaxed">
                      Equipped with high-precision optical sorters, degaussing chambers, and closed-circuit chemical leaching tanks for 99.8% element reclaim.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                      <span className="px-2 py-1 bg-white/10 rounded-md">Automated Sorting</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md">DoD Magnetic Wiping</span>
                      <span className="px-2 py-1 bg-white/10 rounded-md">Zero Wastewater</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Action Pickup Strip */}
        <section className="w-full bg-[#006a3b] text-white py-12" id="request-pickup">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Have Electronics Ready for Disposal?
              </h3>
              <p className="text-sm text-white/90">
                Book a quick doorstep pickup today or generate digital manifest documentation for enterprise e-waste batches.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setPickupModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#006a3b] font-bold text-sm rounded-xl shadow-md hover:bg-slate-100 transition-colors"
                type="button"
              >
                Start Pickup Request
              </button>
              <Link
                href="/auth"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#268451] text-white font-bold text-sm rounded-xl hover:bg-[#196c3b] transition-colors text-center"
              >
                Enterprise Logistics Portal
              </Link>
            </div>
          </div>
        </section>

        {/* Collection Centers Map Section */}
        <CollectionMapSection onOpenPickup={() => setPickupModalOpen(true)} />
      </main>

      <Footer />

      {/* Pickup modal */}
      <PickupModal
        isOpen={pickupModalOpen}
        onClose={() => setPickupModalOpen(false)}
      />
    </>
  );
}
