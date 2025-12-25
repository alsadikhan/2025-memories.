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
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block mb-4"
        >
          <Heart className="w-12 h-12 text-primary fill-primary" />
        </motion.div>
        
        <h1 className="text-4xl font-heading mb-2">For My Baby</h1>
        <p className="text-muted-foreground mb-6">Enter the magic word to unlock your surprise.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Magic word..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-center text-lg bg-white/50 border-pink-200 focus:border-primary focus:ring-primary"
            autoFocus
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full text-lg h-12">
            Unlock My Heart
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
