import { Upload, Image as ImageIcon, Sparkles } from "lucide-react";

export default function ImageUpload(props) {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0]
    // console.log(e.target.files[0]);
    if (file) {
      props.UploadImageHandler(file)
    }

  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 py-6">

      {/* Hero / Heading Text Section */}
      <div className="text-center space-y-3">
        {/* Subtle Feature Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/60 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />
          <span>Next-Gen AI Image Processing</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Transform & Enhance Your Images
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
          Upscale resolution, remove compression artifacts, and restore fine details in seconds.
        </p>
      </div>

      {/* Dropzone Card */}
      <div className="w-full border-2 border-dashed border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900/50 rounded-2xl p-8 sm:p-12 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer group relative shadow-sm hover:shadow-md">

        {/* Hidden File Input for Native File Selection */}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={ShowImageHandler}
        />

        {/* Upload Icon Container */}
        <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:scale-105 transition-transform mb-4">
          <Upload className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
        </div>

        {/* Primary Text */}
        <h3 className="font-semibold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 tracking-tight">
          Drag and drop your image here
        </h3>

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          or click anywhere to browse files from your device
        </p>

        {/* Supported Format Tags */}
        <div className="flex items-center gap-2 mt-6 text-[11px] text-neutral-400 dark:text-neutral-500 font-mono">
          <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50">PNG</span>
          <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50">JPG</span>
          <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50">WEBP</span>
          <span>• Max 10MB</span>
        </div>

      </div>

      {/* Demo Preset Selector Bar */}
      <div className="w-full flex items-center justify-between px-2 text-xs text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5" />
          No image handy?
        </span>

        <button
          onClick={() => {
            if (onImageSelect) {
              onImageSelect("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
            }
          }}
          className="flex items-center gap-1 text-neutral-900 dark:text-neutral-100 font-medium hover:underline cursor-pointer"
        >
          <Sparkles className="w-3 h-3" />
          Try sample portrait image
        </button>
      </div>

    </div>
  );
}