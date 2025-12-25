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
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-md w-full border border-white/50 text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="inline-block mb-4"
        >
          <Heart className="w-16 h-16 text-primary fill-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
        </motion.div>
        
        <h1 className="text-5xl font-heading mb-2 bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">Hey Beautiful</h1>
        <p className="text-muted-foreground mb-8 italic">I have a little something for you...</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <Input
              type="text"
              placeholder="The magic word is..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center text-xl bg-white/50 border-pink-200 focus:border-primary focus:ring-4 focus:ring-primary/20 rounded-2xl h-14 transition-all"
              autoFocus
            />
            <motion.div 
              className="absolute -right-2 -top-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-pink-600 hover:to-primary text-white rounded-2xl text-xl h-14 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-95">
            Unlock My Love
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
