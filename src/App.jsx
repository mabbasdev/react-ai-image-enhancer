import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";
import ImagePreview from "./components/ImagePreview";
import { enhancedImageAPI } from "./utils/enhancedImageAPI";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Ref to track last API call timestamp for throttling
  const lastCallTimeRef = useRef(0);
  const THROTTLE_DELAY = 3000; // 3 seconds delay between API calls

  // STEP 1: Only load the image into local state/preview without calling the API
  const handleSelectImage = (file) => {
    setUploadFile(file);
    const imageUrl = typeof file === "string" ? file : URL.createObjectURL(file);
    setUploadImage(imageUrl);
    setEnhancedImage(null); // Reset previous enhancement result
  };

  // STEP 2: Trigger API enhancement explicitly on button click with Throttling
  const handleEnhance = async () => {
    if (!uploadFile || isProcessing) return;

    const now = Date.now();
    // Throttle check: Prevent calls if triggered within the cooldown window
    if (now - lastCallTimeRef.current < THROTTLE_DELAY) {
      console.warn("API call throttled. Please wait a moment before trying again.");
      return;
    }

    lastCallTimeRef.current = now; // Update throttle timestamp
    setIsProcessing(true);
    setLoading(true);

    try {
      const enhancedImageData = await enhancedImageAPI(uploadFile);
      if (enhancedImageData?.image) {
        setEnhancedImage(enhancedImageData.image);
      }
    } catch (error) {
      console.error("Error enhancing image:", error);
    } finally {
      setIsProcessing(false);
      setLoading(false);
    }
  };

  // Reset Handler
  const handleReset = () => {
    setUploadFile(null);
    setUploadImage(null);
    setEnhancedImage(null);
    setIsProcessing(false);
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between font-sans transition-colors duration-300 ${isDarkMode
          ? "dark bg-[#060c08] text-emerald-50/90"
          : "bg-[#f4f7f5] text-emerald-950"
        }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-8">
        {!uploadImage ? (
          <ImageUpload UploadImageHandler={handleSelectImage} />
        ) : (
          <ImagePreview
            loading={loading}
            uploadImage={uploadImage}
            enhancedImage={enhancedImage}
            isProcessing={isProcessing}
            onReset={handleReset}
            onEnhance={handleEnhance}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}