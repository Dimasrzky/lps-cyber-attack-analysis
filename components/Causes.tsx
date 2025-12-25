'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Target, Shield, Crosshair } from 'lucide-react';

const technicalFactors = [
  {
    icon: Cpu,
    title: 'Botnet Terdistribusi',
    description: 'Serangan diluncurkan dari botnet besar yang terdiri dari jaringan komputer yang dikendalikan penyerang',
    details: 'Menggunakan perangkat IoT dan sistem terkompromi untuk menghasilkan volume serangan yang masif'
  },
  {
    icon: Crosshair,
    title: 'Pola Serangan Dinamis',
    description: 'Teknik serangan yang berubah-ubah dengan cepat untuk menghindari deteksi',
    details: 'Sulit dihentikan hanya dengan filter IP tradisional karena pola yang terus beradaptasi'
  }
];

const strategicFactors = [
  {
    icon: Target,
    title: 'Target Strategis',
    description: 'LPS adalah lembaga penting dalam stabilitas sistem keuangan nasional',
    details: 'Serangan terhadap institusi ini memiliki potensi dampak luas terhadap kepercayaan publik'
  },
  {
    icon: Shield,
    title: 'Motif Beragam',
    description: 'Motivasi penyerang dapat bervariasi dari gangguan layanan hingga tekanan politik-ekonomi',
    details: 'Termasuk disruption, ransomware pressure, uji kemampuan botnet, atau aktivitas politik ekonomi'
  }
];

export default function Causes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Penyebab Serangan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analisis faktor teknis dan strategis di balik serangan DDoS terhadap LPS
          </p>
        </motion.div>

        {/* Technical Factors */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Cpu className="w-8 h-8 text-blue-400" />
            Faktor Teknis
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-900/30 to-slate-900 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="bg-blue-500/20 p-3 rounded-lg"
                    >
                      <Icon className="w-7 h-7 text-blue-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {factor.title}
                      </h4>
                      <p className="text-blue-300 font-medium mb-3">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-16">
                    {factor.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Strategic Factors */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Target className="w-8 h-8 text-purple-400" />
            Faktor Strategis
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-900/30 to-slate-900 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: -15 }}
                      className="bg-purple-500/20 p-3 rounded-lg"
                    >
                      <Icon className="w-7 h-7 text-purple-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {factor.title}
                      </h4>
                      <p className="text-purple-300 font-medium mb-3">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-16">
                    {factor.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6"
        >
          <p className="text-amber-200 leading-relaxed">
            <strong className="text-amber-300">Catatan:</strong> Tidak semua serangan DDoS bermotif finansial. 
            Banyak juga yang bersifat kompetitif, uji kemampuan serangan otomatis, atau bagian dari 
            kampanye politik-ekonomi yang lebih luas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
