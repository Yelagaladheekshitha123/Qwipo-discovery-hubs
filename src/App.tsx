import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./components/Cart";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pharmacy from "./pages/Pharmacy";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import FeatureDetail from "./components/FeatureDetail";

const RedirectToStart = () => {
  useEffect(() => {
    window.location.href = '/start.html';
  }, []);
  return null;
};

const RedirectToRegister = () => {
  useEffect(() => {
    window.location.href = '/register.html';
  }, []);
  return null;
};

const RedirectToSignIn = () => {
  useEffect(() => {
    window.location.href = '/signin.html';
  }, []);
  return null;
};

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/signin", "/", "/home"];
const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        {/* <Route path="/" element={<RedirectToStart />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/start" element={<RedirectToStart />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RedirectToRegister />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/features/:featureTitle" element={<FeatureDetail />} />
        {/* <Route path="/orders" element={<} */}
        {/* <Route path="/recomended" element={} */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Cart />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;