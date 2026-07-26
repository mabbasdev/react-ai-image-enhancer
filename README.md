# EnhanceAI ReactJS Image Processing Engine

EnhanceAI is a sleek, modern web application that leverages advanced AI capabilities to upscale, restore, and refine image resolution in seconds. Built with a responsive obsidian-green design system, it provides a high-performance workspace for instant image enhancement.

🚀 **[Live Demo](https://react-ai-image-enhancer-red.vercel.app/)** | 📦 **[GitHub Repository](https://github.com/mabbasdev/react-ai-image-enhancer)**

---

## ✨ Features

- **AI Image Upscaling**: Instantly enhance resolution and restore fine details using the PicWish AI model.
- **Dynamic Theme System**: Custom-crafted **Greenish-Black Obsidian** dark mode and mint-tinted light mode.
- **Interactive Dual-Preview**: Side-by-side comparative workspace with quick reset and direct 4K image downloads.
- **Zero Backend Overhead**: Client-side API orchestration with real-time polling updates.
- **Fully Responsive Layout**: Built with a mobile-first approach for seamless workflow across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Tools

- **Frontend Library**: [React.js](https://react.dev/)
- **Styling & Design System**: [Tailwind CSS](https://tailwindcss.com/)
- **Icon Suite**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **AI Processing Engine**: PicWish / TechHK Visual Scale API
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📸 Usage Guide

1. **Upload an Image**: Drag and drop your image file (`.png`, `.jpg`, `.webp`) into the dropzone or click to select from your device. Alternatively, click **"Try sample portrait image"**.
2. **Trigger Enhancement**: Click **Enhance Image** to send the image payload to the AI scaling pipeline.
3. **Download 4K Result**: Once processing completes, inspect the output in the comparative view and click **Download 4K**.

---

## ⚙️ Architecture Overview

```text
[ User Interface (React) ]
          │
          ├──> 1. Drag & Drop File Select (ImageUpload.jsx)
          │
          ├──> 2. Dispatch File Payload to API (enhancedImageAPI.js)
          │            │
          │            ├──> POST /api/tasks/visual/scale (Generates Task ID)
          │            └──> Poll GET /api/tasks/visual/scale/{taskId}
          │
          └──> 3. Render Comparative Side-by-Side View (ImagePreview.jsx)

```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://www.google.com/search?q=https://github.com/mabbasdev/react-ai-image-enhancer/issues).

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

### Built With ❤ By Muhammad Abbas
