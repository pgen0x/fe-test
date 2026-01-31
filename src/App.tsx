import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TradingPage from "@/pages/TradingPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import DepositList from "./pages/admin/DepositList";
import WithdrawList from "./pages/admin/WithdrawList";
import MemberList from "./pages/admin/MemberList";
import ProtectedRoute from "./components/ProtectedRoute";
import ComingSoon from "./pages/admin/ComingSoon";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-[#00050D] font-sans antialiased text-white">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/trade" element={<TradingPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="deposit" element={<DepositList />} />
              <Route path="withdraw" element={<WithdrawList />} />
              <Route path="member" element={<MemberList />} />
              <Route path="kyc" element={<ComingSoon />} />
              <Route path="reset-2fa" element={<ComingSoon />} />
              <Route path="report" element={<ComingSoon />} />
              <Route path="setting" element={<ComingSoon />} />
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
