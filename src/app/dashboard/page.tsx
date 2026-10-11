"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import PickupModal from "@/components/PickupModal";

interface RequestItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  date: string;
  status: "Completed" | "Pending" | "Accepted";
  icon: string;
}

const initialRequests: RequestItem[] = [
  {
    id: "1",
    name: "Old Laptop",
    subtitle: "HP Pavilion 15s • Serial: #HP-4891",
    category: "Electronics",
    date: "12 May 2025",
    status: "Completed",
    icon: "laptop_mac",
  },
  {
    id: "2",
    name: "Lead Acid Inverter Battery",
    subtitle: "Luminous 150Ah • 26.5 kg",
    category: "Batteries",
    date: "11 May 2025",
    status: "Pending",
    icon: "battery_charging_full",
  },
  {
    id: "3",
    name: "2x Samsung Mobile Phones",
    subtitle: "Galaxy S9 & Galaxy M20 (Lithium pack)",
    category: "Electronics",
    date: "10 May 2025",
    status: "Accepted",
    icon: "smartphone",
  },
  {
    id: "4",
    name: "Adapters & Cables Bundle",
    subtitle: "Copper cords, HDMI & SMPS chargers",
    category: "Accessories",
    date: "09 May 2025",
    status: "Completed",
    icon: "cable",
  },
];

export default function DashboardPage() {
  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTimeframe, setActiveTimeframe] = useState<"YTD" | "Lifetime">("YTD");
  const [requests] = useState<RequestItem[]>(initialRequests);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const filteredRequests = requests.filter(
    (req) =>
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadCertificate = () => {
    alert("Downloading official EcoCycle ISO-14001 ESG Impact Certificate for Mansi R. (#ECO-CERT-2026)");
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] flex text-[#121c2a]">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-[#dee9fc] shadow-sm z-50 flex flex-col justify-between py-6 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {/* Logo & Mobile Close */}
          <div className="px-6 flex items-center justify-between">
            <Link href="/" className="hover:opacity-90">
              <Logo size="md" />
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-500 hover:text-slate-800"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 px-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-bold text-sm bg-[#a3f5b6]/40 text-[#196c3b] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              <span>Dashboard</span>
            </Link>

            <button
              onClick={() => setPickupModalOpen(true)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#535f58] hover:bg-[#eff4ff] hover:text-[#006a3b] transition-all text-left"
            >
              <span className="material-symbols-outlined text-[20px]">recycling</span>
              <span>Dispose E-Waste</span>
            </button>

            <a
              href="#requests-table"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#535f58] hover:bg-[#eff4ff] hover:text-[#006a3b] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              <span>My Requests</span>
            </a>

            <Link
              href="/#centers"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#535f58] hover:bg-[#eff4ff] hover:text-[#006a3b] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>Find Centers</span>
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#535f58] hover:bg-[#eff4ff] hover:text-[#006a3b] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
              <span>Profile</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="px-3 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-xs font-semibold text-[#535f58] hover:bg-[#eff4ff] hover:text-[#006a3b] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Back to Main Website</span>
          </Link>

          <Link
            href="/auth"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm text-[#ba1a1a] hover:bg-[#ffdad6]/60 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 h-16 bg-white/90 backdrop-blur-xl border-b border-[#dee9fc] z-30 px-4 sm:px-8 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-[#eff4ff]"
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
            <div className="w-full relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[18px] pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search requests, serials, items..."
                className="w-full h-9 pl-9 pr-3 rounded-lg bg-[#eff4ff] text-xs text-[#121c2a] placeholder:text-[#6f7a70] border-none outline-none focus:ring-1 focus:ring-[#006a3b]"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-2 rounded-lg text-[#535f58] hover:bg-[#eff4ff] transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">notifications</span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full ring-2 ring-white" />
              </button>

              {notificationOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 text-xs z-50 animate-fadeIn">
                  <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 flex justify-between">
                    <span>Notifications</span>
                    <span className="text-[#006a3b] cursor-pointer">Mark read</span>
                  </div>
                  <div className="py-2 space-y-2">
                    <p className="text-slate-700">
                      🚚 Pickup #ECO-4891 completed. +20 EcoPoints added to your balance!
                    </p>
                    <p className="text-slate-500 text-[10px]">2 hours ago</p>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2.5 pl-2">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-[#121c2a]">Mansi R.</div>
                <div className="text-[10px] text-[#196c3b] font-bold">120 EcoPoints</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#006a3b] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                M
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="p-4 sm:p-8 flex-1 flex flex-col gap-6 max-w-7xl w-full mx-auto">
          {/* Greeting Banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a3f5b6]/40 text-[#196c3b] text-xs font-bold mb-2 border border-[#a3f5b6]">
                <span className="w-2 h-2 rounded-full bg-[#006a3b] animate-pulse" />
                <span>ACTIVE RECYCLER PROFILE • TIER 2</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#121c2a] tracking-tight">
                Welcome, Mansi!
              </h1>
              <p className="text-xs sm:text-sm text-[#535f58] mt-1">
                Here is your e-waste recycling activity and verified environmental balance.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleDownloadCertificate}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#121c2a] px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs border border-slate-200 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Impact Certificate</span>
              </button>
              <button
                onClick={() => setPickupModalOpen(true)}
                className="inline-flex items-center gap-1.5 bg-[#006a3b] hover:bg-[#196c3b] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>New Disposal</span>
              </button>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#6f7a70]">
                  Total Requests
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a] mt-1">8</div>
                <span className="text-xs text-[#006a3b] flex items-center gap-0.5 mt-1 font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +2 this month
                </span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#006a3b] shrink-0">
                <span className="material-symbols-outlined text-[22px]">inventory_2</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#6f7a70]">
                  Completed
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a] mt-1">5</div>
                <span className="text-xs text-[#196c3b] font-semibold mt-1 block">
                  62.5% success rate
                </span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#a3f5b6]/40 flex items-center justify-center text-[#196c3b] shrink-0">
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#6f7a70]">
                  Pending
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121c2a] mt-1">3</div>
                <span className="text-xs text-[#535f58] font-medium mt-1 block">
                  1 pickup queued
                </span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#eff4ff] flex items-center justify-center text-[#6f7a70] shrink-0">
                <span className="material-symbols-outlined text-[22px]">schedule</span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 flex items-center justify-between relative overflow-hidden">
              <div className="z-10">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#6f7a70]">
                  Eco Points
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#006a3b] mt-1">120</div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs text-[#196c3b] font-bold hover:underline mt-1"
                >
                  <span>Redeem Rewards</span>
                  <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                </a>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[#9af6b8] flex items-center justify-center text-[#00210f] shrink-0 z-10 font-bold shadow-xs">
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8-col: Requests Table & Environmental Impact */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Recent Requests Table */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80" id="requests-table">
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <h2 className="text-lg font-bold text-[#121c2a]">Recent Disposal Requests</h2>
                    <p className="text-xs text-[#535f58]">
                      Track status of items submitted for safe e-waste treatment.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#006a3b]">
                    Showing {filteredRequests.length} requests
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-[#eff4ff] text-[#3f4941] uppercase tracking-wider font-bold">
                        <th className="py-2.5 px-3 rounded-l-xl">Item Details</th>
                        <th className="py-2.5 px-3">Category</th>
                        <th className="py-2.5 px-3">Date Logged</th>
                        <th className="py-2.5 px-3 rounded-r-xl">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredRequests.map((req) => (
                        <tr key={req.id} className="hover:bg-[#eff4ff]/40 transition-colors">
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#006a3b] shrink-0">
                                <span className="material-symbols-outlined text-[18px]">
                                  {req.icon}
                                </span>
                              </div>
                              <div>
                                <div className="font-bold text-[#121c2a]">{req.name}</div>
                                <div className="text-[11px] text-[#6f7a70]">{req.subtitle}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 text-[#535f58]">{req.category}</td>
                          <td className="py-3 px-3 text-[#121c2a] font-medium">{req.date}</td>
                          <td className="py-3 px-3">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                req.status === "Completed"
                                  ? "bg-[#a3f5b6]/60 text-[#196c3b]"
                                  : req.status === "Pending"
                                  ? "bg-[#e6eeff] text-[#535f58]"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  req.status === "Completed"
                                    ? "bg-[#196c3b]"
                                    : req.status === "Pending"
                                    ? "bg-[#6f7a70]"
                                    : "bg-amber-600"
                                }`}
                              />
                              {req.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Environmental Impact Summary */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#196c3b] text-[22px]">
                        nest_eco_leaf
                      </span>
                      <h2 className="text-lg font-bold text-[#121c2a]">
                        Environmental Impact Summary
                      </h2>
                    </div>
                    <p className="text-xs text-[#535f58]">
                      Verified greenhouse offset & landfill diversion metrics.
                    </p>
                  </div>
                  <div className="inline-flex rounded-xl bg-[#eff4ff] p-1 text-xs">
                    <button
                      onClick={() => setActiveTimeframe("YTD")}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        activeTimeframe === "YTD"
                          ? "bg-white text-[#006a3b] shadow-xs"
                          : "text-[#535f58] hover:text-[#121c2a]"
                      }`}
                    >
                      2025 YTD
                    </button>
                    <button
                      onClick={() => setActiveTimeframe("Lifetime")}
                      className={`px-3 py-1 rounded-lg font-bold transition-all ${
                        activeTimeframe === "Lifetime"
                          ? "bg-white text-[#006a3b] shadow-xs"
                          : "text-[#535f58] hover:text-[#121c2a]"
                      }`}
                    >
                      Lifetime
                    </button>
                  </div>
                </div>

                {/* 3 Impact Key Figures Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-[#535f58] font-semibold">
                      <span>Devices Recycled</span>
                      <span className="material-symbols-outlined text-[16px] text-[#006a3b]">
                        devices
                      </span>
                    </div>
                    <div className="text-xl font-extrabold text-[#121c2a] mt-1">
                      14 <span className="text-xs font-normal text-[#535f58]">items</span>
                    </div>
                    <div className="w-full bg-[#dee9fc] h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-[#006a3b] h-full rounded-full" style={{ width: "70%" }} />
                    </div>
                    <span className="text-[10px] text-[#6f7a70] mt-1 block font-medium">
                      Target: 20 items / year
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-[#535f58] font-semibold">
                      <span>Waste Diverted</span>
                      <span className="material-symbols-outlined text-[16px] text-[#196c3b]">
                        delete_sweep
                      </span>
                    </div>
                    <div className="text-xl font-extrabold text-[#121c2a] mt-1">
                      38.5 <span className="text-xs font-normal text-[#535f58]">kg</span>
                    </div>
                    <div className="w-full bg-[#dee9fc] h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-[#196c3b] h-full rounded-full" style={{ width: "77%" }} />
                    </div>
                    <span className="text-[10px] text-[#6f7a70] mt-1 block font-medium">
                      Heavy metals contained
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#eff4ff] border border-slate-100">
                    <div className="flex items-center justify-between text-xs text-[#535f58] font-semibold">
                      <span>CO2 Offset</span>
                      <span className="material-symbols-outlined text-[16px] text-[#006a3b]">co2</span>
                    </div>
                    <div className="text-xl font-extrabold text-[#121c2a] mt-1">
                      62.4 <span className="text-xs font-normal text-[#535f58]">kg</span>
                    </div>
                    <div className="w-full bg-[#dee9fc] h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-[#268451] h-full rounded-full" style={{ width: "82%" }} />
                    </div>
                    <span className="text-[10px] text-[#6f7a70] mt-1 block font-medium">
                      Eq. to 3 planted pine trees
                    </span>
                  </div>
                </div>

                {/* Monthly Activity Bar Chart */}
                <div className="p-5 rounded-2xl bg-[#eff4ff]/60 border border-slate-200/60">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#121c2a]">
                        Monthly Recycling Activity (kg Diverted)
                      </h3>
                      <p className="text-[11px] text-[#535f58]">Comparison across Jan - May 2025</p>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#535f58]">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#006a3b]" />
                        Electronics
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#88d89c]" />
                        Batteries & Misc
                      </span>
                    </div>
                  </div>

                  {/* SVG Bar Visualizer */}
                  <div className="w-full h-44 flex items-end justify-between px-4 pt-4 border-b border-slate-200">
                    {/* Jan */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer flex-1">
                      <div className="w-10 sm:w-12 bg-slate-200 rounded-t-md flex flex-col justify-end overflow-hidden h-[30%] group-hover:opacity-80 transition-all">
                        <div className="bg-[#88d89c] h-[35%] w-full" />
                        <div className="bg-[#006a3b] h-[65%] w-full" />
                      </div>
                      <span className="text-[11px] text-[#6f7a70] font-medium">Jan (4.2kg)</span>
                    </div>

                    {/* Feb */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer flex-1">
                      <div className="w-10 sm:w-12 bg-slate-200 rounded-t-md flex flex-col justify-end overflow-hidden h-[45%] group-hover:opacity-80 transition-all">
                        <div className="bg-[#88d89c] h-[40%] w-full" />
                        <div className="bg-[#006a3b] h-[60%] w-full" />
                      </div>
                      <span className="text-[11px] text-[#6f7a70] font-medium">Feb (6.1kg)</span>
                    </div>

                    {/* Mar */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer flex-1">
                      <div className="w-10 sm:w-12 bg-slate-200 rounded-t-md flex flex-col justify-end overflow-hidden h-[25%] group-hover:opacity-80 transition-all">
                        <div className="bg-[#88d89c] h-[30%] w-full" />
                        <div className="bg-[#006a3b] h-[70%] w-full" />
                      </div>
                      <span className="text-[11px] text-[#6f7a70] font-medium">Mar (3.4kg)</span>
                    </div>

                    {/* Apr */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer flex-1">
                      <div className="w-10 sm:w-12 bg-slate-200 rounded-t-md flex flex-col justify-end overflow-hidden h-[60%] group-hover:opacity-80 transition-all">
                        <div className="bg-[#88d89c] h-[25%] w-full" />
                        <div className="bg-[#006a3b] h-[75%] w-full" />
                      </div>
                      <span className="text-[11px] text-[#6f7a70] font-medium">Apr (8.8kg)</span>
                    </div>

                    {/* May Peak */}
                    <div className="flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer flex-1">
                      <div className="relative w-10 sm:w-12 bg-slate-200 rounded-t-md flex flex-col justify-end overflow-hidden h-[95%] shadow-sm group-hover:opacity-80 transition-all ring-2 ring-[#006a3b]/30">
                        <div className="bg-[#88d89c] h-[55%] w-full" />
                        <div className="bg-[#006a3b] h-[45%] w-full" />
                      </div>
                      <span className="text-[11px] text-[#196c3b] font-bold">May (16.0kg)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-xs text-[#535f58]">
                    <span>Verified under ISO-14001 E-Waste Reclamation Protocol</span>
                    <span className="text-[#006a3b] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">verified</span> Audit ID: #ECO-9941
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4-col: Pickup Valet & Certified Drop-off Partner */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Pickup Service Callout Card */}
              <div className="rounded-2xl bg-white p-6 shadow-xs border border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#a3f5b6]/50 text-[#196c3b] text-xs font-bold uppercase tracking-wider">
                    Free Doorstep Valet
                  </span>
                  <span className="material-symbols-outlined text-[#006a3b] text-[26px]">
                    local_shipping
                  </span>
                </div>

                {/* Van Scene */}
                <div className="rounded-xl overflow-hidden h-36 bg-gradient-to-tr from-[#196c3b] to-emerald-900 text-white p-4 flex flex-col justify-between mb-4 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#9af6b8] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">electric_bolt</span>
                      Zero-emission fleet
                    </span>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">Electric Van #04</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Pune District Dispatch</h4>
                    <p className="text-[11px] text-white/80">
                      Doorstep collection with tamper-evident seal bags.
                    </p>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#121c2a]">Schedule E-Waste Pickup</h3>
                <p className="text-xs text-[#535f58] mt-1 leading-relaxed">
                  We provide free doorstep collection from your registered location. Certified technicians handle cataloging and secure data wiping.
                </p>

                <div className="mt-4 space-y-2 text-xs text-[#535f58]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#196c3b] text-[18px]">done</span>
                    <span>Includes tamper-evident electronic receipt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#196c3b] text-[18px]">done</span>
                    <span>Immediate 20 EcoPoints bonus per run</span>
                  </div>
                </div>

                <button
                  onClick={() => setPickupModalOpen(true)}
                  className="mt-5 w-full py-2.5 px-4 rounded-xl bg-[#006a3b] hover:bg-[#196c3b] text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  <span>Request Pickup</span>
                </button>
              </div>

              {/* Certified Drop-off Partner Card */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#121c2a]">Nearby Drop-off Partner</h3>
                  <span className="text-xs font-bold text-[#196c3b] bg-[#a3f5b6]/40 px-2 py-0.5 rounded-full">
                    1.8 km away
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-[#121c2a]">
                    Green Recycling Center - Kothrud
                  </div>
                  <p className="text-xs text-[#535f58]">
                    Plot 14, Paud Road, Kothrud, Pune 411038
                  </p>
                </div>

                <div className="bg-[#eff4ff] p-3 rounded-xl space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#535f58]">Hours:</span>
                    <span className="font-bold text-[#121c2a]">09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#535f58]">Contact:</span>
                    <span className="font-semibold text-[#121c2a]">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-between text-[#196c3b] font-bold pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">lock_open</span> Open today
                    </span>
                    <span className="text-[#535f58] font-normal">Kiosk Self-Scan OK</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#eff4ff] text-[#121c2a] hover:bg-[#dee9fc] transition-colors text-xs font-bold flex items-center justify-center gap-1 text-center"
                  >
                    <span className="material-symbols-outlined text-[16px]">directions</span>
                    <span>Navigate</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#a3f5b6]/60 text-[#196c3b] hover:bg-[#a3f5b6] transition-colors text-xs font-bold flex items-center justify-center gap-1 text-center"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>Call Center</span>
                  </a>
                </div>
              </div>

              {/* Safe Handling Tip Banner */}
              <div className="p-4 rounded-2xl bg-[#eff4ff] border border-slate-200/80 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#006a3b] text-[22px] mt-0.5">
                  tips_and_updates
                </span>
                <div>
                  <div className="text-xs font-bold text-[#121c2a]">Battery Safety Tip</div>
                  <p className="text-xs text-[#535f58] mt-0.5 leading-relaxed">
                    Tape loose terminals with non-conductive electrical tape before collection to prevent short-circuits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Pickup Modal */}
      <PickupModal
        isOpen={pickupModalOpen}
        onClose={() => setPickupModalOpen(false)}
      />
    </div>
  );
}
