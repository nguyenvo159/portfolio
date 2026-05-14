import { motion } from 'framer-motion';

const techStack = [
  "C#", "ASP.NET Core", "React", "Angular", "SQL Server",
  "PostgreSQL", "SignalR", "Windows Server", "TypeScript",
  "Entity Framework", "TailwindCSS"
];

export default function TechMarquee() {
  return (
    <div className="w-full py-10 mt-5 bg-primary/5 border-y border-border/50 overflow-hidden relative flex items-center">
      {/* Left/Right Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>

      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
      >
        {/* Repeat the array a few times to ensure seamless scrolling */}
        {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
          <span
            key={idx}
            className="text-xl md:text-3xl font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
          >
            {tech}
            <span className="mx-6 md:mx-12 text-primary/30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
