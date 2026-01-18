"use client";

import { useState } from "react";
import type { Route } from "next";
import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";

import LeadTrackedLink from "@/components/LeadTrackedLink";

type NavItem = {
  href: Route;
  label: string;
  badge?: string;
  isHighlighted?: boolean;
};

type MainNavbarProps = {
  navItems: NavItem[];
  businessNameAr: string;
  businessNameEn: string;
  formattedPhone: string;
  phoneNumber: string;
};

export default function MainNavbar({
  navItems,
  businessNameAr,
  businessNameEn,
  formattedPhone,
  phoneNumber,
}: MainNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-kuwait-green/20 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-kuwait-green/10 text-kuwait-green">
              KS
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-kuwait-green">{businessNameAr}</span>
              <span className="text-xs text-kuwait-black/70" dir="ltr">
                {businessNameEn}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition ${
                  item.isHighlighted
                    ? "bg-gradient-to-l from-[#ffe08a] via-[#facc15] to-[#f59e0b] text-[#3b2f0c] shadow-[0_12px_30px_rgba(250,204,21,0.35)] hover:brightness-105"
                    : "text-kuwait-black/80 hover:text-kuwait-green"
                }`}
              >
                {item.label}
                {item.badge && !item.isHighlighted && (
                  <span className="rounded-full bg-kuwait-green/10 px-2 py-0.5 text-[10px] font-semibold text-kuwait-green">
                    {item.badge}
                  </span>
                )}
                {item.badge && item.isHighlighted && (
                  <span className="rounded-full bg-white/30 px-2 py-0.5 text-[10px] font-semibold text-[#3b2f0c]">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-kuwait-green/30 bg-white px-3 py-2 text-kuwait-green transition hover:border-kuwait-green/60 hover:bg-kuwait-green/10 md:hidden"
              aria-label="فتح القائمة"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
            <LeadTrackedLink
              href={`tel:${phoneNumber}`}
              className="header-call-cta flex items-center gap-2 rounded-full bg-kuwait-green px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-green-700"
              channel="phone"
              source="header-call"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">{formattedPhone}</span>
              <span className="md:hidden">اتصل الآن</span>
            </LeadTrackedLink>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#020617]/90 backdrop-blur-md" id="mobile-menu">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                KS
              </span>
              <span className="flex flex-col leading-tight text-white">
                <span className="text-base font-semibold">{businessNameAr}</span>
                <span className="text-xs text-white/60" dir="ltr">
                  {businessNameEn}
                </span>
              </span>
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="إغلاق القائمة"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-end gap-4 overflow-y-auto px-6 py-4 text-right text-lg text-white font-cairo">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full rounded-full border px-4 py-3 text-white/90 transition hover:text-white ${
                  item.isHighlighted
                    ? "border-[#facc15]/70 bg-gradient-to-l from-[#facc15]/20 via-[#f59e0b]/10 to-transparent"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
                onClick={closeMenu}
              >
                <span className="flex items-center justify-between gap-2">
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        item.isHighlighted ? "bg-white/20 text-white" : "bg-white/15 text-white/90"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <LeadTrackedLink
              href={`tel:${phoneNumber}`}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              channel="phone"
              source="header-call-mobile"
              onClick={closeMenu}
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              <span>{formattedPhone}</span>
            </LeadTrackedLink>
          </div>
        </div>
      )}
    </>
  );
}
