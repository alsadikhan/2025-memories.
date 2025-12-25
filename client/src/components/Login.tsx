import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "princess") {
      triggerConfetti();
      setTimeout(onLogin, 1500);
    } else {
      toast({
        title: "Not quite right...",
        description: "Hint: What do I always call you? (lowercase)",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4 overflow-hidden bg-[#fff5f7]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-rose-100/50 rounded-full blur-3xl" 
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full max-w-md"
      >
        <div className="bg-white/60 backdrop-blur-3xl p-10 rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(236,72,153,0.2)] border border-white/80 text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-rose-400 shadow-lg shadow-primary/30 mb-8"
          >
            <Heart className="w-12 h-12 text-white fill-white" />
          </motion.div>
          
          <h1 className="text-5xl font-heading mb-4 text-gray-800">For My Love</h1>
          <p className="text-muted-foreground mb-10 font-medium">Please enter the secret word to see your surprise</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="The secret word..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-xl bg-white/80 border-pink-100 focus:border-primary focus:ring-primary/20 rounded-2xl h-16 transition-all shadow-sm font-heading"
                autoFocus
              />
              <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl text-xl h-16 shadow-xl shadow-primary/20 transition-all active:scale-95 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Unlock Surprise
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </motion.div>
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </form>
          
          <div className="mt-10 pt-8 border-t border-pink-50 flex justify-center gap-6">
            <div className="text-center">
              <div className="w-2 h-2 rounded-full bg-primary mx-auto mb-2 animate-bounce" />
              <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Made with Love</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
