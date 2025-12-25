import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Heart } from "lucide-react";

export default function LoveZone() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center w-full"
      >
        <h2 className="text-4xl md:text-5xl font-heading mb-6 text-primary">My Dearest Princess</h2>
        
        <Card className="bg-white/60 backdrop-blur-sm border-white/50 shadow-lg overflow-hidden">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I made this little corner of the internet just for you, to remind you how much you mean to me.
              Every day with you is a gift, and I wanted to capture some of our beautiful moments together.
            </p>

            {!isOpen ? (
              <Button 
                onClick={() => setIsOpen(true)}
                variant="outline" 
                className="group border-primary/20 hover:border-primary/50 hover:bg-pink-50 text-primary"
              >
                Read my heart
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            ) : (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left space-y-4 overflow-hidden"
              >
                <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent my-6" />
                
                <p>
                  From the moment we met, you've brought so much light into my life. Your smile is my favorite 
                  sight, and your laugh is my favorite sound.
                </p>
                <p>
                  Thank you for being my partner, my best friend, and my greatest adventure. I love you more 
                  than words can say—but I'll spend the rest of my life trying to show you.
                </p>
                <p>
                  Happy Anniversary, my love. Here's to us, and to many more years of creating memories together.
                </p>
                
                <div className="pt-6 flex justify-center">
                  <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
