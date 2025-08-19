import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from '../components/ui/button';
import PageTransition from '../components/layout/PageTransition';
import ParticlesBackground from '../components/effects/ParticlesBackground';

const profiles = [
  {
    id: 1,
    platform: "GitHub",
    username: "@yourusername",
    description: "Open source contributions and personal projects",
    stats: { repos: 127, stars: 2456, followers: 890 },
    achievements: ["Arctic Code Vault Contributor", "Top 1% Contributors"],
    url: "https://github.com/yourusername",
    color: "from-gray-700 to-gray-900",
    icon: "🐙",
  },
  {
    id: 2,
    platform: "LeetCode",
    username: "@coder_pro",
    description: "Algorithmic problem solving and competitive programming",
    stats: { solved: 850, ranking: 15420, contests: 45 },
    achievements: ["Knight Badge", "Top 5% Global"],
    url: "https://leetcode.com/coder_pro",
    color: "from-orange-500 to-yellow-500",
    icon: "⚡",
  },
  {
    id: 3,
    platform: "CodePen",
    username: "@creative_dev",
    description: "Creative frontend experiments and UI components",
    stats: { pens: 156, hearts: 12400, followers: 1200 },
    achievements: ["Popular Pen Creator", "Featured Developer"],
    url: "https://codepen.io/creative_dev",
    color: "from-green-500 to-blue-500",
    icon: "🎨",
  },
  {
    id: 4,
    platform: "Stack Overflow",
    username: "@problem_solver",
    description: "Helping developers solve complex technical challenges",
    stats: { reputation: 25680, answers: 342, badges: 89 },
    achievements: ["Gold Badge Holder", "Top 3% This Year"],
    url: "https://stackoverflow.com/users/problem_solver",
    color: "from-orange-600 to-orange-400",
    icon: "📚",
  },
  {
    id: 5,
    platform: "Dribbble",
    username: "@ui_designer",
    description: "UI/UX design shots and creative inspiration",
    stats: { shots: 78, likes: 8900, followers: 650 },
    achievements: ["Popular Shot", "Team Player"],
    url: "https://dribbble.com/ui_designer",
    color: "from-pink-500 to-purple-500",
    icon: "🎯",
  },
  {
    id: 6,
    platform: "HackerRank",
    username: "@algorithm_ace",
    description: "Algorithm challenges and programming certifications",
    stats: { stars: 1245, rank: 8520, badges: 12 },
    achievements: ["5-Star Problem Solver", "Certified Developer"],
    url: "https://hackerrank.com/algorithm_ace",
    color: "from-green-600 to-teal-500",
    icon: "🏆",
  },
];

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="text-center">
      <motion.div
        className="text-2xl font-bold text-electric-purple mb-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {typeof value === 'number' ? value.toLocaleString() : value}
      </motion.div>
      <div className="text-xs text-foreground/70">{label}</div>
    </div>
  );
}

export default function CodingProfiles() {
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
              Coding
              <br />
              <span className="gradient-text">Profiles</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-foreground/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore my coding journey across different platforms and see my contributions to the developer community
            </motion.p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="glass border-0 overflow-hidden hover:shadow-glow-primary transition-all duration-500 h-full">
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-br ${profile.color} p-6 relative overflow-hidden`}>
                      <motion.div
                        className="absolute top-0 right-0 text-6xl opacity-20"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {profile.icon}
                      </motion.div>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">{profile.platform}</h3>
                        <p className="text-white/80 text-sm">{profile.username}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {profile.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {Object.entries(profile.stats).map(([key, value]) => (
                          <StatCard
                            key={key}
                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                            value={value}
                          />
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Trophy className="w-4 h-4 mr-2 text-electric-purple" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {profile.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center text-sm text-foreground/70">
                              <Star className="w-3 h-3 mr-2 text-electric-cyan" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visit Profile Button */}
                      <Button
                        className="w-full group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(profile.url, '_blank')}
                      >
                        Visit Profile
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Overall Stats */}
          <motion.div
            className="glass rounded-3xl p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Combined Impact</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-electric-purple mb-2">50K+</div>
                <div className="text-sm text-foreground/70">Lines of Code</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-electric-cyan mb-2">1.2K+</div>
                <div className="text-sm text-foreground/70">Problems Solved</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-electric-pink mb-2">25K+</div>
                <div className="text-sm text-foreground/70">Community Impact</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-electric-purple mb-2">150+</div>
                <div className="text-sm text-foreground/70">Open Source Contributions</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}