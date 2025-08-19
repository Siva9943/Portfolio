import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import ParticlesBackground from '../components/effects/ParticlesBackground';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution with real-time inventory management and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-electric-purple to-electric-cyan",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Advanced data visualization platform with machine learning insights and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
    gradient: "from-electric-cyan to-electric-pink",
  },
  {
    id: 3,
    title: "Social Media Management Tool",
    description: "Comprehensive platform for managing multiple social media accounts with automated posting and analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tech: ["React Native", "Express", "MongoDB", "Socket.io"],
    gradient: "from-electric-pink to-electric-purple",
  },
  {
    id: 4,
    title: "Blockchain Voting System",
    description: "Secure, transparent voting platform built on blockchain technology with end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    tech: ["Solidity", "Web3.js", "React", "IPFS"],
    gradient: "from-electric-cyan to-electric-purple",
  },
  {
    id: 5,
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio showcasing creative work with immersive animations and WebGL effects.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    tech: ["Three.js", "GSAP", "WebGL", "React"],
    gradient: "from-electric-purple to-electric-pink",
  },
  {
    id: 6,
    title: "Real-time Collaboration Platform",
    description: "Multi-user collaboration tool with live editing, video calls, and project management features.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tech: ["React", "WebRTC", "Socket.io", "AWS"],
    gradient: "from-electric-pink to-electric-cyan",
  },
];

export default function Projects() {
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
              Featured
              <br />
              <span className="gradient-text">Projects</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of my recent work, featuring innovative solutions and cutting-edge technologies
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass border-0 overflow-hidden hover:shadow-glow-primary transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <Button className="glass px-2 py-1" aria-label="Open external link">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button className="glass px-2 py-1" aria-label="Open Github">
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-electric-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full glass text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-6 text-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}