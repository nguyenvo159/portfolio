import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Fashion E-Commerce System",
    description: "Developed a modern fashion e-commerce platform integrated with AI-powered recommendation and image search features to enhance customer shopping experience. Features an automated chatbot system, product & order management, and a highly responsive UI/UX.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000",
    tags: ["ASP.NET", "Vue.js", "PostgreSQL", "AI Recommendation"],
    links: { live: "#", github: "#" }
  },
  {
    title: "Employee Management System",
    description: "Built a comprehensive employee management platform with realtime communication and document management capabilities. Features include degree & certificate management, realtime chat using SignalR, attendance tracking, and role-based authorization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["ASP.NET Core", "React", "SQL Server", "SignalR"],
    links: { live: "#", github: "#" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">A selection of enterprise systems I've built with a focus on scalability and realtime features.</p>
          </div>
          <a href="https://github.com/nguyenvo159" target="_blank" rel="noreferrer" className="text-primary hover:underline underline-offset-4 flex items-center font-medium">
            View all on GitHub <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5 relative overflow-hidden rounded-2xl aspect-video glass">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full border border-border text-xs font-medium bg-muted/50">
                  Project {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-6">
                  {/* <a href={project.links.live} className="flex items-center justify-center px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-full font-medium">
                    Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                  </a> */}
                  <a href={project.links.github} className="flex items-center justify-center p-3 border border-border hover:bg-muted transition-colors rounded-full glass">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
