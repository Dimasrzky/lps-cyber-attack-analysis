# 🚀 Panduan Deploy ke Railway

## Persiapan

### 1. Buat Akun Railway
1. Kunjungi [railway.app](https://railway.app)
2. Sign up menggunakan GitHub account
3. Verifikasi email Anda

### 2. Install Railway CLI (Opsional)
```bash
npm i -g @railway/cli
```

## Metode Deploy

### 🔷 Metode 1: Deploy via GitHub (RECOMMENDED)

#### Langkah 1: Push ke GitHub
```bash
# Initialize git (jika belum)
git init

# Add semua file
git add .

# Commit
git commit -m "Initial commit: LPS Cyber Attack Analysis"

# Buat repository baru di GitHub, lalu:
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Langkah 2: Deploy di Railway
1. Login ke [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Pilih **"Deploy from GitHub repo"**
4. Authorize Railway untuk akses GitHub
5. Pilih repository Anda
6. Railway akan otomatis:
   - Detect Dockerfile
   - Build image
   - Deploy aplikasi
   - Generate URL publik

#### Langkah 3: Konfigurasi (Opsional)
1. Di Railway dashboard, click project Anda
2. Tab **"Settings"**:
   - Custom domain (jika ada)
   - Environment variables (jika perlu)
3. Tab **"Deployments"**:
   - Lihat logs
   - Monitor build process

### 🔷 Metode 2: Deploy via Railway CLI

```bash
# Login
railway login

# Link ke project baru
railway init

# Deploy
railway up

# Buka aplikasi
railway open
```

### 🔷 Metode 3: Deploy Manual via Docker

```bash
# Build Docker image
docker build -t lps-analysis .

# Run locally untuk test
docker run -p 3000:3000 lps-analysis

# Push ke Railway registry
railway login
railway link
railway up
```

## Setelah Deploy

### ✅ Verifikasi Deployment
1. Railway akan memberikan URL seperti: `https://your-app.up.railway.app`
2. Buka URL tersebut
3. Pastikan semua section berfungsi:
   - Hero dengan animasi
   - Timeline interaktif
   - Semua bagian analisis

### 🔧 Troubleshooting

#### Build Failed
```bash
# Check logs di Railway dashboard
# Atau via CLI:
railway logs
```

#### Out of Memory
Di Railway dashboard > Settings:
- Upgrade plan jika perlu
- Atau optimize build dengan mengurangi dependencies

#### Port Issues
Railway otomatis detect port 3000 dari Dockerfile.
Jika ada masalah, set environment variable:
```
PORT=3000
```

### 📊 Monitoring

Di Railway Dashboard Anda bisa monitor:
- **Metrics**: CPU, Memory, Network usage
- **Logs**: Real-time application logs  
- **Deployments**: History semua deployment

## Custom Domain (Opsional)

### Menggunakan Domain Sendiri

1. Di Railway Dashboard > Settings > Domains
2. Click **"Add Domain"**
3. Masukkan domain Anda (contoh: `lps-analysis.com`)
4. Railway akan berikan DNS records:
   ```
   Type: CNAME
   Name: @
   Value: your-app.up.railway.app
   ```
5. Tambahkan record tersebut di DNS provider Anda
6. Tunggu propagasi DNS (5-60 menit)

## Update & Redeploy

### Auto Deploy (GitHub Method)
Setiap kali Anda push ke GitHub:
```bash
git add .
git commit -m "Update: fix animation"
git push
```
Railway otomatis rebuild dan redeploy!

### Manual Deploy (CLI Method)
```bash
railway up
```

## Rollback

Jika deployment baru bermasalah:
1. Railway Dashboard > Deployments
2. Pilih deployment yang stabil sebelumnya
3. Click **"Redeploy"**

## Tips Optimization

### 1. Build Time
- Railway free tier: unlimited builds
- Optimize dependencies di package.json
- Use caching untuk faster builds

### 2. Performance
- Next.js sudah optimal dengan output: 'standalone'
- Images otomatis optimized
- Gzip compression enabled

### 3. Cost
- Railway free tier: $5 credit/month
- Estimated usage untuk app ini: ~$3-4/month
- Monitor di Usage tab

## Support

Jika ada masalah:
- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- GitHub Issues: Buat issue di repo Anda

## Checklist Sebelum Deploy ✓

- [ ] All dependencies installed
- [ ] Build berhasil lokal (`npm run build`)
- [ ] Dockerfile tested
- [ ] Repository pushed ke GitHub
- [ ] Railway account created
- [ ] Project configured di Railway

Selamat! Website Anda sekarang live! 🎉
