import React from "react";
import { Upload, Image as ImageIcon, Sparkles } from "lucide-react";

export default function ImageUpload(props) {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.UploadImageHandler(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 py-6">

      {/* Hero / Heading */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Next-Gen AI Image Processing</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-emerald-950 dark:text-emerald-50">
          Transform & Enhance Your Images
        </h1>

        <p className="text-sm sm:text-base text-emerald-800/70 dark:text-emerald-200/60 max-w-md mx-auto leading-relaxed">
          Upscale resolution, remove compression artifacts, and restore fine details in seconds.
        </p>
      </div>

      {/* Dropzone Card */}
      <div className="w-full border-2 border-dashed border-emerald-900/20 dark:border-emerald-500/20 hover:border-emerald-500 dark:hover:border-emerald-400 bg-white/80 dark:bg-[#0a120c]/60 rounded-3xl p-8 sm:p-12 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group relative shadow-lg shadow-emerald-950/5 hover:shadow-emerald-500/10">

        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={ShowImageHandler}
        />

        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/50 dark:border-emerald-500/20 group-hover:scale-110 transition-transform mb-4">
          <Upload className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
        </div>

        <h3 className="font-semibold text-base sm:text-lg text-emerald-950 dark:text-emerald-100 tracking-tight">
          Drag and drop your image here
        </h3>

        <p className="text-xs sm:text-sm text-emerald-800/60 dark:text-emerald-300/50 mt-1">
          or click anywhere to browse files from your device
        </p>

        <div className="flex items-center gap-2 mt-6 text-[11px] text-emerald-800/50 dark:text-emerald-400/50 font-mono">
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/40 dark:border-emerald-500/20">PNG</span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/40 dark:border-emerald-500/20">JPG</span>
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/40 dark:border-emerald-500/20">WEBP</span>
          <span>• Max 10MB</span>
        </div>
      </div>

      {/* Preset bar */}
      {/* <div className="w-full flex items-center justify-between px-2 text-xs text-emerald-800/60 dark:text-emerald-300/60">
        <span className="flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5" />
          No image handy?
        </span>

        <button
          type="button"
          onClick={() => {
            props.UploadImageHandler("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
          }}
          className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium hover:underline cursor-pointer z-20"
        >
          <Sparkles className="w-3 h-3" />
          Try sample portrait image
        </button>
      </div> */}

    </div>
  );
}