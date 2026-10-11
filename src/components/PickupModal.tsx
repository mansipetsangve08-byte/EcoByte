"use client";

import React, { useState } from "react";

interface PickupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PickupModal({ isOpen, onClose }: PickupModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: "Laptops & PCs",
    quantity: "1-2 items",
    wipeData: true,
    pickupDate: "",
    timeSlot: "Morning (09:00 AM - 01:00 PM)",
    address: "Flat 402, Green Meadows, Paud Road",
    city: "Pune",
    pincode: "411038",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep message visible for a moment
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#006a3b] to-[#196c3b] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">local_shipping</span>
            <h3 className="text-lg font-bold">Schedule Doorstep E-Waste Pickup</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006a3b] flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-800">
                Pickup Scheduled Successfully!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Order <span className="font-semibold text-[#006a3b]">#ECO-PICKUP-8924</span> has been created. A certified zero-emission collection technician will arrive on{" "}
                <span className="font-semibold text-slate-800">
                  {formData.pickupDate || "the selected date"}
                </span>{" "}
                during the {formData.timeSlot} window.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl text-left text-xs text-slate-600 space-y-1.5 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-slate-800">{formData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Data Sanitization:</span>
                  <span className="font-semibold text-emerald-700">
                    {formData.wipeData ? "DoD 5220.22-M Wipe Certificate Included" : "Standard Segregation"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Bonus EcoPoints:</span>
                  <span className="font-bold text-[#006a3b]">+20 EcoPoints added upon pickup</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#006a3b] hover:bg-[#196c3b] text-white font-semibold rounded-xl transition-all shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    E-Waste Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  >
                    <option>Mobile Phones & Tablets</option>
                    <option>Laptops & PCs</option>
                    <option>Batteries & Power Banks</option>
                    <option>Chargers & Cables</option>
                    <option>Accessories & Peripherals</option>
                    <option>Heavy Appliances & Monitors</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  >
                    <option>1 - 2 items (Small box)</option>
                    <option>3 - 5 items (Medium batch)</option>
                    <option>6 - 15 items (Large batch)</option>
                    <option>Enterprise Bulk Disposal (&gt;15 items)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    required
                    defaultValue="2026-10-06"
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  >
                    <option>Morning (09:00 AM - 01:00 PM)</option>
                    <option>Afternoon (01:00 PM - 05:00 PM)</option>
                    <option>Evening (05:00 PM - 08:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pickup Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street, Building, Apartment / Flat No."
                  className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Pincode
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#006a3b]"
                  />
                </div>
              </div>

              {/* Data Sanitization Checkbox */}
              <div className="p-3 bg-[#eff4ff] rounded-xl flex items-start gap-2.5 border border-[#becabe]/50">
                <input
                  type="checkbox"
                  id="modal-wipe"
                  checked={formData.wipeData}
                  onChange={(e) => setFormData({ ...formData, wipeData: e.target.checked })}
                  className="mt-0.5 rounded text-[#006a3b] focus:ring-0 accent-[#006a3b]"
                />
                <label htmlFor="modal-wipe" className="text-xs text-slate-700 cursor-pointer">
                  <span className="font-semibold text-slate-900 block">
                    Require DoD 5220.22-M Magnetic Data Destruction
                  </span>
                  Includes certificate of irreversible sanitization for HDDs, SSDs, & storage chips.
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#006a3b] hover:bg-[#196c3b] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5"
                >
                  <span>Confirm Free Pickup</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
