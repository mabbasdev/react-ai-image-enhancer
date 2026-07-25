import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";
import ImagePreview from "./components/ImagePreview";
import { enhancedImageAPI } from "./utils/enhancedImageAPI";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to sleek dark mode
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const UploadImageHandler = async (file) => {
    // Handling string sample URLs or File objects
    const imageUrl = typeof file === "string" ? file : URL.createObjectURL(file);
    setUploadImage(imageUrl);
    setLoading(true);

    // Call the API to enhance the image
    try {
      // IMPROVEMENT SUGGESTION: If file is a sample URL string, convert to Blob/File before sending to API if needed.
      const enhancedImageURL = await enhancedImageAPI(file);
      if (enhancedImageURL?.image) {
        setEnhancedImage(enhancedImageURL.image);
      }
      setIsProcessing(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
      setLoading(false);
    }
  };

  const onEnhanceHandler = () => {
    console.log("Submit to enhance");
    setIsProcessing(true);
  };

  // Reset Handler
  const handleReset = () => {
    setUploadImage(null);
    setEnhancedImage(null);
    setIsProcessing(false);
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between font-sans transition-colors duration-300 ${isDarkMode
          ? "dark bg-[#060c08] text-emerald-50/90" // Deep Greenish Black Dark Theme
          : "bg-[#f4f7f5] text-emerald-950"       // Mint-tinted Soft Light Theme
        }`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center gap-8">
        {/* Conditional Layout for cleaner UX */}
        {!uploadImage ? (
          <ImageUpload UploadImageHandler={UploadImageHandler} />
        ) : (
          <ImagePreview
            loading={loading}
            uploadImage={uploadImage}
            enhancedImage={enhancedImage}
            onEnhanceHandler={onEnhanceHandler}
            isProcessing={isProcessing}
            onReset={handleReset}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}