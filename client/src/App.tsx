import { useState } from "react";
import { ViewState } from "./types";
import FloatingHearts from "@/components/FloatingHearts";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [viewState, setViewState] = useState<ViewState>("LOGIN");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen font-sans bg-gradient-to-br from-[#fff0f3] via-[#fff5f7] to-[#ffe5ec] text-gray-900 overflow-hidden relative"
    >
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {viewState === "LOGIN" ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", rotate: -5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Login onLogin={() => setViewState("DASHBOARD")} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", rotate: 5 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Toaster />
    </motion.div>
  );
}

export default App;
