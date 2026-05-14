import { motion } from 'framer-motion';
import { Database, Layout, BookOpen } from 'lucide-react';

const cards = [
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: 'Backend Development',
    description: 'Building scalable enterprise management systems, realtime applications, and robust APIs using C# and .NET technologies.',
  },
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    title: 'Fullstack Development',
    description: 'Crafting complete, interactive web experiences by combining powerful backends with modern frontends like React and Angular.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: 'Web Instructor',
    description: 'Teaching and mentoring college students in modern web development, fostering the next generation of software engineers.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Solving real-world business problems <br />
            <span className="text-gradient">through technology.</span>
          </h2>
          <div className="text-lg text-muted-foreground space-y-4 text-left md:text-center">
            <p>
              I am a Backend Developer with hands-on experience in developing enterprise systems, educational platforms, and realtime applications. My primary expertise lies in C#, ASP.NET, SQL Server, and system architecture. Besides backend development, I also work with modern frontend frameworks such as React and Angular to build complete fullstack applications.
            </p>
            <p>
              Currently, I am working as a Fullstack Developer while also teaching Web Development at Tay Do College. I enjoy solving real-world business problems through technology and continuously improving my skills in software engineering and system design.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold mb-4">Fast Facts</h3>
            <p className="text-muted-foreground">Passionate About Clean Architecture & Realtime Technologies.</p>
          </div>
          
          <div className="flex flex-wrap gap-8 md:gap-12 relative z-10 justify-center">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">&gt;1</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Year Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">3+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Enterprise Systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">Edu</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Web Instructor</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
