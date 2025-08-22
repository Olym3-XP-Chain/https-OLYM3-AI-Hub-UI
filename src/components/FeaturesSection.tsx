'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Code, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe,
  Brain,
  Database
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Developer Network',
      description: 'Connect with thousands of AI and Blockchain developers from around the world. Find collaborators, mentors, and team members for your next project.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Project Marketplace',
      description: 'Discover innovative DeFi, GameFi, and DePin projects. Browse through curated opportunities and find the perfect project to contribute to.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Our advanced AI algorithms match you with the most suitable projects and collaborators based on your skills, interests, and experience.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure Collaboration',
      description: 'Built-in security features and smart contracts ensure safe and transparent collaboration between developers and project owners.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your contributions, earnings, and project success with comprehensive analytics and performance metrics.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join a diverse, global community of innovators. Participate in events, hackathons, and knowledge-sharing sessions.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'AI Development Tools',
      description: 'Access cutting-edge AI development tools, frameworks, and resources to accelerate your AI project development.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Blockchain Infrastructure',
      description: 'Leverage our blockchain infrastructure and tools to build, deploy, and scale your decentralized applications.',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Everything You Need</span>
            <br />
            <span className="text-white">to Build the Future</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools, connections, and resources you need to succeed in the AI and Blockchain ecosystem.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Building?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Join thousands of developers already creating the future of AI and Blockchain.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-blue-400/30"
            >
              Explore Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
