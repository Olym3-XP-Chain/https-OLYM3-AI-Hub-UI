'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Star } from 'lucide-react'

const PartnersSection = () => {
  const partners = [
    {
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop',
      category: 'Technology'
    },
    {
      name: 'CryptoVentures',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop',
      category: 'Blockchain'
    },
    {
      name: 'MetaGames',
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=120&h=60&fit=crop',
      category: 'GameFi'
    },
    {
      name: 'IoT Solutions',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=60&fit=crop',
      category: 'DePin'
    },
    {
      name: 'AI Labs',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=120&h=60&fit=crop',
      category: 'AI'
    },
    {
      name: 'DeFi Protocol',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=120&h=60&fit=crop',
      category: 'DeFi'
    }
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Partners</span>
          </h2>
          
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-lg font-medium border border-blue-500/30"
            >
              <Users className="w-5 h-5 mr-2" />
              Let's co-create the future
            </motion.div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with leading companies and innovative startups to build the next generation of AI and Blockchain solutions.
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-24 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-lg transition-all duration-300" />
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="text-sm font-medium text-white">{partner.name}</div>
                <div className="text-xs text-gray-400">{partner.category}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20 mb-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-semibold">Featured Partnership</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              TechCorp & OLYM3 AI Hub
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Together, we're revolutionizing AI-powered DeFi solutions and creating new opportunities for developers worldwide.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Active Partnership</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>5+ Projects Launched</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span>$10M+ Value Created</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-blue-400/30 flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Build Together</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
