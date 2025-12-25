import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  scale: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Create initial batch of hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      scale: 0.5 + Math.random() * 0.5,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            fontSize: `${heart.scale * 2}rem`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
