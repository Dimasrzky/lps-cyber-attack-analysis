'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Globe, Activity, Server } from 'lucide-react';

const attackDetails = [
  {
    icon: Zap,
    title: 'Jenis Serangan',
    description: 'Distributed Denial of Service (DDoS)',
    details: 'Serangan yang membanjiri server dengan trafik masif sehingga layanan tidak dapat diakses oleh pengguna yang sah'
  },
  {
    icon: Activity,
    title: 'Volume Serangan',
    description: '2,2–2,5 Miliar Serangan',
    details: 'Total serangan dalam periode 17 Juni - 3 Juli 2025'
  },
  {
    icon: Server,
    title: 'Puncak Intensitas',
    description: '34 Juta Serangan/Detik',
    details: 'Terjadi pada 25 Juni 2025 dengan trafik mencapai 960 Gbps'
  },
  {
    icon: Globe,
    title: 'Sumber Serangan',
    description: '40+ Negara',
    details: 'Termasuk Indonesia, Vietnam, AS, Jerman, dan Belanda menggunakan botnet terdistribusi'
  }
];

export default function AttackForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="analysis" className="py-20 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Bentuk Serangan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analisis mendalam tentang karakteristik dan skala serangan DDoS terhadap LPS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {attackDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-blue-500/20 p-3 rounded-lg"
                  >
                    <Icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold text-blue-400 mb-3">
                      {item.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Server className="w-6 h-6 text-purple-400" />
            Detail Teknis Serangan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Target Serangan</h4>
              <p className="text-gray-300">
                Serangan DDoS menargetkan ketersediaan layanan, bukan pencurian data atau gangguan internal sistem
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Metode</h4>
              <p className="text-gray-300">
                Memanfaatkan botnet besar dan berbagai alamat IP dari berbagai negara untuk melewati filter sederhana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
