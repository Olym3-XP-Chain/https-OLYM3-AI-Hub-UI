'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  Target, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const EducationSection = () => {
  const educationPrograms = [
    {
      icon: BookOpen,
      title: 'Courses',
      description: 'Comprehensive learning paths for AI and Blockchain development',
      features: [
        'AI/ML Fundamentals',
        'Blockchain Development',
        'DeFi/GameFi Strategies',
        'Smart Contract Security'
      ],
      cta: 'Browse',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: '1-on-1 guidance from industry experts and successful entrepreneurs',
      features: [
        '1-on-1 guidance',
        'Industry experts',
        'Career planning',
        'Project reviews'
      ],
      cta: 'Find Mentor',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Verified credentials and badges to showcase your expertise',
      features: [
        'Verified skills',
        'Digital badges',
        'Portfolio building',
        'Industry recognition'
      ],
      cta: 'Get Certified',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Education & Training</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your career in AI and Blockchain with our comprehensive education programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {educationPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${program.color} text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 border border-white/20`}
                >
                  {program.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Accelerate Your Career?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Join thousands of developers who have transformed their careers through our education programs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-blue-400/30 flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Register for All Programs</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
