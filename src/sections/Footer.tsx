import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background py-12 relative overflow-hidden">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-2xl font-bold tracking-tighter text-gradient">
            VPN<span className="text-foreground">.</span>
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-left mb-6 md:mb-0">
          © {new Date().getFullYear()} Võ Phước Nguyên. All rights reserved.
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </footer>
  );
}
