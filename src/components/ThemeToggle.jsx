import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDarkMode, setIsDarkMode }) {
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            const nextTheme = !prev;
            if (nextTheme) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return nextTheme;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle Theme"
        >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
    );
}