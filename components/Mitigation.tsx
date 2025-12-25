'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Server, Users, Zap, Network, Lock } from 'lucide-react';

const infrastructureSolutions = [
  {
    icon: Network,
    title: 'Threat Intelligence Platform',
    description: 'Sistem analisis ancaman real-time untuk mendeteksi dan memprediksi serangan sebelum mencapai target utama'
  },
  {
    icon: Server,
    title: 'Network Scrubbing & Filtering',
    description: 'Infrastruktur khusus untuk menyaring trafik dan memblokir trafik berbahaya sebelum mencapai server utama'
  },
  {
    icon: Users,
    title: 'Kolaborasi BSSN & Stakeholder',
    description: 'Sharing Indikator Kompromi (IOC) antar lembaga nasional/internasional untuk deteksi lebih cepat'
  },
  {
    icon: Zap,
    title: 'Peningkatan Kapasitas Jaringan',
    description: 'Menyediakan bandwidth & arsitektur jaringan yang dapat menangani lonjakan trafik normal maupun serangan'
  },
  {
    icon: Lock,
    title: 'Firewalls & Load Balancing',
    description: 'Memfilter permintaan menggunakan WAF dan solusi lain untuk mengatur perjalanan trafik yang sehat'
  }
];

const proactiveSolutions = [
  {
    icon: ShieldCheck,
    title: 'Simulasi Latihan Insiden',
    description: 'Melatih tim keamanan untuk cepat merespons ketika serangan benar-benar terjadi',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Server,
    title: 'Automasi Patch Management',
    description: 'Menjaga software selalu update sehingga setiap lubang kerentanan cepat ditutup',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Response Playbook',
    description: 'Menyiapkan prosedur respons untuk DDoS atau anomali trafik, termasuk eskalasi dan komunikasi',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Kolaborasi ISP/Cloud',
    description: 'Kerja sama dengan penyedia layanan internet untuk filtering trafik di edge network',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Mitigation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Mitigasi & Pencegahan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategi komprehensif untuk melindungi infrastruktur dari serangan DDoS
          </p>
        </motion.div>

        {/* Infrastructure Solutions */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
              <Server className="w-8 h-8 text-blue-400" />
              Infrastruktur & Teknologi
            </h3>
            <p className="text-gray-400">Solusi teknis untuk penguatan sistem keamanan</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Proactive Solutions */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-green-400" />
              Proaktif & Organisasi
            </h3>
            <p className="text-gray-400">Strategi preventif dan kesiapan tim</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proactiveSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`bg-gradient-to-r ${solution.color} p-3 rounded-lg flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Investment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-2 border-green-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-500/20 p-4 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Investasi Keamanan Siber</h3>
              <p className="text-green-300 text-lg font-semibold">Rp 300 Miliar sejak 2021</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            LPS telah mengalokasikan dana signifikan untuk memperkuat infrastruktur keamanan siber, 
            termasuk implementasi sistem deteksi ancaman, peningkatan kapasitas jaringan, dan 
            pelatihan tim keamanan untuk menghadapi ancaman siber yang terus berkembang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
