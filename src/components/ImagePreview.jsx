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
  onEnhanceHandler
}) {

  // const [checkUploaded, setCheckUploaded] = useState(false)
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 py-4">

      {/* Top Bar / Controls */}
      {uploadImage ? (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <ImageIcon className="w-4 h-4" />
            <span>Image Loaded & Ready</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onReset}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Upload New
            </button>

            <button
              onClick={uploadImage ? onEnhanceHandler : () => {
                console.log("Select Image First")
              }}
              disabled={isProcessing}
              className="flex-1 sm:flex-none cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 disabled:opacity-50 transition-colors shadow-sm"
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

      ) : (null)}

      {/* 2-Column Comparison Viewport */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Column 1: Original Image */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Original Image
            </span>
            <span className="text-[11px] font-mono text-neutral-400">Source</span>
          </div>

          <div className="relative w-full h-[400px] sm:h-[480px] bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center p-4">
            {uploadImage ? (
              <img
                src={typeof uploadImage === "string" ? uploadImage : URL.createObjectURL(uploadImage)}
                alt="Original Upload"
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            ) : (
              <p className="text-xs text-neutral-400">No original image</p>
            )}
          </div>
        </div>

        {/* Column 2: Enhanced Image (PicWish Output) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
              Enhanced Result
              <Sparkles className="w-3 h-3 text-neutral-900 dark:text-neutral-100" />
            </span>
            {enhancedImage && (
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                PicWish Processed
              </span>
            )}
          </div>

          <div className="relative w-full h-[400px] sm:h-[480px] bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4">

            {/* Loading State Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 text-neutral-900 dark:text-neutral-100 animate-spin" />
                <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
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
                  className="max-h-full max-w-full object-contain rounded-lg"
                />

                {/* Floating Download Button */}
                <a
                  href={enhancedImage}
                  download="enhanced-image.png"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-xs font-medium shadow-md hover:scale-105 transition-transform"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download 4K
                </a>
              </div>
            ) : (
              <div className="text-center space-y-2 p-6">
                <div className="p-3 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 inline-flex">
                  <ArrowRight className="w-5 h-5 text-neutral-400" />
                </div>
                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  Ready to Enhance
                </p>
                <p className="text-[11px] text-neutral-400 max-w-xs mx-auto">
                  Click the "Enhance Image" button to process this photo through the PicWish AI model.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>

    </div >
  );
}