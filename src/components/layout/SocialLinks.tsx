import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, url: 'https://github.com', color: 'hover:text-electric-purple' },
  { icon: Linkedin, url: 'https://linkedin.com', color: 'hover:text-electric-cyan' },
  { icon: Instagram, url: 'https://instagram.com', color: 'hover:text-electric-pink' },
  { icon: Youtube, url: 'https://youtube.com', color: 'hover:text-red-500' },
  { icon: Twitter, url: 'https://twitter.com', color: 'hover:text-blue-400' },
];

export default function SocialLinks() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass rounded-full p-3 text-foreground/70 transition-all duration-300 ${social.color} hover:scale-110`}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            <IconComponent className="w-5 h-5" />
          </motion.a>
        );
      })}
    </motion.div>
  );
}