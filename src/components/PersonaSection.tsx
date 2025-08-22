'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Users, 
  Rocket, 
  TrendingUp, 
  FileText, 
  Play, 
  Target 
} from 'lucide-react'

const PersonaSection = () => {
  const buildersJourney = [
    {
      step: 1,
      title: 'Join',
      description: 'Create your developer profile and showcase your skills',
      icon: Users
    },
    {
      step: 2,
      title: 'Connect',
      description: 'Find collaborators and mentors in the community',
      icon: Users
    },
    {
      step: 3,
      title: 'Build',
      description: 'Contribute to innovative AI and Blockchain projects',
      icon: Code
    },
    {
      step: 4,
      title: 'Scale',
      description: 'Grow your career and build successful projects',
      icon: TrendingUp
    }
  ]

  const partnersJourney = [
    {
      step: 1,
      title: 'Submit',
      description: 'Submit your project details and requirements',
      icon: FileText
    },
    {
      step: 2,
      title: 'Review',
      description: 'Get matched with qualified developers',
      icon: Target
    },
    {
      step: 3,
      title: 'Launch',
      description: 'Launch your project with the right team',
      icon: Rocket
    },
    {
      step: 4,
      title: 'Scale',
      description: 'Scale your project and achieve success',
      icon: TrendingUp
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Choose Your Path</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a developer looking to build or a partner seeking collaboration, we have the perfect path for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Builders Lane */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BUILDERS</h3>
                  <p className="text-blue-300">For developers and creators</p>
                </div>
              </div>

              <div className="space-y-6">
                {buildersJourney.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-blue-400/30"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Partners Lane */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">PARTNERS</h3>
                  <p className="text-purple-300">For projects and companies</p>
                </div>
              </div>

              <div className="space-y-6">
                {partnersJourney.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 border border-purple-400/30"
              >
                Submit Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PersonaSection
