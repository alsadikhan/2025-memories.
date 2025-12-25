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
    <div className="min-h-screen font-sans bg-gradient-to-br from-[#fff0f3] via-[#fff5f7] to-[#ffe5ec] text-gray-900 overflow-hidden relative">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {viewState === "LOGIN" ? (
          <motion.div
            key="login"
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Login onLogin={() => setViewState("DASHBOARD")} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <Dashboard />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Toaster />
    </div>
  );
}

export default App;
