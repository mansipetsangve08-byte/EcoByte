import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#dee9fc] mt-auto">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-[#535f58] max-w-sm leading-relaxed">
              Enterprise and domestic electronic waste recovery system. Zero-landfill verified material processing with certified defense-grade data sanitization.
            </p>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#121c2a] text-xs font-semibold flex items-center gap-1.5 border border-[#becabe]/50 shadow-xs">
                <span className="material-symbols-outlined text-[#196c3b] text-[16px]">verified</span>
                ISO 14001
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#121c2a] text-xs font-semibold flex items-center gap-1.5 border border-[#becabe]/50 shadow-xs">
                <span className="material-symbols-outlined text-[#196c3b] text-[16px]">verified</span>
                R2v3 Certified
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#121c2a] text-xs font-semibold flex items-center gap-1.5 border border-[#becabe]/50 shadow-xs">
                <span className="material-symbols-outlined text-[#196c3b] text-[16px]">verified</span>
                EPA Compliant
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#121c2a] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#535f58]">
              <li>
                <a href="#request-pickup" className="hover:text-[#006a3b] transition-colors">
                  Request a Pickup
                </a>
              </li>
              <li>
                <a href="#centers" className="hover:text-[#006a3b] transition-colors">
                  Collection Hubs Map
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#006a3b] transition-colors">
                  E-Waste Categories
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-[#006a3b] transition-colors">
                  User Dashboard
                </Link>
              </li>
              <li>
                <Link href="/auth" className="hover:text-[#006a3b] transition-colors">
                  Login & Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Materials & Process */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#121c2a] mb-4">
              Process & Standards
            </h4>
            <ul className="space-y-2.5 text-sm text-[#535f58]">
              <li className="hover:text-[#006a3b] cursor-pointer transition-colors">
                DoD 5220.22-M Sanitization
              </li>
              <li className="hover:text-[#006a3b] cursor-pointer transition-colors">
                Battery Thermal Neutralization
              </li>
              <li className="hover:text-[#006a3b] cursor-pointer transition-colors">
                Precious Metal Refining
              </li>
              <li className="hover:text-[#006a3b] cursor-pointer transition-colors">
                Compliance Verification
              </li>
              <li className="hover:text-[#006a3b] cursor-pointer transition-colors">
                Verifiable Green Certificates
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#121c2a] mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-[#535f58]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#006a3b]">call</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#006a3b]">mail</span>
                <span>dispatch@ecocycle.org</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#006a3b] mt-0.5">location_on</span>
                <span>Plot 14, Sustainability Way, Circularity Hub, Pune 411038</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Strip */}
        <div className="mt-12 pt-6 border-t border-[#dee9fc] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6f7a70]">
          <div>
            © 2026 EcoCycle Global Inc. Certified Responsible E-Waste Management & Materials Recovery.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#006a3b] transition-colors">Privacy Shield</a>
            <a href="#" className="hover:text-[#006a3b] transition-colors">Terms of Operations</a>
            <a href="#" className="hover:text-[#006a3b] transition-colors">R2 Auditing Records</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
