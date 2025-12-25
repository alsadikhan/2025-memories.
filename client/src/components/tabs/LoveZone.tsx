import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function LoveZone() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#ffffff']
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-heading mb-8 text-primary drop-shadow-sm">To My Only Princess</h2>
        </motion.div>
        
        <Card className="bg-white/70 backdrop-blur-md border-white/60 shadow-2xl overflow-hidden rounded-[2rem] border-2">
          <CardContent className="p-10 relative">
            <div className="absolute top-4 right-4 text-primary/20">
              <Heart className="w-20 h-20 fill-current" />
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 relative z-10 font-medium">
              Every single day with you feels like a dream I never want to wake up from. 
              You are my sunshine, my safe haven, and my favorite person in the entire universe.
            </p>

            {!isOpen ? (
              <Button 
                onClick={handleOpen}
                variant="outline" 
                className="group relative px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-white text-primary rounded-full text-lg transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Open My Heart
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            ) : (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-left space-y-6 overflow-hidden relative z-10"
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
                
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg italic"
                >
                  "From the moment we met, you've brought so much light into my life. Your smile is my favorite 
                  sight, and your laugh is my favorite sound."
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg"
                >
                  Thank you for being my partner, my best friend, and my greatest adventure. I love you more 
                  than words can say—but I'll spend the rest of my life trying to show you.
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-heading text-primary text-center pt-4"
                >
                  Happy Anniversary, my beautiful queen.
                </motion.p>
                
                <div className="pt-8 flex justify-center gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.4 
                      }}
                    >
                      <Heart className="w-6 h-6 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
