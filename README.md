# Analisis Serangan Siber LPS Indonesia 2025

Website informatif tentang analisis serangan DDoS yang dialami Lembaga Penjamin Simpanan (LPS) Indonesia pada Juni-Juli 2025.

## 🚀 Fitur

- **Hero Section** dengan animasi particles dan statistik overview
- **Bentuk Serangan** - Detail teknis tentang serangan DDoS
- **Timeline Interaktif** - Kronologi serangan dari awal hingga akhir
- **Dampak & Kerugian** - Analisis dampak operasional, reputasi, dan finansial
- **Penyebab Serangan** - Faktor teknis dan strategis
- **Mitigasi & Pencegahan** - Strategi komprehensif untuk proteksi
- **Smooth Animations** menggunakan Framer Motion
- **Responsive Design** untuk semua ukuran layar

## 🛠️ Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icons
- **Railway** - Hosting & deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚢 Deploy to Railway

### Method 1: Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Method 2: Using Railway Dashboard

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your repository
5. Railway will automatically detect the Dockerfile and deploy

### Environment Variables (Optional)

No environment variables required for basic deployment.

## 📁 Project Structure

```
lps-cyber-attack-analysis/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── AttackForm.tsx      # Attack details
│   ├── Timeline.tsx        # Attack timeline
│   ├── Impact.tsx          # Impact analysis
│   ├── Causes.tsx          # Causes analysis
│   ├── Mitigation.tsx      # Mitigation strategies
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── Dockerfile              # Docker configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Content

Edit the content in component files:
- `components/AttackForm.tsx` - Attack details
- `components/Impact.tsx` - Impact data
- `components/Causes.tsx` - Cause analysis
- `components/Mitigation.tsx` - Mitigation strategies

## 📊 Data Sources

- Bisnis Finansial
- Antara News
- Universitas Gadjah Mada
- Canadian Centre for Cyber Security
- Cloudflare
- IADB Publications

## 📝 License

This project is for educational and informational purposes.

## 👨‍💻 Developer

Created with ❤️ using Next.js and Railway

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Railway Documentation](https://docs.railway.app)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
