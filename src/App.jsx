import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";
import ImagePreview from "./components/ImagePreview";
import { enhancedImageAPI } from "./utils/enhancedImageAPI";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [uploadImage, setUploadImage] = useState(null)
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [isProcessing, setIsProcessing] = useState(false)

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file))
    setLoading(true)
    // console.log(URL.createObjectURL(file));

    // Call the Api to enhance the image
    try {
      const enhancedImageURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedImageURL.image)
      setIsProcessing(false)
    } catch (error) {
      console.log(error)
      // alert("Error occured while enhancing the image")
    }

  }
  // console.log(isProcessing);
  const onEnhanceHandler = () => {
    console.log("Submit to enhance");
    setIsProcessing(true)

  }

  // console.log(isProcessing);

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans ${isDarkMode ? "dark bg-neutral-950 text-neutral-50" : "bg-neutral-50 text-neutral-900"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Workspace Placeholder */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col items-center justify-center">
        <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePreview
          loading={loading}
          uploadImage={uploadImage}
          enhancedImage={enhancedImage}
          onEnhanceHandler={onEnhanceHandler}
          isProcessing={isProcessing}
        />
      </main>

      <Footer />
    </div>
  );
}