import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "princess") {
      onLogin();
    } else {
      toast({
        title: "Not quite right...",
        description: "Hint: What do I always call you? (lowercase)",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4 overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-300/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        className="bg-white/40 backdrop-blur-2xl p-10 rounded-[3rem] shadow-[0_32px_64px_-15px_rgba(236,72,153,0.3)] max-w-md w-full border border-white/60 text-center relative z-20"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0],
            filter: ["drop-shadow(0 0 8px rgba(236,72,153,0.3))", "drop-shadow(0 0 20px rgba(236,72,153,0.6))", "drop-shadow(0 0 8px rgba(236,72,153,0.3))"]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <Heart className="w-20 h-20 text-primary fill-primary" />
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 text-2xl"
            >
              ✨
            </motion.div>
          </div>
        </motion.div>
        
        <h1 className="text-6xl font-heading mb-3 bg-gradient-to-br from-primary via-pink-500 to-rose-400 bg-clip-text text-transparent leading-tight">
          Welcome Home, <br/>My Queen
        </h1>
        <p className="text-muted-foreground mb-10 text-lg font-medium tracking-wide">A magical surprise awaits you inside...</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Magic word..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center text-2xl bg-white/40 border-white/50 focus:border-primary focus:ring-[12px] focus:ring-primary/10 rounded-[2rem] h-20 transition-all placeholder:text-pink-300 font-heading"
              autoFocus
            />
          </div>
          <Button type="submit" className="group w-full bg-gradient-to-r from-primary to-rose-500 hover:from-rose-600 hover:to-primary text-white rounded-[2rem] text-2xl h-20 shadow-2xl shadow-primary/40 transition-all hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3">
            <span>Enter My Heart</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          </Button>
        </form>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-sm text-primary/60 font-medium cursor-default"
        >
          Hint: p _ _ _ _ _ _ s
        </motion.p>
      </motion.div>
    </div>
  );
}
