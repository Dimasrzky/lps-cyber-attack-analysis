'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, AlertCircle, DollarSign, Users } from 'lucide-react';

const impacts = [
  {
    icon: AlertCircle,
    title: 'Dampak Operasional',
    color: 'from-red-500 to-orange-500',
    items: [
      'Potensi gangguan ketersediaan layanan digital',
      'Risiko downtime jika tidak ditangani dengan cepat',
      'Peningkatan beban sistem infrastruktur'
    ]
  },
  {
    icon: Users,
    title: 'Dampak Reputasi',
    color: 'from-yellow-500 to-orange-500',
    items: [
      'Menurunnya kepercayaan publik terhadap keamanan sistem keuangan',
      'Kekhawatiran stakeholder atas stabilitas institusi',
      'Potensi kehilangan kredibilitas kelembagaan'
    ]
  },
  {
    icon: DollarSign,
    title: 'Dampak Finansial',
    color: 'from-purple-500 to-pink-500',
    items: [
      'Investasi Rp300 miliar untuk penguatan keamanan siber sejak 2021',
      'Biaya bandwidth dan infrastruktur saat trafik meningkat',
      'Biaya mitigasi dan recovery pasca serangan'
    ]
  },
  {
    icon: TrendingDown,
    title: 'Risiko Lanjutan',
    color: 'from-blue-500 to-cyan-500',
    items: [
      'Membuka peluang untuk serangan siber lanjutan',
      'Penyamaran untuk serangan lain saat pertahanan sibuk',
      'Eksploitasi kerentanan yang terekspos selama serangan'
    ]
  }
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Dampak & Kerugian</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meskipun sistem LPS berhasil bertahan, dampak serangan tetap signifikan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-r ${impact.color} p-4 rounded-xl shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      {impact.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {impact.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + itemIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${impact.color} mt-2 flex-shrink-0`} />
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-blue-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/20 p-3 rounded-lg flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Catatan Penting</h3>
              <p className="text-gray-300 leading-relaxed">
                Walaupun LPS tidak mengkonfirmasi adanya data yang bocor atau layanan berhenti total, 
                potensi kerugian non-langsung tetap ada dalam bentuk biaya mitigasi, penurunan reputasi, 
                dan risiko kelembagaan jangka panjang.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
