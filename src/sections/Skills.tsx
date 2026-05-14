import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Backend & Database",
    skills: [
      { name: "C# / .NET / ASP.NET Core", level: 95 },
      { name: "Entity Framework Core", level: 90 },
      { name: "SQL Server / PostgreSQL", level: 85 },
      { name: "SignalR / Realtime Systems", level: 80 },
      { name: "Clean Architecture & REST APIs", level: 90 },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 75 },
      { name: "TypeScript / JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ]
  },
  {
    title: "DevOps & Other Skills",
    skills: [
      { name: "Windows Server & IIS", level: 85 },
      { name: "Git & GitHub ", level: 80 },
      { name: "System Analysis & DB Design", level: 85 },
      { name: "AI & Chatbot Integration", level: 75 },
      { name: "Teaching & Mentoring", level: 95 },
    ]
  }
];

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
          <p className="text-muted-foreground text-lg max-w-2xl">The technologies, frameworks, and methodologies I use to build robust and scalable systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-primary mr-4"></span>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-sm text-foreground/80 group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + (idx * 0.1), ease: "easeOut" }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
