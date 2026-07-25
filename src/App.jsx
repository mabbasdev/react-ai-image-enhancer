import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageUpload from "./components/ImageUpload";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans ${isDarkMode ? "dark bg-neutral-950 text-neutral-50" : "bg-neutral-50 text-neutral-900"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Workspace Placeholder */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex items-center justify-center">
        <ImageUpload />
      </main>

      <Footer />
    </div>
  );
}