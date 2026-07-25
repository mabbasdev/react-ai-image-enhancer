import React from "react";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isDarkMode, setIsDarkMode }) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md px-4 sm:px-8 py-3.5 transition-colors">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Brand / Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-base tracking-tight text-neutral-900 dark:text-neutral-100">
                        EnhanceAI
                    </span>
                </div>

                {/* Right Navigation & Controls */}
                <div className="flex items-center gap-3">
                    <a
                        href="#features"
                        className="hidden sm:inline-block text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    >
                        Features
                    </a>

                    <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>

            </div>
        </header>
    );
}