import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/layout/PageTransition';
import ParticlesBackground from '@/components/effects/ParticlesBackground';

export default function CallToAction() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-primary opacity-10"
          animate={{
            background: [
              'linear-gradient(45deg, hsl(252, 75%, 68%), hsl(185, 85%, 55%))',
              'linear-gradient(45deg, hsl(185, 85%, 55%), hsl(325, 75%, 68%))',
              'linear-gradient(45deg, hsl(325, 75%, 68%), hsl(252, 75%, 68%))',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-electric-purple animate-pulse" />
              <span className="text-sm font-medium">Ready to start your project?</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Let's Build
              <br />
              <span className="gradient-text">Something Amazing</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transform your ideas into reality with cutting-edge development and stunning design
            </motion.p>
          </motion.div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="group glass rounded-3xl p-8 hover:shadow-glow-primary transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Start a Project</h3>
                <p className="text-foreground/70 mb-6">
                  Have a project in mind? Let's discuss your vision and bring it to life with exceptional craftsmanship.
                </p>
                <Button 
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  size="lg"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="group glass rounded-3xl p-8 hover:shadow-glow-accent transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Calendar className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Schedule a Call</h3>
                <p className="text-foreground/70 mb-6">
                  Book a free consultation to discuss your needs, timeline, and how we can work together.
                </p>
                <Button 
                  variant="outline"
                  className="w-full glass hover:shadow-glow-accent transition-all duration-300"
                  size="lg"
                >
                  Book a Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Button 
              size="lg"
              className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-500 text-xl px-12 py-8 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <span className="relative z-10 flex items-center">
                Hire Me Now
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-electric-purple mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                48h
              </motion.div>
              <div className="text-sm text-foreground/70">Average Response Time</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-electric-cyan mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                100%
              </motion.div>
              <div className="text-sm text-foreground/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-electric-pink mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                24/7
              </motion.div>
              <div className="text-sm text-foreground/70">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}