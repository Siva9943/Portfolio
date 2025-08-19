import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/layout/PageTransition';
import ParticlesBackground from '@/components/effects/ParticlesBackground';

const articles = [
  {
    id: 1,
    title: "The Future of Web Development: Beyond React",
    excerpt: "Exploring emerging technologies and frameworks that are shaping the next generation of web applications.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
    gradient: "from-electric-purple to-electric-cyan",
  },
  {
    id: 2,
    title: "Building Immersive 3D Experiences with Three.js",
    excerpt: "A comprehensive guide to creating stunning 3D graphics and animations for modern web applications.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
    gradient: "from-electric-cyan to-electric-pink",
  },
  {
    id: 3,
    title: "Performance Optimization: Making Your Apps Lightning Fast",
    excerpt: "Advanced techniques for optimizing web performance, from bundle splitting to edge computing strategies.",
    date: "2024-01-01",
    readTime: "10 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    gradient: "from-electric-pink to-electric-purple",
  },
  {
    id: 4,
    title: "Design Systems: Creating Consistency at Scale",
    excerpt: "How to build and maintain design systems that enable teams to create cohesive user experiences.",
    date: "2023-12-25",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    gradient: "from-electric-purple to-electric-cyan",
  },
  {
    id: 5,
    title: "AI-Powered Development: The Developer's New Toolkit",
    excerpt: "Exploring how artificial intelligence is transforming the way we write, test, and deploy code.",
    date: "2023-12-18",
    readTime: "9 min read",
    category: "AI",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=300&fit=crop",
    gradient: "from-electric-cyan to-electric-pink",
  },
  {
    id: 6,
    title: "Micro-Frontends: Architecture for Large-Scale Applications",
    excerpt: "Breaking down monolithic frontends into manageable, scalable micro-applications.",
    date: "2023-12-11",
    readTime: "11 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
    gradient: "from-electric-pink to-electric-purple",
  },
];

export default function Articles() {
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
              <span className="gradient-text">Articles</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Insights, tutorials, and thoughts on modern web development and emerging technologies
            </motion.p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass border-0 overflow-hidden hover:shadow-glow-primary transition-all duration-500 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full glass text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-foreground/70 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-electric-purple transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-20 glass rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Updated</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest articles and insights delivered directly to your inbox. No spam, just valuable content.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl glass border border-glass-border focus:border-electric-purple focus:outline-none transition-colors"
              />
              <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}