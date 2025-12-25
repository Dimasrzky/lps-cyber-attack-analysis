'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

const timelineEvents = [
  {
    date: '17 Juni 2025',
    title: 'Serangan Dimulai',
    description: 'Awal deteksi serangan DDoS terhadap sistem LPS dengan peningkatan trafik yang tidak normal',
    intensity: 'low',
    icon: AlertTriangle
  },
  {
    date: '20-24 Juni 2025',
    title: 'Eskalasi Bertahap',
    description: 'Intensitas serangan meningkat secara bertahap dengan pola yang berubah-ubah untuk menghindari deteksi',
    intensity: 'medium',
    icon: TrendingUp
  },
  {
    date: '25 Juni 2025',
    title: 'Puncak Serangan',
    description: 'Intensitas mencapai puncak tertinggi dengan 34 juta serangan per detik dan trafik 960 Gbps',
    intensity: 'critical',
    icon: AlertTriangle
  },
  {
    date: '26 Juni - 2 Juli 2025',
    title: 'Serangan Berkelanjutan',
    description: 'Serangan terus berlanjut dengan intensitas bervariasi, sistem LPS tetap bertahan',
    intensity: 'high',
    icon: TrendingUp
  },
  {
    date: '3 Juli 2025',
    title: 'Berakhir',
    description: 'Serangan mereda setelah total 2,5 miliar serangan dalam periode 17 hari',
    intensity: 'low',
    icon: Calendar
  }
];

const intensityColors = {
  low: 'from-blue-500 to-cyan-500',
  medium: 'from-yellow-500 to-orange-500',
  high: 'from-orange-500 to-red-500',
  critical: 'from-red-600 to-pink-600'
};

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Timeline Serangan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kronologi serangan DDoS terhadap LPS dari awal hingga akhir
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 flex items-center ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${intensityColors[event.intensity]} border-4 border-slate-950 shadow-lg`} />
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border-2 border-slate-700 hover:border-opacity-50 transition-all duration-300 shadow-xl`}
                    style={{ borderColor: `var(--tw-gradient-stops)` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`bg-gradient-to-r ${intensityColors[event.intensity]} p-2 rounded-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-400">{event.date}</p>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Intensity indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { 
                            width: event.intensity === 'critical' ? '100%' : 
                                   event.intensity === 'high' ? '75%' :
                                   event.intensity === 'medium' ? '50%' : '25%'
                          } : {}}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                          className={`h-full bg-gradient-to-r ${intensityColors[event.intensity]}`}
                        />
                      </div>
                      <span className="text-xs text-gray-400 capitalize">{event.intensity}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-900 rounded-xl p-6 border border-blue-500/30 text-center">
            <p className="text-blue-300 text-sm mb-2">Total Durasi</p>
            <p className="text-4xl font-bold text-white">17 Hari</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-xl p-6 border border-purple-500/30 text-center">
            <p className="text-purple-300 text-sm mb-2">Total Serangan</p>
            <p className="text-4xl font-bold text-white">2,5 Miliar</p>
          </div>
          <div className="bg-gradient-to-br from-red-900/30 to-slate-900 rounded-xl p-6 border border-red-500/30 text-center">
            <p className="text-red-300 text-sm mb-2">Puncak Trafik</p>
            <p className="text-4xl font-bold text-white">960 Gbps</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
