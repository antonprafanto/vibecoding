# 🔐 Infrastructure & Security: Jaga Produk Anda Tetap Aman dan Murah

## 📋 Ringkasan Modul
Bayangkan Anda sudah berhasil bikin website atau aplikasi keren, tapi tiba-tiba kena hack atau servernya down pas banyak user datang! Modul ini akan ajarin cara melindungi produk Anda dari ancaman keamanan dan bikin infrastruktur yang hemat tapi handal. Seperti bikin rumah - kita butuh pondasi yang kuat dan sistem keamanan yang bagus biar bisa tidur nyenyak.

## 🎯 Learning Objectives
- [ ] Memahami cara menyimpan "rahasia" aplikasi (password, API key) dengan aman
- [ ] Bisa setup keamanan dasar untuk produk SaaS pemula 
- [ ] Tahu cara deploy aplikasi dengan hosting murah tapi reliable
- [ ] Paham tips-tips hemat biaya infrastruktur untuk indie developer

## 📚 Materi Pembelajaran

### 🔐 **Environment Variables & API Key Handling: Menyimpan "Rahasia" dengan Aman**

#### 💡 Konsep Dasar

Pernahkah Anda melihat password WiFi yang ditempel di dinding kafe? Nah, begitulah jadinya kalau kita salah menyimpan "rahasia" aplikasi kita! API key, password database, dan token pembayaran itu seperti kunci rumah - harus disimpan di tempat aman, bukan ditaruh sembarangan.

**Apa itu Environment Variables?**
Environment variables (atau "env vars") itu seperti lemari rahasia khusus untuk aplikasi kita. Di situ kita simpan semua hal penting seperti:
- Password database
- API key dari OpenAI, Stripe, dll
- URL server production vs development
- Token keamanan

**Mengapa Penting?**
Bayangkan kalau password bank Anda tertulis di status WhatsApp - bahaya kan? Sama halnya dengan API key. Data GitHub 2024 menunjukkan ada **39 juta rahasia aplikasi** yang bocor karena developer salah simpan!

#### 🛠️ Implementasi Praktis

**Setup Environment Variables - Cara Pemula:**

1. **Buat File .env (Lokal Development)**
```bash
# File: .env (JANGAN di-upload ke GitHub!)
DATABASE_PASSWORD=rahasia123
OPENAI_API_KEY=sk-proj-abc123
STRIPE_SECRET_KEY=sk_test_xyz789
```

2. **Atur .gitignore**
```
# File: .gitignore
.env
.env.local
.env.production
node_modules/
```

3. **Cara Pakai di Kode Next.js**
```javascript
// File: lib/openai.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Aman!
});

export default openai;
```

**Tools untuk Mengelola Environment Variables:**

**🏆 Rekomendasi #1: Infisical (Gratis & Aman)**
- **Harga:** Gratis untuk unlimited projects
- **Keunggulan:** End-to-end encryption, mudah digunakan
- **Setup:** 5 menit dengan dashboard visual

```bash
# Install Infisical
npm install -g @infisical/cli

# Login dan sync secrets
infisical login
infisical run -- npm run dev
```

**🏆 Rekomendasi #2: Doppler (Premium tapi Worth It)**
- **Harga:** $3/user/bulan (untuk tim kecil)
- **Keunggulan:** Developer experience terbaik
- **Perfect untuk:** Yang mau fokus coding, gak mau ribet

#### 💻 Contoh Kode: Setup Keamanan API Key

```javascript
// ❌ JANGAN BEGINI - Bahaya!
const apiKey = "sk-proj-abc123def456"; // Langsung di kode

// ✅ BEGINI - Aman!
const apiKey = process.env.OPENAI_API_KEY;

// Validasi environment variable
if (!apiKey) {
  throw new Error('OPENAI_API_KEY belum diatur! Cek file .env');
}
```

**Prompt AI untuk Generate Secure Config:**
```
Saya punya aplikasi Next.js yang pakai:
- OpenAI API
- Supabase database  
- Stripe payment

Buatkan:
1. Template file .env dengan naming convention yang baik
2. Validation code untuk check semua required env vars
3. Production-ready configuration

Include error handling dan security best practices.
```

#### ⚡ Pro Tips

> **💡 Aturan Emas:** Jangan pernah commit file .env ke Git. Kalau sudah terlanjur, segera rotate semua API key yang bocor!

> **💡 Naming Convention:** Gunakan format UPPERCASE_WITH_UNDERSCORE seperti `DATABASE_URL`, `STRIPE_SECRET_KEY`

> **💡 Environment Separation:** Pisahkan development, staging, dan production. Jangan pakai API key production untuk testing!

### 🛡️ **Security Best Practices: Lindungi Produk Indie Anda**

#### 💡 Konsep Dasar

Keamanan untuk indie developer itu seperti pasang kunci pintu rumah - gak perlu sampe alarm laser kayak di bank, tapi basic security harus ada. Yang penting: **cegah 80% serangan dengan effort 20%**.

**5 Ancaman Utama untuk Produk SaaS:**
1. **Broken Authentication** - Login system yang lemah
2. **SQL Injection** - Database bisa dihack lewat input form
3. **API Key Exposure** - Rahasia bocor ke public
4. **Cross-Site Scripting (XSS)** - Script jahat di website
5. **Insecure Direct Object References** - User bisa akses data orang lain

#### 🛠️ Implementasi Praktis

**Authentication - Jangan Bikin Sendiri!**

**🏆 Pilihan #1: Supabase Auth (Recommended)**
- **Harga:** Gratis sampai 50K users
- **Include:** Email/password, Google OAuth, Magic Links
- **Setup Time:** 15 menit

```javascript
// Setup Supabase Auth
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

// Login dengan email
const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'user@example.com',
    password: 'password'
  })
}
```

**🏆 Pilihan #2: Clerk (Premium Experience)**
- **Harga:** $25/bulan untuk 10K users
- **Keunggulan:** UI components cantik, developer experience top
- **Perfect untuk:** Yang mau cepat dan gak mau ribet styling

**Input Validation - Jaga Pintu Masuk**

```javascript
// ❌ BAHAYA - No validation
app.post('/api/users', (req, res) => {
  const query = `INSERT INTO users (name) VALUES ('${req.body.name}')`;
  // SQL Injection risk!
});

// ✅ AMAN - Dengan validation
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});

app.post('/api/users', (req, res) => {
  try {
    const validData = userSchema.parse(req.body);
    // Lanjut proses dengan data yang sudah divalidasi
  } catch (error) {
    return res.status(400).json({ error: 'Input tidak valid' });
  }
});
```

**Rate Limiting - Cegah Spam Attack**

```javascript
// Limit API requests dengan Upstash Redis
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10 seconds
});

export default async function handler(req, res) {
  const identifier = getClientIP(req);
  const { success } = await ratelimit.limit(identifier);
  
  if (!success) {
    return res.status(429).json({ error: "Too many requests" });
  }
  
  // Lanjut proses normal
}
```

#### ⚡ Pro Tips

> **💡 HTTPS Everywhere:** Pastikan semua komunikasi pakai HTTPS. Vercel dan Netlify sudah auto-enable ini.

> **💡 Regular Updates:** Update dependencies secara rutin. Gunakan `npm audit` untuk check vulnerabilities.

> **💡 Backup Strategy:** Setup automated backup database. Supabase punya point-in-time recovery.

### 🚀 **Infrastructure Hacks: Deploy Cepat, Biaya Hemat**

#### 💡 Konsep Dasar

Hosting itu seperti sewa rumah - ada yang mahal tapi mewah, ada yang murah tapi cukup nyaman. Untuk indie developer, kuncinya adalah **balance antara cost, performance, dan simplicity**.

**Jenis-jenis Hosting:**
- **Shared Hosting:** Murah tapi lambat (contoh: cPanel hosting)
- **VPS:** Fleksibel tapi butuh technical skill
- **Platform as a Service (PaaS):** Perfect balance untuk indie (Vercel, Railway)
- **Serverless:** Bayar per usage, cocok untuk traffic tidak stabil

#### 🛠️ Implementasi Praktis

**Frontend Hosting - Vercel vs Netlify**

**🏆 Vercel (Recommended untuk Next.js)**
```yaml
# Harga:
# - Free: 100 deployments/month, 100GB bandwidth
# - Pro: $20/month - unlimited everything
# 
# Keunggulan:
# - Next.js optimization terbaik
# - Edge functions global
# - Analytics built-in
```

**Setup Deploy ke Vercel:**
1. Push code ke GitHub
2. Connect repo di vercel.com
3. Auto-deploy setiap push ke main branch

```javascript
// vercel.json - Custom configuration
{
  "framework": "nextjs",
  "regions": ["sin1"], // Singapore region untuk user Indonesia
  "env": {
    "NEXT_PUBLIC_SUPABASE_URL": "@supabase-url",
    "SUPABASE_SERVICE_KEY": "@supabase-service-key"
  }
}
```

**Backend Hosting - Railway vs Render**

**🏆 Railway (Best Value)**
```yaml
# Harga: $5/month base + usage
# - 8GB RAM, 8 vCPU
# - Postgres database included
# - Docker support
# 
# Perfect untuk: Full-stack apps
```

**Setup Railway:**
1. Connect GitHub repo
2. Auto-detect framework (Next.js, Express, dll)
3. Add environment variables
4. Deploy!

**Database Hosting - Supabase vs PlanetScale**

**🏆 Supabase (All-in-One Solution)**
```yaml
# Free Tier:
# - 500MB database
# - 50K monthly active users
# - Unlimited API requests
# 
# Pro ($25/month):
# - 8GB database  
# - 100K monthly active users
# - Daily backups
```

**Setup Database:**
```sql
-- Auto-generated dengan Supabase Dashboard
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security (RLS) - Built-in security!
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid() = id);
```

#### 💻 Contoh Setup: Full-Stack App dalam 30 Menit

**Tech Stack:**
- Frontend: Next.js + Tailwind CSS
- Backend API: Next.js API routes
- Database: Supabase PostgreSQL
- Auth: Supabase Auth
- Deploy: Vercel + Railway

**Step-by-step:**
1. **Create Next.js app:**
```bash
npx create-next-app@latest my-saas-app --typescript --tailwind --app
cd my-saas-app
```

2. **Add Supabase:**
```bash
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
```

3. **Environment setup:**
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

4. **Deploy to Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Total biaya untuk 10K users: ~$50/bulan**

#### ⚡ Pro Tips

> **💡 CDN Global:** Vercel dan Netlify sudah include CDN global. Website Anda akan cepat dari mana pun diakses.

> **💡 Database Location:** Pilih region database yang dekat dengan mayoritas user Anda. Untuk Indonesia, Singapore ideal.

> **💡 Monitoring Gratis:** Gunakan Vercel Analytics (free) untuk track performance dan user behavior.

## 🧪 Hands-on Practice

### 🔨 **Project Mini: Secure Todo App (60 menit)**

Mari buat aplikasi Todo yang aman dan siap production!

**Yang akan dipelajari:**
- Environment variables management
- User authentication
- Secure database operations  
- Production deployment

#### ✅ **Checklist Completion:**

**Fase 1: Setup Security (20 menit)**
- [ ] Buat project Next.js dengan TypeScript
- [ ] Setup Supabase project dan database
- [ ] Configure environment variables
- [ ] Setup authentication dengan Supabase Auth

**Fase 2: Build Features (25 menit)**  
- [ ] Buat login/register page
- [ ] Implementasi CRUD todo dengan RLS (Row Level Security)
- [ ] Add input validation dengan Zod
- [ ] Test authentication flow

**Fase 3: Deploy & Secure (15 menit)**
- [ ] Deploy ke Vercel
- [ ] Setup production environment variables
- [ ] Test production deployment
- [ ] Enable database backups

**Starter Code dengan AI:**
```
Buatkan aplikasi Todo yang secure dengan:
- Next.js 14 + TypeScript + Tailwind
- Supabase untuk auth dan database
- Row Level Security (RLS) enabled
- Input validation dengan Zod
- Responsive design

Include:
1. Login/register pages
2. Protected todo dashboard
3. CRUD operations dengan error handling
4. Loading states dan optimistic updates
5. Production-ready deployment config

Prioritaskan security dan user experience.
```

## 🤔 Troubleshooting Common Issues

| ❌ Problem | ✅ Solution |
|------------|-------------|
| **API key bocor di GitHub** | Immediately rotate keys, add .env ke .gitignore, gunakan GitHub secret scanning |
| **Database connection error** | Check environment variables, verify network access, test dengan database GUI |
| **Deploy gagal karena environment variables** | Double-check variable names (case-sensitive!), verify values di platform dashboard |
| **Site loading lambat** | Optimize images, enable CDN, check database query performance |
| **Authentication tidak bekerja** | Verify callback URLs, check CORS settings, debug dengan network tab |
| **Biaya hosting membengkak** | Monitor usage dashboard, optimize queries, gunakan caching, pilih region terdekat |

**Debug dengan AI:**
```
Aplikasi saya error dengan pesan: "[PASTE ERROR MESSAGE]"

Stack: Next.js + Supabase + Vercel
Environment: [development/production]

Tolong analisis kemungkinan penyebab dan step-by-step solution.
```

## 📖 Referensi & Resources

### 📚 **Tools Essentials:**
- **Supabase** - Backend-as-a-Service terlengkap (gratis tier generous)
- **Vercel** - Frontend hosting terbaik untuk Next.js (gratis tier cukup)
- **Railway** - Backend hosting murah dan mudah ($5/month)
- **Infisical** - Environment variables management (gratis)

### 🔐 **Security Tools:**
- **GitHub Advanced Security** - Secret scanning gratis untuk public repos
- **Snyk** - Vulnerability scanning untuk dependencies
- **OWASP ZAP** - Security testing tool (gratis dan open source)

### 🎥 **Learning Resources:**
- **Supabase YouTube Channel** - Tutorial official terlengkap
- **Vercel Docs** - Documentation terbaik di industri
- **Web.dev Security** - Google's security best practices

### 🔗 **Cost Optimization:**
- **Vercel Pricing Calculator** - Estimate hosting costs
- **Supabase Pricing** - Transparent database pricing
- **Upstash** - Pay-per-request Redis dan rate limiting

## 📖 Glosarium

| Term | Definition |
|------|------------|
| **Environment Variables** | Variabel konfigurasi yang berisi informasi sensitif seperti password dan API key |
| **API Key** | Kunci akses untuk menggunakan layanan eksternal (OpenAI, Stripe, dll) |
| **Row Level Security (RLS)** | Fitur database yang membatasi akses data berdasarkan user yang login |
| **CDN** | Content Delivery Network - jaringan server global untuk mempercepat loading website |
| **Rate Limiting** | Pembatasan jumlah request API per waktu untuk mencegah abuse |
| **CORS** | Cross-Origin Resource Sharing - aturan keamanan browser untuk API access |
| **Edge Functions** | Kode yang berjalan di edge locations (dekat user) untuk performance optimal |
| **Serverless** | Model hosting dimana server diatur otomatis, bayar per usage |

---
📌 **Next:** [Modul 5: Optimization & Tracking - Analisa dan Tingkatkan Performa Produk](https://github.com/vibecoding/bootcamp/blob/main/modul5.md)
