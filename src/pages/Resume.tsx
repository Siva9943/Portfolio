import { motion } from 'framer-motion';
import { Download, FileText, Eye, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import PageTransition from '../components/layout/PageTransition';
import ParticlesBackground from '../components/effects/ParticlesBackground';

export default function Resume() {
  return (
    <PageTransition>
      <div className="relative min-h-screen py-20 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
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
              <span className="gradient-text">Resume</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Download my complete professional resume or view the interactive version below
            </motion.p>
          </motion.div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass border-0 hover:shadow-glow-primary transition-all duration-500 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Download className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4">Download PDF</h3>
                  <p className="text-foreground/70 mb-6">
                    Get the complete PDF version of my resume with all details, 
                    experience, and achievements.
                  </p>

                  <Button
                   
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="glass border-0 hover:shadow-glow-accent transition-all duration-500 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Eye className="w-10 h-10 text-accent-foreground" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4">View Online</h3>
                  <p className="text-foreground/70 mb-6">
                    Browse my interactive resume with animations, 
                    links, and detailed project information.
                  </p>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full glass hover:shadow-glow-accent transition-all duration-300"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View Interactive Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Resume Preview */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Resume Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-electric-purple" />
                  Experience
                </h3>
                
                <div className="space-y-6">
                  <motion.div
                    className="border-l-2 border-electric-purple pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-lg">Senior Full Stack Developer</h4>
                    <p className="text-electric-cyan text-sm mb-2">TechCorp Inc. • 2022 - Present</p>
                    <p className="text-foreground/70 text-sm">
                      Leading a team of 5 developers in building scalable web applications 
                      using React, Node.js, and cloud technologies.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="border-l-2 border-electric-cyan pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h4 className="font-semibold text-lg">Frontend Developer</h4>
                    <p className="text-electric-pink text-sm mb-2">StartupXYZ • 2020 - 2022</p>
                    <p className="text-foreground/70 text-sm">
                      Developed responsive web applications and improved user experience 
                      for a fast-growing startup with 100K+ users.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="border-l-2 border-electric-pink pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="font-semibold text-lg">Junior Developer</h4>
                    <p className="text-electric-purple text-sm mb-2">WebStudio • 2019 - 2020</p>
                    <p className="text-foreground/70 text-sm">
                      Started my professional journey building custom websites 
                      and learning modern development practices.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-electric-cyan" />
                  Education & Certifications
                </h3>
                
                <div className="space-y-6">
                  <motion.div
                    className="border-l-2 border-electric-purple pl-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-lg">B.S. Computer Science</h4>
                    <p className="text-electric-cyan text-sm mb-2">University of Technology • 2019</p>
                    <p className="text-foreground/70 text-sm">
                      Graduated with honors, focusing on software engineering 
                      and web development.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="border-l-2 border-electric-cyan pl-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h4 className="font-semibold text-lg">AWS Certified Developer</h4>
                    <p className="text-electric-pink text-sm mb-2">Amazon Web Services • 2023</p>
                    <p className="text-foreground/70 text-sm">
                      Professional certification in cloud development and deployment.
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="border-l-2 border-electric-pink pl-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="font-semibold text-lg">React Professional</h4>
                    <p className="text-electric-purple text-sm mb-2">Meta • 2022</p>
                    <p className="text-foreground/70 text-sm">
                      Advanced React development certification covering 
                      hooks, context, and performance optimization.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-foreground/70 mb-6">
              Want to learn more about my experience and qualifications?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-12 py-6 text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Full Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}