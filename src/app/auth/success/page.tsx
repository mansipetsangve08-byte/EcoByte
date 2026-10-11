"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Logo from "@/components/Logo";

function RegistrationSuccessContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const displayEmail = emailParam || "mansi.r****@gmail.com";

  const [resendCountdown, setResendCountdown] = useState(0);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  const handleResend = () => {
    if (resendCountdown > 0) return;
    setResendCountdown(45);
    setResendStatus("Verification email sent! Check your inbox.");
    setTimeout(() => setResendStatus(null), 4000);
  };

  return (
    <main className="w-full min-h-screen bg-[#f8f9ff] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Ambient Celebration Halo Orbs */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[#a3f5b6]/35 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#dee9fc]/70 blur-3xl pointer-events-none" />

      {/* Floating Eco Accents */}
      <div className="absolute top-8 left-12 text-[#006a3b]/30 -rotate-12 pointer-events-none select-none hidden sm:block">
        <span className="material-symbols-outlined text-[36px]">eco</span>
      </div>
      <div className="absolute top-16 right-16 text-[#a3f5b6] rotate-45 pointer-events-none select-none hidden sm:block">
        <span className="material-symbols-outlined text-[32px]">verified</span>
      </div>
      <div className="absolute bottom-16 left-12 text-[#7ed99e]/40 rotate-12 pointer-events-none select-none hidden sm:block">
        <span className="material-symbols-outlined text-[40px]">recycling</span>
      </div>
      <div className="absolute bottom-24 right-16 text-[#006a3b]/25 -rotate-45 pointer-events-none select-none hidden sm:block">
        <span className="material-symbols-outlined text-[36px]">energy_savings_leaf</span>
      </div>

      {/* Main Success Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col items-center text-center border border-slate-100">
        {/* Brand Header */}
        <div className="mb-6">
          <Link href="/" className="hover:opacity-90">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Hero Success Avatar Double-Ring Indicator */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#a3f5b6]/40 flex items-center justify-center animate-pulse">
            <div className="w-16 h-16 rounded-full bg-[#006a3b] flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span
                className="material-symbols-outlined text-[36px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check
              </span>
            </div>
          </div>
        </div>

        {/* Celebration Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#a3f5b6]/50 text-[#196c3b] rounded-full mb-3 text-xs font-bold border border-[#a3f5b6]">
          <span className="material-symbols-outlined text-[16px]">celebration</span>
          <span>Registration Completed!</span>
        </div>

        {/* Primary Heading & Narrative */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#121c2a] mb-2">
          Account Created Successfully!
        </h1>
        <p className="text-xs sm:text-sm text-[#535f58] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you for joining our certified mission for responsible electronics lifecycle recycling and a sustainable circular planet.
        </p>

        {/* Verification Notice Alert Box */}
        <div className="w-full bg-[#eff4ff] rounded-2xl p-5 text-left mb-6 flex flex-col gap-3 border border-slate-200/70">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#006a3b] shrink-0 mt-0.5 shadow-xs">
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mark_email_read
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs sm:text-sm font-bold text-[#121c2a]">
                  Verification Email Dispatched
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#a3f5b6]/60 text-[#196c3b]">
                  Action Required
                </span>
              </div>
              <p className="text-xs text-[#3f4941] leading-relaxed">
                We&apos;ve sent an activation link to{" "}
                <span className="font-bold text-[#121c2a]">{displayEmail}</span>. Please check your inbox or spam folder within 24 hours to confirm your email.
              </p>
            </div>
          </div>

          {/* Micro Interactivity: Resend Trigger */}
          <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-200/60 text-xs gap-2">
            <span className="text-[#6f7a70]">Didn&apos;t receive the link?</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResend}
                disabled={resendCountdown > 0}
                className={`font-semibold flex items-center gap-1 transition-colors ${
                  resendCountdown > 0
                    ? "text-slate-400 cursor-not-allowed"
                    : "text-[#006a3b] hover:underline"
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">refresh</span>
                <span>
                  {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : "Resend link"}
                </span>
              </button>
            </div>
          </div>
          {resendStatus && (
            <p className="text-[11px] text-[#006a3b] font-medium">{resendStatus}</p>
          )}
        </div>

        {/* Action Button Group */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/dashboard"
            className="w-full sm:flex-1 h-12 rounded-xl bg-[#006a3b] hover:bg-[#196c3b] active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all duration-200"
          >
            <span>Go to Dashboard</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            href="/auth"
            className="w-full sm:flex-1 h-12 rounded-xl bg-[#eff4ff] hover:bg-[#dee9fc] text-[#121c2a] font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-200 border border-slate-200/70"
          >
            <span className="material-symbols-outlined text-[18px]">lock_open</span>
            <span>Return to Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function RegistrationSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9ff]">
          <div className="w-8 h-8 border-4 border-[#006a3b] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <RegistrationSuccessContent />
    </Suspense>
  );
}
