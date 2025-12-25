import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Pin } from "lucide-react";

const REMINDERS = [
  { id: 1, text: "You are capable of amazing things.", color: "bg-yellow-100", rotate: "-rotate-2" },
  { id: 2, text: "Your smile lights up my whole world.", color: "bg-pink-100", rotate: "rotate-3" },
  { id: 3, text: "I'm so incredibly proud of you.", color: "bg-blue-100", rotate: "-rotate-1" },
  { id: 4, text: "Don't forget to drink water today!", color: "bg-green-100", rotate: "rotate-2" },
  { id: 5, text: "You are loved more than you know.", color: "bg-purple-100", rotate: "-rotate-3" },
];

export default function Notes() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-heading text-center mb-8">Daily Reminders</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {REMINDERS.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            className={`transform ${note.rotate} transition-all duration-300`}
          >
            <Card className={`${note.color} border-none shadow-md overflow-hidden relative`}>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-300 shadow-inner z-10 border border-gray-400"></div>
              <CardContent className="p-8 pt-10 flex flex-col items-center justify-center min-h-[160px] text-center">
                <p className="font-heading text-2xl text-gray-800 leading-relaxed">
                  "{note.text}"
                </p>
                <div className="mt-4 flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-gray-400/50" />
                   <div className="w-1 h-1 rounded-full bg-gray-400/50" />
                   <div className="w-1 h-1 rounded-full bg-gray-400/50" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
