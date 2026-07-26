import React from "react";
import {
  Sparkles,
  Download,
  RefreshCw,
  Image as ImageIcon,
  Loader2,
  ArrowRight
} from "lucide-react";

export default function ImagePreview({
  uploadImage,
  enhancedImage,
  isProcessing,
  onReset,
  onEnhance
}) {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 py-2">

      {/* Top Action Bar */}
      {uploadImage && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/80 dark:bg-[#0a120c]/80 border border-emerald-900/10 dark:border-emerald-500/20 p-4 rounded-2xl shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 dark:text-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <ImageIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Image Loaded & Ready</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onReset}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-emerald-900/10 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/40 text-xs font-medium text-emerald-900 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Upload New
            </button>

            <button
              onClick={onEnhance}
              disabled={isProcessing}
              className="flex-1 sm:flex-none cursor-pointer inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-600 text-white dark:bg-emerald-500 dark:text-emerald-950 text-xs font-bold hover:bg-emerald-700 dark:hover:bg-emerald-400 disabled:opacity-50 transition-all shadow-md shadow-emerald-600/20"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Enhancing...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Enhance Image
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 2-Column Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Column 1: Original Image */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60 uppercase tracking-wider">
              Original Image
            </span>
            <span className="text-[11px] font-mono text-emerald-800/40 dark:text-emerald-500/40">Source</span>
          </div>

          <div className="relative w-full h-[380px] sm:h-[460px] bg-white/50 dark:bg-[#0a120c]/60 border border-emerald-900/10 dark:border-emerald-500/15 rounded-3xl overflow-hidden flex items-center justify-center p-4 shadow-sm">
            {uploadImage ? (
              <img
                src={uploadImage}
                alt="Original Upload"
                className="max-h-full max-w-full object-contain rounded-xl shadow-sm"
              />
            ) : (
              <p className="text-xs text-emerald-800/40 dark:text-emerald-500/40">No original image</p>
            )}
          </div>
        </div>

        {/* Column 2: Enhanced Result */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-emerald-800/60 dark:text-emerald-400/60 uppercase tracking-wider flex items-center gap-1.5">
              Enhanced Result
              <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            </span>
            {enhancedImage && (
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                Image Processed
              </span>
            )}
          </div>

          <div className="relative w-full h-[380px] sm:h-[460px] bg-white/50 dark:bg-[#0a120c]/60 border border-emerald-900/10 dark:border-emerald-500/15 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-4 shadow-sm">

            {/* Loading Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 bg-white/90 dark:bg-[#060c08]/90 backdrop-blur-md z-10 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-spin" />
                <p className="text-xs font-semibold text-emerald-950 dark:text-emerald-200">
                  Processing Your Image...
                </p>
              </div>
            )}

            {/* Enhanced Image Render or Placeholder */}
            {enhancedImage ? (
              <div className="relative w-full h-full flex items-center justify-center group">
                <img
                  src={enhancedImage}
                  alt="Enhanced Result"
                  className="max-h-full max-w-full object-contain rounded-xl"
                />

                <a
                  href={enhancedImage}
                  download="enhanced-image.png"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950 text-xs font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download 4K
                </a>
              </div>
            ) : (
              <div className="text-center space-y-2 p-6">
                <div className="p-3.5 rounded-2xl bg-emerald-100/50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-500/20 inline-flex">
                  <ArrowRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-xs font-semibold text-emerald-950 dark:text-emerald-200">
                  Ready to Enhance
                </p>
                <p className="text-[11px] text-emerald-800/60 dark:text-emerald-400/60 max-w-xs mx-auto">
                  Click the "Enhance Image" button to process this photo through the PicWish AI model.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}