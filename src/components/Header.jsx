import React from "react";
import { Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isDarkMode, setIsDarkMode }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-emerald-900/20 dark:border-emerald-500/10 bg-white/70 dark:bg-[#060c08]/80 backdrop-blur-md px-4 sm:px-8 py-3.5 transition-colors">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Brand / Logo */}
                <div className="flex items-center gap-2.5 group cursor-pointer">
                    <div className="p-2 rounded-xl bg-emerald-600 text-white dark:bg-emerald-500/20 dark:text-emerald-400 dark:border dark:border-emerald-500/30 shadow-sm group-hover:scale-105 transition-transform">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-base tracking-tight text-emerald-950 dark:text-emerald-50">
                        Enhance<span className="text-emerald-600 dark:text-emerald-400">AI</span>
                    </span>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-4">
                    <a
                        href="#features"
                        className="hidden sm:inline-block text-xs font-medium text-emerald-800/70 dark:text-emerald-300/70 hover:text-emerald-950 dark:hover:text-emerald-100 transition-colors"
                    >
                        Features
                    </a>

                    <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>

            </div>
        </header>
    );
}