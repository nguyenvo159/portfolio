import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      "C# / .NET / ASP.NET Core",
      "Entity Framework Core",
      "SQL Server / PostgreSQL",
      "SignalR / Realtime Systems",
      "Clean Architecture & REST APIs",
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      "React",
      "Angular",
      "TypeScript / JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ]
  },
  {
    title: "DevOps & Other Skills",
    icon: "🛠️",
    skills: [
      "Windows Server & IIS",
      "Git & GitHub",
      "System Analysis & DB Design",
      "AI & Chatbot Integration",
      "Teaching & Mentoring",
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            The technologies, frameworks, and methodologies I use to build robust and scalable systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-full text-sm font-medium
                               bg-primary/10 text-primary border border-primary/20
                               hover:bg-primary/20 hover:border-primary/40
                               transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
