"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Sparkles,
  BookHeart,
  FlaskConical,
  Brain,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

const navItems = [
  { href: "/care", label: "CARE", icon: Sparkles },
  { href: "/playbooks", label: "Playbooks", icon: BookHeart },
  { href: "/practice", label: "Practice", icon: FlaskConical },
  { href: "/quiz", label: "Quiz", icon: Brain },
  { href: "/safety", label: "Safety", icon: ShieldCheck },
  { href: "/facilitators", label: "Facilitators", icon: HandHeart },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-500 via-violet-500 to-amber-400 rounded-xl flex items-center justify-center shadow-sm">
              <Sparkles size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                AI, with CARE
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                Best Practice
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-rose-50 text-rose-700"
                      : "text-slate-600 hover:bg-rose-50 hover:text-rose-700"
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <nav className="flex lg:hidden items-center gap-0.5">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  className={`p-2 rounded-full transition-all ${
                    isActive
                      ? "bg-rose-100 text-rose-700"
                      : "text-slate-500 hover:bg-rose-50"
                  }`}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
