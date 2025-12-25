import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn } from "lucide-react";

// Import stock images using generic paths that resolved in previous step
import img1 from "@assets/stock_images/romantic_couple_hold_f699e10b.jpg";
import img2 from "@assets/stock_images/romantic_couple_hold_85c614db.jpg";
import img3 from "@assets/stock_images/romantic_couple_hold_4c54a965.jpg";
import img4 from "@assets/stock_images/pink_roses_bouquet_0a728684.jpg";
import img5 from "@assets/stock_images/pink_roses_bouquet_ad0411ea.jpg";
import img6 from "@assets/stock_images/pink_roses_bouquet_74c83413.jpg";

const PHOTOS = [
  { id: 1, src: img1, caption: "Walking into forever with you" },
  { id: 2, src: img4, caption: "Beautiful flowers for a beautiful soul" },
  { id: 3, src: img2, caption: "Just us against the world" },
  { id: 4, src: img5, caption: "Sweet moments" },
  { id: 5, src: img3, caption: "Holding on tight" },
  { id: 6, src: img6, caption: "Love in bloom" },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof PHOTOS[0] | null>(null);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-heading text-center mb-8">Our Memories</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl bg-transparent border-none shadow-none p-0 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedPhoto && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative rounded-lg overflow-hidden bg-white shadow-2xl"
              >
                <img 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.caption}
                  className="max-h-[80vh] w-auto object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                  <p className="text-white font-heading text-2xl text-center">{selectedPhoto.caption}</p>
                </div>
                <button 
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}
