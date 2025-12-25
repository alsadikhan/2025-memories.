import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Music as MusicIcon, Image, NotebookPen } from "lucide-react";
import LoveZone from "./tabs/LoveZone";
import Music from "./tabs/Music";
import Gallery from "./tabs/Gallery";
import Notes from "./tabs/Notes";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("love");

  const tabs = [
    { id: "love", icon: Heart, label: "Love Zone" },
    { id: "music", icon: MusicIcon, label: "Music" },
    { id: "gallery", icon: Image, label: "Gallery" },
    { id: "notes", icon: NotebookPen, label: "Notes" },
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col max-w-md md:max-w-4xl mx-auto bg-white/30 md:bg-white/20 md:backdrop-blur-sm md:my-8 md:rounded-3xl md:shadow-2xl md:border md:border-white/40 overflow-hidden">
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <div className="flex-1 p-4 pb-24 md:pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full"
              >
                <TabsContent value="love" className="mt-0 h-full focus-visible:ring-0">
                  <LoveZone />
                </TabsContent>
                <TabsContent value="music" className="mt-0 h-full focus-visible:ring-0">
                  <Music />
                </TabsContent>
                <TabsContent value="gallery" className="mt-0 h-full focus-visible:ring-0">
                  <Gallery />
                </TabsContent>
                <TabsContent value="notes" className="mt-0 h-full focus-visible:ring-0">
                  <Notes />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="fixed bottom-0 left-0 right-0 md:static md:bg-transparent bg-white/80 backdrop-blur-lg border-t border-white/50 p-2 md:p-6 z-50">
             <TabsList className="w-full grid grid-cols-4 h-auto bg-transparent p-0 gap-2">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center gap-1 data-[state=active]:bg-pink-100 data-[state=active]:text-primary py-3 rounded-2xl transition-all duration-300 hover:bg-white/50"
                >
                  <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "fill-current" : ""}`} />
                  <span className="text-xs font-medium md:text-sm">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
