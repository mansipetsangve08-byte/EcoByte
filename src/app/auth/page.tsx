"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState<{ email?: string; password?: string }>({});

  // Register form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regAddress, setRegAddress] = useState("");
  const [regCity, setRegCity] = useState("Pune");
  const [regPincode, setRegPincode] = useState("411038");
  const [regPass, setRegPass] = useState("");
  const [regConfirmPass, setRegConfirmPass] = useState("");
  const [showRegPass, setShowRegPass] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [regErrors, setRegErrors] = useState<{ [key: string]: string }>({});

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { email?: string; password?: string } = {};

    if (!loginEmail || !loginEmail.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }
    if (!loginPassword || loginPassword.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      showToast("Authentication successful! Redirecting to dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!regName.trim()) errors.name = "Please provide your full legal name.";
    if (!regEmail.includes("@")) errors.email = "Enter a valid email address.";
    if (!regPhone.trim()) errors.phone = "Valid phone number required for dispatch.";
    if (!regAddress.trim()) errors.address = "Address required for collector routing.";
    if (!regCity.trim()) errors.city = "Specify your city.";
    if (!regPincode.trim()) errors.pincode = "Enter valid postal code.";
    if (regPass.length < 6) errors.pass = "Password must be at least 6 characters.";
    if (regPass !== regConfirmPass) errors.confirmPass = "Passwords do not match.";
    if (!agreeTerms) errors.terms = "You must agree with terms to continue.";

    setRegErrors(errors);

    if (Object.keys(errors).length === 0) {
      showToast("Account created successfully! Redirecting...");
      setTimeout(() => {
        router.push(`/auth/success?email=${encodeURIComponent(regEmail)}`);
      }, 1000);
    }
  };

  const passwordsMatch = regPass.length > 0 && regPass === regConfirmPass;

  return (
    <main className="w-full min-h-screen bg-[#f8f9ff] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#a3f5b6]/35 blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-[#9af6b8]/25 blur-3xl pointer-events-none -z-10" />

      {/* Main Auth Card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 transition-all duration-300 border border-slate-100 relative">
        {/* Brand header */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link href="/" className="inline-block mb-3 hover:opacity-90">
            <Logo size="lg" />
          </Link>
          <div className="inline-flex items-center gap-1.5 bg-[#eff4ff] px-3 py-1 rounded-full text-xs font-semibold text-[#006a3b] border border-[#becabe]/40 shadow-xs">
            <span
              className="material-symbols-outlined text-[16px] text-[#006a3b]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <span>Verified Circular Platform</span>
          </div>
        </div>

        {/* Tab switch */}
        <div className="w-full bg-[#eff4ff] p-1.5 rounded-2xl flex mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "login"
                ? "bg-white text-[#006a3b] shadow-sm"
                : "text-[#535f58] hover:text-[#121c2a]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">lock_open</span>
            <span>Login</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              activeTab === "register"
                ? "bg-white text-[#006a3b] shadow-sm"
                : "text-[#535f58] hover:text-[#121c2a]"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            <span>Register</span>
          </button>
        </div>

        {/* Tab 1: LOGIN */}
        {activeTab === "login" && (
          <div className="animate-fadeIn">
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-2xl font-extrabold text-[#121c2a] mb-1">Welcome Back!</h2>
              <p className="text-sm text-[#535f58]">
                Login to schedule pickups, track requests, and check your EcoPoints balance.
              </p>
            </div>

            {/* Quick stats badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#eff4ff] p-3 rounded-2xl flex items-center gap-3 border border-slate-200/60">
                <div className="w-9 h-9 rounded-xl bg-[#a3f5b6] flex items-center justify-center text-[#00210f] shrink-0">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#006a3b] leading-tight">2,450</div>
                  <div className="text-[11px] text-[#535f58]">Avg. EcoPoints earned</div>
                </div>
              </div>

              <div className="bg-[#eff4ff] p-3 rounded-2xl flex items-center gap-3 border border-slate-200/60">
                <div className="w-9 h-9 rounded-xl bg-[#a3f5b6] flex items-center justify-center text-[#00210f] shrink-0">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#006a3b] leading-tight">48 Hrs</div>
                  <div className="text-[11px] text-[#535f58]">Free Doorstep Pickup</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                    mail
                  </span>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="mansi.r@company.com"
                    className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20 transition-all"
                  />
                </div>
                {loginErrors.email && (
                  <p className="text-xs text-[#ba1a1a] mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {loginErrors.email}
                  </p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-[#121c2a]">Password</label>
                  <a href="#" className="text-xs font-semibold text-[#006a3b] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                    lock
                  </span>
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-11 pl-10 pr-10 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3 text-[#6f7a70] hover:text-[#121c2a]"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showLoginPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                {loginErrors.password && (
                  <p className="text-xs text-[#ba1a1a] mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    {loginErrors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded text-[#006a3b] accent-[#006a3b]"
                  />
                  <span className="text-xs text-[#535f58]">Remember this device</span>
                </label>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#196c3b] bg-[#eff4ff] px-2 py-0.5 rounded-full border border-slate-200">
                  <span className="material-symbols-outlined text-[14px]">shield</span>
                  256-bit AES
                </span>
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#006a3b] hover:bg-[#196c3b] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Login to Account</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <p className="text-center text-xs text-[#535f58] pt-2">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("register")}
                  className="text-[#006a3b] font-bold hover:underline"
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        )}

        {/* Tab 2: REGISTER */}
        {activeTab === "register" && (
          <div className="animate-fadeIn">
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-2xl font-extrabold text-[#121c2a] mb-1">Join the Movement</h2>
              <p className="text-sm text-[#535f58]">
                Register for direct recycling pickups, verified green tags, and certificates.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Full Name
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      person
                    </span>
                    <input
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      placeholder="Mansi R."
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.name && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      mail
                    </span>
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="mansi.r@gmail.com"
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.email && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      call
                    </span>
                    <input
                      type="tel"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.phone && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Pickup Address
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      home_pin
                    </span>
                    <input
                      type="text"
                      value={regAddress}
                      onChange={(e) => setRegAddress(e.target.value)}
                      placeholder="Building, Street, Suite"
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.address && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">City</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      location_city
                    </span>
                    <input
                      type="text"
                      value={regCity}
                      onChange={(e) => setRegCity(e.target.value)}
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.city && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Pincode / Zip Code
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      pin
                    </span>
                    <input
                      type="text"
                      value={regPincode}
                      onChange={(e) => setRegPincode(e.target.value)}
                      className="w-full h-11 pl-10 pr-3 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.pincode && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.pincode}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      key
                    </span>
                    <input
                      type={showRegPass ? "text" : "password"}
                      value={regPass}
                      onChange={(e) => setRegPass(e.target.value)}
                      placeholder="Create password"
                      className="w-full h-11 pl-10 pr-10 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowRegPass(!showRegPass)}
                      className="absolute right-3 text-[#6f7a70] hover:text-[#121c2a]"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showRegPass ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  {regErrors.pass && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.pass}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#121c2a] mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#6f7a70] text-[20px] pointer-events-none">
                      lock_reset
                    </span>
                    <input
                      type={showRegPass ? "text" : "password"}
                      value={regConfirmPass}
                      onChange={(e) => setRegConfirmPass(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full h-11 pl-10 pr-10 bg-white text-[#121c2a] text-sm rounded-xl border border-slate-200 outline-none focus:border-[#006a3b] focus:ring-2 focus:ring-[#006a3b]/20"
                    />
                  </div>
                  {regErrors.confirmPass && (
                    <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.confirmPass}</p>
                  )}
                </div>
              </div>

              {/* Password match indicator */}
              {regConfirmPass.length > 0 && (
                <div
                  className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border ${
                    passwordsMatch
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {passwordsMatch ? "check_circle" : "cancel"}
                  </span>
                  <span>{passwordsMatch ? "Passwords match" : "Passwords do not match"}</span>
                </div>
              )}

              {/* Terms checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#006a3b] accent-[#006a3b]"
                  />
                  <span className="text-xs text-[#535f58] leading-relaxed">
                    I agree to the <span className="text-[#006a3b] font-semibold underline">environmental terms</span>, hazardous material segregation guidelines, and verified <span className="text-[#006a3b] font-semibold underline">pickup policies</span>.
                  </span>
                </label>
                {regErrors.terms && (
                  <p className="text-xs text-[#ba1a1a] mt-1">{regErrors.terms}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-[#006a3b] hover:bg-[#196c3b] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Create My Account</span>
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </button>

              <p className="text-center text-xs text-[#535f58] pt-2">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-[#006a3b] font-bold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        )}

        {/* Security / Compliance Badges footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-[#eff4ff] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-1.5 text-xs text-[#121c2a] font-semibold">
            <span className="material-symbols-outlined text-[#196c3b] text-[18px]">verified_user</span>
            <span>SSL Encrypted Portal</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#121c2a] font-semibold">
            <span className="material-symbols-outlined text-[#196c3b] text-[18px]">workspace_premium</span>
            <span>ISO 14001:2015</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#121c2a] font-semibold">
            <span className="material-symbols-outlined text-[#196c3b] text-[18px]">task_alt</span>
            <span>R2 Certified</span>
          </div>
        </div>
      </div>

      {/* Toast popup */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#121c2a] text-white px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 z-50 text-xs font-semibold animate-fadeIn">
          <span className="material-symbols-outlined text-[#9af6b8] text-[18px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}
