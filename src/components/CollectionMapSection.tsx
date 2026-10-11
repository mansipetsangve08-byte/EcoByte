"use client";

import React, { useState } from "react";

interface Center {
  id: string;
  name: string;
  address: string;
  distance: string;
  hours: string;
  phone: string;
  pinX: string;
  pinY: string;
}

const centersData: Center[] = [
  {
    id: "kothrud",
    name: "Green Recycling Center - Kothrud",
    address: "Plot 14, Paud Road, Kothrud, Pune 411038",
    distance: "1.8 km",
    hours: "09:00 AM - 06:00 PM (Mon - Sat)",
    phone: "+91 98765 43210",
    pinX: "26%",
    pinY: "52%",
  },
  {
    id: "shivaji-nagar",
    name: "Eco Waste Solutions - Shivaji Nagar",
    address: "Shop 5, FC Road, Shivaji Nagar, Pune 411005",
    distance: "4.2 km",
    hours: "10:00 AM - 07:00 PM (Mon - Sun)",
    phone: "+91 91234 56780",
    pinX: "50%",
    pinY: "32%",
  },
  {
    id: "baner",
    name: "Recycle Hub - Baner High Street",
    address: "High Street, Baner, Pune 411045",
    distance: "6.5 km",
    hours: "09:00 AM - 05:00 PM (Mon - Sat)",
    phone: "+91 99887 76655",
    pinX: "22%",
    pinY: "18%",
  },
  {
    id: "hadapsar",
    name: "Magarpatta Circular Depot - Hadapsar",
    address: "Cybercity Gate 2, Hadapsar, Pune 411028",
    distance: "8.9 km",
    hours: "08:30 AM - 07:30 PM (Mon - Sat)",
    phone: "+91 98220 12345",
    pinX: "76%",
    pinY: "58%",
  },
];

interface CollectionMapSectionProps {
  onOpenPickup?: () => void;
}

export default function CollectionMapSection({ onOpenPickup }: CollectionMapSectionProps) {
  const [selectedCenterId, setSelectedCenterId] = useState("kothrud");
  const selectedCenter = centersData.find((c) => c.id === selectedCenterId) || centersData[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full" id="centers">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="text-[#196c3b] font-semibold text-xs uppercase tracking-wider mb-1">
            Drop-Off Network
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#121c2a]">
            Find Nearby Collection Hubs
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eff4ff] border border-[#becabe]/40 text-xs font-semibold text-[#006a3b]">
          <span className="material-symbols-outlined text-[18px]">pin_drop</span>
          <span>120+ Safe Collection Hubs Operating Nationwide</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left List of Centers */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {centersData.map((center) => {
            const isSelected = center.id === selectedCenterId;
            return (
              <div
                key={center.id}
                onClick={() => setSelectedCenterId(center.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? "bg-white border-[#006a3b] shadow-md ring-2 ring-[#006a3b]/10"
                    : "bg-white hover:bg-[#eff4ff]/40 border-slate-200/80 shadow-xs"
                }`}
              >
                <div className="flex justify-between items-start mb-1.5">
                  <div>
                    <h4 className="font-bold text-[#121c2a] text-sm sm:text-base flex items-center gap-1.5">
                      {center.name}
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#006a3b] inline-block animate-pulse" />
                      )}
                    </h4>
                    <p className="text-xs text-[#535f58] mt-0.5">{center.address}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#a3f5b6]/40 text-[#196c3b] font-bold text-xs shrink-0">
                    {center.distance}
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-[#535f58] gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#196c3b]" />
                    {center.hours}
                  </span>
                  <a
                    href={`tel:${center.phone}`}
                    className="text-[#006a3b] font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    {center.phone}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Map Canvas Panel */}
        <div className="lg:col-span-7 min-h-[420px] rounded-3xl overflow-hidden shadow-sm relative border border-slate-200 bg-[#eff4ff] flex flex-col justify-between p-4">
          {/* Stylized SVG Map Canvas */}
          <div className="absolute inset-0 pointer-events-none opacity-90">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 700 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="700" height="500" fill="#eaf1ff" />
              {/* Rivers */}
              <path
                d="M-20 180 C 120 210, 220 140, 360 210 C 470 260, 560 200, 720 230"
                stroke="#becabe"
                strokeWidth="22"
                strokeLinecap="round"
                opacity="0.55"
              />
              <path
                d="M-20 180 C 120 210, 220 140, 360 210 C 470 260, 560 200, 720 230"
                stroke="#d0dbed"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M 360 210 C 370 290, 420 340, 520 420"
                stroke="#d0dbed"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Arterial Roads */}
              <path
                d="M 40 40 L 660 460"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M 650 60 L 50 440"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.9"
              />
              <path
                d="M 350 20 L 350 480"
                stroke="#ffffff"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M 30 250 L 670 250"
                stroke="#ffffff"
                strokeWidth="9"
                strokeLinecap="round"
                opacity="0.85"
              />
              {/* District Zone Glows */}
              <circle cx="220" cy="290" r="70" fill="#a3f5b6" fillOpacity="0.25" />
              <circle cx="350" cy="220" r="60" fill="#9af6b8" fillOpacity="0.25" />
              <circle cx="170" cy="150" r="55" fill="#a3f5b6" fillOpacity="0.2" />
              <circle cx="540" cy="320" r="75" fill="#88d89c" fillOpacity="0.22" />
              {/* District Labels */}
              <text x="130" y="135" fill="#3f4941" fontSize="13" fontFamily="Inter" fontWeight="600">
                BANER
              </text>
              <text x="300" y="195" fill="#3f4941" fontSize="14" fontFamily="Inter" fontWeight="700">
                SHIVAJI NAGAR
              </text>
              <text x="165" y="335" fill="#3f4941" fontSize="13" fontFamily="Inter" fontWeight="600">
                KOTHRUD
              </text>
              <text x="490" y="330" fill="#3f4941" fontSize="13" fontFamily="Inter" fontWeight="600">
                HADAPSAR
              </text>
              <text x="320" y="390" fill="#6f7a70" fontSize="12" fontFamily="Inter" fontWeight="500">
                SWARGATE
              </text>
              <text x="340" y="100" fill="#6f7a70" fontSize="12" fontFamily="Inter" fontWeight="500">
                AUNDH
              </text>
            </svg>
          </div>

          {/* Top Controls Banner */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <div className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl shadow-xs text-[#121c2a] text-xs font-medium flex items-center gap-1.5 border border-slate-200/60">
              <span className="material-symbols-outlined text-[#006a3b] text-[18px]">pin_drop</span>
              <span className="font-bold">Pune Metropolitan Area</span>
              <span className="text-[#535f58]">• 12 Verified Hubs</span>
            </div>
            <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-xl shadow-xs p-1 text-slate-600 border border-slate-200/60">
              <button
                type="button"
                className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-700"
                title="Zoom in"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
              <div className="w-[1px] h-3 bg-slate-200" />
              <button
                type="button"
                className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-700"
                title="Zoom out"
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <div className="w-[1px] h-3 bg-slate-200" />
              <button
                type="button"
                onClick={() => setSelectedCenterId("kothrud")}
                className="w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center text-[#006a3b]"
                title="Reset view"
              >
                <span className="material-symbols-outlined text-[18px]">my_location</span>
              </button>
            </div>
          </div>

          {/* Interactive Pins on Map */}
          <div className="relative z-10 w-full h-48 my-auto">
            {centersData.map((center) => {
              const isSelected = center.id === selectedCenterId;
              return (
                <div
                  key={center.id}
                  onClick={() => setSelectedCenterId(center.id)}
                  style={{ top: center.pinY, left: center.pinX }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform hover:scale-110"
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#006a3b] opacity-35" />
                    )}
                    <div
                      className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-md text-xs font-semibold border ${
                        isSelected
                          ? "bg-[#006a3b] text-white border-[#006a3b]"
                          : "bg-white text-slate-800 border-slate-200 hover:bg-[#eff4ff]"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {isSelected ? "recycling" : "location_on"}
                      </span>
                      <span>{center.name.split("-")[1] || center.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Selected Center Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-md flex flex-wrap items-center justify-between gap-3 border border-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#a3f5b6] flex items-center justify-center text-[#00210f] shrink-0 font-bold">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-[#121c2a] font-bold">
                  {selectedCenter.name}
                </div>
                <div className="text-[11px] text-[#535f58]">
                  Authorized MPCB & CPCB Recycler Network • {selectedCenter.distance} away
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenPickup}
              className="inline-flex items-center gap-1 px-3.5 py-2 bg-[#006a3b] hover:bg-[#196c3b] text-white rounded-xl text-xs font-semibold shadow transition-colors"
            >
              <span>Book Free Pickup</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
