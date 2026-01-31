import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login({ email, password });
      navigate("/admin");
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050B15]">
      <div className="w-full max-w-md p-8 bg-[#13213F]/40 rounded-2xl shadow-2xl border border-white/5">
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
          <p className="text-gray-400 mt-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#1A2332] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#1A2332] border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 rounded border-white/10 bg-[#1A2332] text-[#D57C17] focus:ring-0 focus:ring-offset-0"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-[#D57C17] hover:text-yellow-400 font-medium"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            variant="ghost"
            className="rounded-full btn-gradient-border px-8 text-white hover:opacity-80 transition-opacity w-full"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[#D57C17] font-medium hover:text-yellow-400"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
