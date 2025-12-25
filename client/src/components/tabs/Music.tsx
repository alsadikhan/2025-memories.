import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Music as MusicIcon, Volume2, Download } from "lucide-react";
import { Song } from "@/types";

const PLAYLIST: Song[] = [
  {
    id: "1",
    title: "Perfect",
    artist: "Ed Sheeran",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80",
  },
  {
    id: "2",
    title: "All of Me",
    artist: "John Legend",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://images.unsplash.com/photo-1459749411177-d4a428c389f5?w=400&q=80",
  },
  {
    id: "3",
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&q=80",
  },
  {
    id: "4",
    title: "A Thousand Years",
    artist: "Christina Perri",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    cover: "https://images.unsplash.com/photo-1514525253344-991472a786bc?w=400&q=80",
  },
  {
    id: "5",
    title: "Say You Won't Let Go",
    artist: "James Arthur",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80",
  },
];

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const currentSong = PLAYLIST[currentSongIndex];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
    setProgress(0);
  };
  
  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setProgress(0);
  };

  const handleDownload = (e: React.MouseEvent, song: Song) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = song.url;
    link.download = `${song.title} - ${song.artist}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-heading text-center mb-6">Our Playlist</h2>
      
      <Card className="bg-white/60 backdrop-blur-md border-white/50 shadow-xl overflow-hidden">
        <CardContent className="p-6">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-inner mb-6 relative group">
            <img 
              src={currentSong.cover} 
              alt={currentSong.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white rounded-full"
                    animate={{ height: ["20%", "60%", "20%"] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            )}
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-primary shadow-lg"
              onClick={(e) => handleDownload(e, currentSong)}
            >
              <Download className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{currentSong.title}</h3>
            <p className="text-muted-foreground">{currentSong.artist}</p>
          </div>
          
          <div className="space-y-4">
            <Slider 
              value={[progress]} 
              max={100} 
              step={1}
              className="cursor-pointer"
            />
            
            <div className="flex justify-between items-center px-4">
              <Button variant="ghost" size="icon" onClick={prevSong} className="hover:bg-pink-100 rounded-full">
                <SkipBack className="w-6 h-6 text-gray-700" />
              </Button>
              
              <Button 
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-white text-white ml-0.5" />
                ) : (
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                )}
              </Button>
              
              <Button variant="ghost" size="icon" onClick={nextSong} className="hover:bg-pink-100 rounded-full">
                <SkipForward className="w-6 h-6 text-gray-700" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-white/40 rounded-xl p-4 backdrop-blur-sm">
        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Up Next</h4>
        <div className="space-y-2">
          {PLAYLIST.map((song, index) => (
            <div 
              key={song.id}
              className={`flex items-center p-2 rounded-lg transition-colors group ${
                index === currentSongIndex ? "bg-white/60 shadow-sm border border-pink-100" : "hover:bg-white/30 cursor-pointer"
              }`}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
            >
              <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden mr-3">
                <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${index === currentSongIndex ? "text-primary" : "text-gray-700"}`}>
                  {song.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">{song.artist}</p>
              </div>
              <div className="flex items-center gap-2">
                {index === currentSongIndex && isPlaying && (
                  <Volume2 className="w-4 h-4 text-primary animate-pulse" />
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => handleDownload(e, song)}
                >
                  <Download className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
