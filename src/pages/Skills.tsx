import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap, Globe, Shield } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import ParticlesBackground from '@/components/effects/ParticlesBackground';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Three.js/WebGL", level: 80 },
    ],
    gradient: "from-electric-purple to-electric-cyan",
  },
  {
    title: "Backend Development", 
    icon: Database,
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 82 },
    ],
    gradient: "from-electric-cyan to-electric-pink",
  },
  {
    title: "Design & Animation",
    icon: Palette,
    skills: [
      { name: "Framer Motion", level: 90 },
      { name: "GSAP", level: 85 },
      { name: "Figma", level: 88 },
      { name: "CSS/Tailwind", level: 95 },
    ],
    gradient: "from-electric-pink to-electric-purple",
  },
  {
    title: "Performance",
    icon: Zap,
    skills: [
      { name: "Web Vitals", level: 90 },
      { name: "Bundle Optimization", level: 85 },
      { name: "Caching Strategies", level: 88 },
      { name: "CDN/Edge", level: 82 },
    ],
    gradient: "from-electric-purple to-electric-cyan",
  },
  {
    title: "Cloud & DevOps",
    icon: Globe,
    skills: [
      { name: "AWS/Vercel", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 88 },
      { name: "Monitoring", level: 85 },
    ],
    gradient: "from-electric-cyan to-electric-pink",
  },
  {
    title: "Security",
    icon: Shield,
    skills: [
      { name: "Authentication", level: 90 },
      { name: "OWASP", level: 85 },
      { name: "Encryption", level: 82 },
      { name: "API Security", level: 88 },
    ],
    gradient: "from-electric-pink to-electric-purple",
  },
];

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-foreground/70">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <PageTransition>
      <div className="relative min-h-screen py-20 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My
              <br />
              <span className="gradient-text">Skills</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Expertise across the full stack, from pixel-perfect frontends to scalable backend architectures
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              
              return (
                <motion.div
                  key={category.title}
                  className="glass rounded-3xl p-8 hover:shadow-glow-primary transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        skill={skill}
                        delay={categoryIndex * 0.1 + skillIndex * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Stats */}
          <motion.div
            className="mt-20 glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-4xl font-bold text-electric-purple mb-2">15+</div>
                <div className="text-sm text-foreground/70">Technologies Mastered</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="text-4xl font-bold text-electric-cyan mb-2">500K+</div>
                <div className="text-sm text-foreground/70">Lines of Code</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="text-4xl font-bold text-electric-pink mb-2">50+</div>
                <div className="text-sm text-foreground/70">Projects Delivered</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="text-4xl font-bold text-electric-purple mb-2">99%</div>
                <div className="text-sm text-foreground/70">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}