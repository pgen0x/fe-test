import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthService } from "../services/auth.service";

interface AuthContextType {
  user: any;
  isLoading: boolean;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    try {
      const response = await AuthService.getMe();
      setUser(response.data);
    } catch (error) {
      console.error("Auth check failed:", error);
      AuthService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: any) => {
    const data = await AuthService.login(credentials);
    const token = data.data.token;
    localStorage.setItem("token", token);
    if (data.data.user) {
      localStorage.setItem("user", JSON.stringify(data.data.user));
      setUser(data.data.user);
    } else {
      // Fetch profile if login response doesn't include user details
      await checkAuth();
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
