import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import PageTransition from '@/components/layout/PageTransition';
import ParticlesBackground from '@/components/effects/ParticlesBackground';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
              Let's
              <br />
              <span className="gradient-text">Connect</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 gradient-text">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-muted/20 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-foreground/70">hello@portfolio.dev</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-muted/20 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-foreground/70">+1 (555) 123-4567</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-muted/20 transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-foreground/70">San Francisco, CA</p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <motion.div
                className="glass rounded-3xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="text-foreground/80 mb-6">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to call directly.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for new projects</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="glass border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input 
                          placeholder="Your name"
                          className="glass border-glass-border focus:border-electric-purple transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          className="glass border-glass-border focus:border-electric-purple transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input 
                        placeholder="Project inquiry"
                        className="glass border-glass-border focus:border-electric-purple transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="glass border-glass-border focus:border-electric-purple transition-colors"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 relative overflow-hidden"
                      size="lg"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? (
                        <motion.div
                          className="flex items-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Message Sent!
                        </motion.div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                      
                      {isSubmitted && (
                        <motion.div
                          className="absolute inset-0 bg-green-500"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.2 }}
                          exit={{ scale: 0, opacity: 0 }}
                        />
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}