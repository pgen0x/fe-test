# FE Test

A premium, high-performance, and fully responsive cryptocurrency trading platform built with React, TypeScript, and Vite. Designed for speed, reliability, and a seamless user experience across all devices.

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useEffect, etc.)

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: version 20.19+ or 22.12+
- **Bun**: (Recommended) Fast JavaScript runtime

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd fe-test
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://api.yourdomain.com/api/v1
   ```

---

## 💻 Development

Start the development server with Hot Module Replacement (HMR):

```bash
bun run dev
```

---

## 🏗 Production Deployment

1. Build the project for production:

   ```bash
   # Specify your production API URL during build
   VITE_API_URL=https://api-bu.worgflow.com/api/v1 bun run build
   ```

2. The static files will be generated in the `dist/` directory.

3. Deploy using Nginx:
   ```bash
   sudo rm -rf /var/www/test-bu/*
   sudo cp -r dist/* /var/www/test-bu/
   ```

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Acknowledgments

- [TradingView](https://www.tradingview.com/) for the advanced charting library.
- [Shadcn UI](https://ui.shadcn.com/) for the component inspirations.
