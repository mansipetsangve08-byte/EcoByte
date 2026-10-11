"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionMapSection from "@/components/CollectionMapSection";
import PickupModal from "@/components/PickupModal";

export default function CentersPage() {
  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpenNow, setFilterOpenNow] = useState(false);

  const hubs = [
    {
      name: "Green Recycling Center - Kothrud",
      address: "Plot 14, Paud Road, Kothrud, Pune 411038",
      phone: "+91 98765 43210",
      hours: "09:00 AM - 06:00 PM (Mon - Sat)",
      materials: ["Laptops", "Smartphones", "Lithium Batteries", "PC Monitors"],
      distance: "1.8 km",
      isOpen: true,
      certifications: ["MPCB Certified", "R2v3 Partner"],
    },
    {
      name: "Eco Waste Solutions - Shivaji Nagar",
      address: "Shop 5, FC Road, Shivaji Nagar, Pune 411005",
      phone: "+91 91234 56780",
      hours: "10:00 AM - 07:00 PM (Mon - Sun)",
      materials: ["Batteries", "Adapters", "Cables", "Smart Home Tech"],
      distance: "4.2 km",
      isOpen: true,
      certifications: ["DoD Degaussing Equipped", "ISO 14001"],
    },
    {
      name: "Recycle Hub - Baner High Street",
      address: "High Street, Baner, Pune 411045",
      phone: "+91 99887 76655",
      hours: "09:00 AM - 05:00 PM (Mon - Sat)",
      materials: ["Servers", "Workstations", "Motherboards", "Audio Gear"],
      distance: "6.5 km",
      isOpen: true,
      certifications: ["Corporate Bulk Certified", "MPCB Clean Hub"],
    },
    {
      name: "Magarpatta Circular Depot - Hadapsar",
      address: "Cybercity Gate 2, Hadapsar, Pune 411028",
      phone: "+91 98220 12345",
      hours: "08:30 AM - 07:30 PM (Mon - Sat)",
      materials: ["Appliances", "Telecom Hardware", "Printers", "Li-ion Packs"],
      distance: "8.9 km",
      isOpen: false,
      certifications: ["Zero-Runoff Hydrometallurgy", "CPCB Audited"],
    },
    {
      name: "Viman Nagar Drop-Off Station",
      address: "Phoenix Mall Road, Viman Nagar, Pune 411014",
      phone: "+91 98233 44556",
      hours: "10:00 AM - 08:00 PM (Mon - Sun)",
      materials: ["Tablets", "Smartwatches", "Chargers", "Headphones"],
      distance: "11.2 km",
      isOpen: true,
      certifications: ["Self-Service Kiosk", "Instant EcoPoints Scan"],
    },
    {
      name: "Pimpri Chinchwad Industrial Recovery Depository",
      address: "MIDC Sector 10, Bhosari, Pune 411026",
      phone: "+91 98900 11223",
      hours: "08:00 AM - 06:00 PM (Mon - Sat)",
      materials: ["Industrial SMPS", "Heavy Electricals", "Server Racks"],
      distance: "15.4 km",
      isOpen: true,
      certifications: ["R2v3 High-Throughput", "DoD Destruction Vault"],
    },
  ];

  const filteredHubs = hubs.filter((hub) => {
    const matchesSearch =
      hub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hub.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterOpenNow ? hub.isOpen : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />

      <main className="w-full pt-20 bg-[#f8f9ff] min-h-screen">
        {/* Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff4ff] text-[#006a3b] text-xs font-bold mb-3 border border-[#becabe]/50">
              <span className="material-symbols-outlined text-[16px]">pin_drop</span>
              <span>120+ Authorized Recycling Depots</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#121c2a] tracking-tight mb-3">
              Certified E-Waste Collection Directory
            </h1>
            <p className="text-sm text-[#535f58] leading-relaxed">
              Find safe, government-authorized electronic waste collection centers near you. All locations guarantee zero-landfill diversion and certified custody chain manifests.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <div className="relative flex-1 w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-[#6f7a70] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by neighborhood, pincode, or device type (e.g. Kothrud, Laptop, Battery)..."
                className="w-full h-11 pl-11 pr-4 bg-transparent text-sm text-[#121c2a] outline-none placeholder:text-[#6f7a70]"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setFilterOpenNow(!filterOpenNow)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  filterOpenNow
                    ? "bg-[#006a3b] text-white border-[#006a3b]"
                    : "bg-[#eff4ff] text-[#3f4941] border-slate-200 hover:bg-[#dee9fc]"
                }`}
              >
                Open Now Only
              </button>
              <button
                type="button"
                onClick={() => setPickupModalOpen(true)}
                className="whitespace-nowrap px-4 py-2.5 bg-[#196c3b] hover:bg-[#006a3b] text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                <span>Can&apos;t travel? Book Pickup</span>
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Map Visual */}
        <CollectionMapSection onOpenPickup={() => setPickupModalOpen(true)} />

        {/* Directory Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#121c2a]">
              Available Hubs ({filteredHubs.length})
            </h2>
            <span className="text-xs text-[#535f58]">All locations accept domestic &amp; corporate items</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHubs.map((hub) => (
              <div
                key={hub.name}
                className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        hub.isOpen
                          ? "bg-[#a3f5b6]/60 text-[#196c3b]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {hub.isOpen ? "● Open Now" : "Closed"}
                    </span>
                    <span className="text-xs font-bold text-[#006a3b]">{hub.distance}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#121c2a] mb-1">{hub.name}</h3>
                  <p className="text-xs text-[#535f58] mb-3">{hub.address}</p>

                  <div className="space-y-1.5 py-2 border-y border-slate-100 text-xs text-[#3f4941]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#006a3b]">
                        schedule
                      </span>
                      <span>{hub.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#006a3b]">
                        call
                      </span>
                      <a href={`tel:${hub.phone}`} className="hover:underline font-semibold">
                        {hub.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-[10px] uppercase font-bold text-[#6f7a70] block mb-1.5">
                      Key Accepted Streams
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {hub.materials.map((m) => (
                        <span
                          key={m}
                          className="px-2 py-0.5 bg-[#eff4ff] text-[#3f4941] rounded-md text-[11px] font-medium"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-xl bg-[#eff4ff] hover:bg-[#dee9fc] text-[#121c2a] text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">directions</span>
                    <span>Get Directions</span>
                  </a>
                  <button
                    onClick={() => setPickupModalOpen(true)}
                    className="flex-1 py-2 rounded-xl bg-[#006a3b] hover:bg-[#196c3b] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                    <span>Pickup Instead</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
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
