'use client';

import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">LPS Cyber Analysis</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Analisis komprehensif serangan siber terhadap Lembaga Penjamin Simpanan Indonesia, 
              disusun berdasarkan data dan referensi dari berbagai sumber terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {['Bentuk Serangan', 'Dampak & Kerugian', 'Penyebab', 'Mitigasi'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Sumber Referensi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Bisnis Finansial</li>
              <li>• Antara News</li>
              <li>• Universitas Gadjah Mada</li>
              <li>• Canadian Centre for Cyber Security</li>
              <li>• Cloudflare</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 LPS Cyber Attack Analysis. Data accurate as of December 2025.
          </p>
          
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
