import { BrowserRouter, Routes, Route } from "react-router-dom";
import TradingPage from "@/pages/TradingPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#00050D] font-sans antialiased text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/trade" element={<TradingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
