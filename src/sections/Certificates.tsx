import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    title: "C# From Basic to Advanced",
    issuer: "Udemy",
    icon: <Award className="w-8 h-8 text-primary" />
  },
  {
    title: "Pedagogical Certificate",
    issuer: "Intermediate & College Level",
    icon: <Award className="w-8 h-8 text-primary" />
  },
  {
    title: "TOEIC Certificate",
    issuer: "English Proficiency",
    icon: <Award className="w-8 h-8 text-primary" />
  }
];

export default function Certificates() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/5">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[100px] -z-10"></div>

      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Certifications</h2>
          <p className="text-muted-foreground text-lg">Continuous learning and professional development.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-green-500" />
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
