import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
  { path: '/articles', label: 'Articles' },
  { path: '/profiles', label: 'Profiles' },
  { path: '/cta', label: 'Hire Me' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="glass rounded-full px-6 py-3">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-electric-purple ${
                  location.pathname === item.path ? 'text-electric-purple' : 'text-foreground/80'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-lg opacity-20"
                    layoutId="activeTab"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        className="fixed top-6 right-6 z-50 md:hidden glass rounded-full p-3"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: isOpen ? 0 : 30, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-2xl font-medium transition-all duration-300 hover:text-electric-purple ${
                    location.pathname === item.path ? 'text-electric-purple' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}