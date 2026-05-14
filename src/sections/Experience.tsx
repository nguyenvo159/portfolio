import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "Công ty CP BXTP Cần Thơ",
    period: "August 2024 - Present",
    description: "Develop and maintain enterprise management systems. Build and optimize backend APIs using ASP.NET Core and develop frontend modules using React. Also responsible for database design and system deployment on Windows Server. Key projects include Motorcycle Rental Management System and Driving School Training System.",
  },
  {
    id: 2,
    role: "Web Development Instructor & IT Staff",
    company: "Trường Cao đẳng Tây Đô",
    period: "April 2025 - Present",
    description: "Teach Web Development for college students, guiding them in both frontend and backend technologies. Participate in developing educational management systems and supporting IT infrastructure and internal systems.",
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    company: "Công ty CP BXTP Cần Thơ",
    period: "June 2024 - August 2024",
    description: "Assisted in backend API development and worked closely with SQL Server and ASP.NET. Participated in enterprise system maintenance and learned professional software development workflows in a production environment.",
  },
  {
    id: 4,
    role: "Bachelor of Software Engineering (Excellent Grade)",
    company: "Can Tho University",
    period: "2020 - 2024",
    description: "Graduated with an Excellent degree (Loại Giỏi). Built a strong foundation in system architecture, database design, algorithms, and software development methodologies.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/10 relative">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">My professional path and academic background.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-blue-500 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12 pl-8' : 'md:pr-12 pl-8 md:text-right'}`}>
                  <div className="glass p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                    <div className="text-primary font-semibold text-sm mb-2">{exp.period}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-lg text-muted-foreground mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
