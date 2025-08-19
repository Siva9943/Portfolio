import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticlesBackground from '@/components/effects/ParticlesBackground';
import FloatingIcons from '@/components/effects/FloatingIcons';
import PageTransition from '@/components/layout/PageTransition';

export default function Hero() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <FloatingIcons />
        
        {/* Animated gradient blur background */}
        <div className="absolute inset-0 bg-gradient-dark opacity-80" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-electric-purple rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-electric-cyan rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-electric-purple" />
              <span className="text-sm font-medium">Available for new opportunities</span>
            </motion.div>
            
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Creative</span>
              <br />
              Developer
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting immersive digital experiences with cutting-edge technology and stunning visual design
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6"
            >
              View My Work
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group glass hover:shadow-glow-accent transition-all duration-300 text-lg px-8 py-6"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 text-left max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience creating 
                beautiful, functional, and user-centered digital experiences. I combine 
                technical expertise with creative vision to build products that not only 
                work flawlessly but also inspire and delight users.
              </p>
              <p>
                My journey in tech started with a fascination for how technology can solve 
                real-world problems. Today, I specialize in React, Node.js, and modern web 
                technologies, with a particular love for animations and 3D graphics.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-purple">50+</div>
                  <div className="text-sm text-foreground/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-cyan">5+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-pink">20+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-foreground/60"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}