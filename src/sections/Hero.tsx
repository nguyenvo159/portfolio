import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

const subtitles = [
  "Backend Developer",
  "Fullstack Developer",
  "Web Instructor",
  "ASP.NET Developer",
  "Building scalable systems",
  ".NET Enthusiast"
];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 overflow-hidden relative glass shadow-[0_0_40px_rgba(var(--primary),0.3)]">
            <img
              src="https://github.com/nguyenvo159.png"
              alt="Võ Phước Nguyên"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-4 md:-right-6 bg-background border border-border rounded-full px-4 py-2 text-xs md:text-sm font-semibold flex items-center shadow-lg whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available to Work
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-8 mb-4 overflow-hidden relative w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentSubtitle}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm md:text-base font-semibold tracking-widest text-primary uppercase absolute"
              >
                {subtitles[currentSubtitle]}
              </motion.h2>
            </AnimatePresence>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-gradient">Võ Phước Nguyên</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I specialize in building scalable backend systems and enterprise web applications using .NET technologies. Passionate about clean architecture, realtime systems, and modern web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#contact" className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 flex items-center gap-2">
            <span className="relative z-10">Hire Me</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <a href="#" className="group px-8 py-4 rounded-full font-semibold border border-border glass hover:bg-muted/50 transition-all flex items-center gap-2">
            <span>Download CV</span>
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#experience" className="group px-8 py-4 rounded-full font-semibold border border-border glass hover:bg-muted/50 transition-all flex items-center gap-2">
            <span>View Experience</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
