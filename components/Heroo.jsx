'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Heroo() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Custom U-shape background */}
      <div className="absolute left-0 top-0 h-full w-1/2">
        <svg 
          viewBox="0 0 100 200" 
          preserveAspectRatio="none" 
          className="h-full w-full"
        >
          <path 
            d="M 0,0 
               L 100,0 
               Q 100,70 80,100 
               Q 60,130 100,150 
               L 0,200 Z" 
            fill="#f0f4ff"
          />
        </svg>
      </div>

      {/* Circular image highlight */}
      <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-20 w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
        <Image
          src="/team-working.jpg" // Replace with your image
          alt="Talank Team"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full min-h-screen flex items-center">
        <div className="w-full lg:w-1/2 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium"
          >
            ✨ Suite of Services (SoS)
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Innovate
            </span>{' '}
            With Confidence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 mb-10 max-w-lg"
          >
            Talank's expertise bridges the gap between business needs and technological possibilities through our comprehensive Suite of Services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Explore Solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#f8fafc' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {[
              { value: '100+', label: 'Clients' },
              { value: '40%', label: 'Cost Savings' },
              { value: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="pr-6 border-r border-gray-200 last:border-0">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-20 top-1/4 w-32 h-32 rounded-full bg-purple-100 blur-xl opacity-70" />
      <div className="absolute right-1/3 bottom-1/4 w-40 h-40 rounded-full bg-blue-100 blur-xl opacity-70" />
    </section>
  )
}