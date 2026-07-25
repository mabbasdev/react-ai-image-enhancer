import React from "react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-6 px-4 sm:px-8 transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">

                <p>© {new Date().getFullYear()} EnhanceAI. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    <span className="hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer transition-colors">
                        Privacy Policy
                    </span>
                    <span className="hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer transition-colors">
                        Terms of Service
                    </span>
                </div>

            </div>
        </footer>
    );
}