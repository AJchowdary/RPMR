# RPMR Website - Static Deployment

Professional website for Renovations Painting and Masonry Restorations LLC, optimized for Vercel deployment with Cloudinary CDN and Web3Forms email integration.

## 🚀 Quick Start

1. **Install dependencies:** `cd frontend && npm install`
2. **Start development:** `npm start`
3. **Build for production:** `npm run build`
4. **Deploy to Vercel:** Push to GitHub and connect to Vercel

## 📋 Project Structure

```
RPMR-main/
├── frontend/                    # React application
│   ├── public/
│   ├── src/
│   │   ├── config/             # Configuration files
│   │   │   ├── imageConfig.js  # Cloudinary image URLs
│   │   │   └── web3formsConfig.js # Email service config
│   │   ├── pages/              # Page components
│   │   ├── components/         # Reusable components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities
│   │   ├── utils/              # Mock data (business info)
│   │   ├── App.js              # Main app component
│   │   └── index.js            # Entry point
│   ├── package.json
│   └── .env.example
├── memory/                      # Project documentation
│   └── PRD.md                  # Product requirements
├── vercel.json                 # Vercel deployment config
├── QUICK_START.md              # 3-step deployment guide
├── DEPLOYMENT_GUIDE.md         # Detailed setup instructions
├── PRODUCTION_CHECKLIST.md     # Pre-launch checklist
└── README.md                   # This file
```

## 🎯 Features

- ✅ **Static Site** - No backend required
- ✅ **Cloudinary CDN** - Fast image delivery globally
- ✅ **Web3Forms Integration** - Contact form emails
- ✅ **Spam Protection** - Honeypot field + validation
- ✅ **Lazy Loading** - Images load on-demand
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **1-Year Caching** - Static assets cached globally
- ✅ **SEO Ready** - Proper semantic HTML, meta tags
- ✅ **HTTPS** - Automatic with Vercel
- ✅ **Zero Cost** - Uses free tiers of all services

## 🔌 Integrations

### Cloudinary (Image Hosting)
- **Cloud Name:** dqjkpe5kx
- **Type:** Free tier (25GB storage)
- **Features:** Auto-optimization, CDN, responsive images

### Web3Forms (Email Service)
- **Type:** Free tier (250 submissions/month)
- **Features:** Spam protection, validation, instant delivery

### Vercel (Hosting)
- **Type:** Free tier (unlimited deployments)
- **Features:** Global CDN, auto-HTTPS, automatic deployments from GitHub

## 📖 Documentation

Start here based on your need:

- **`QUICK_START.md`** - 3-step deployment guide (recommended)
- **`DEPLOYMENT_GUIDE.md`** - Detailed setup & image management
- **`PRODUCTION_CHECKLIST.md`** - Pre-launch verification items
- **`IMPLEMENTATION_SUMMARY.md`** - Technical implementation details

## 🛠️ Development

### Prerequisites
- Node.js 16+ and npm

### Setup
```bash
cd frontend
npm install
npm start
```

Visit http://localhost:3000

### Build
```bash
cd frontend
npm run build
```

Output goes to `frontend/build/`

## 🚢 Deployment

### To Vercel
1. Push code to GitHub
2. Visit vercel.com and import repo
3. Vercel auto-detects React app
4. Click Deploy

See `QUICK_START.md` for step-by-step guide.

## 🖼️ Managing Images

All images are managed via Cloudinary. To update gallery photos:

1. Upload images to Cloudinary dashboard
2. Edit `frontend/src/config/imageConfig.js` with public ID
3. Commit to GitHub
4. Vercel auto-redeploys

No database, no backend, no extra setup needed!

## 💌 Contact Form

The contact form uses Web3Forms for email delivery:

1. User fills form on `/contact` page
2. Form validated (phone format, required fields)
3. Honeypot spam check
4. Submitted to Web3Forms API
5. Email delivered to inbox within seconds
6. Success message shown to user

## 🔒 Security

- ✅ HTTPS enforced (Vercel)
- ✅ Security headers configured
- ✅ Spam protection (honeypot field)
- ✅ Form validation
- ✅ No sensitive data exposed

## 📊 Performance

- **Images:** Cloudinary CDN (300+ edge locations)
- **Caching:** 1-year TTL for static assets
- **Loading:** Lazy loading on images
- **Format:** Auto-optimized (WEBP for modern browsers)
- **Size:** ~350KB total source code

## 🎨 Tech Stack

- **Frontend:** React 19, React Router v7
- **Styling:** Tailwind CSS 3, Shadcn UI
- **Deployment:** Vercel
- **Images:** Cloudinary
- **Email:** Web3Forms
- **Build:** Create React App (craco)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (all)

## 💰 Costs

| Service | Tier | Cost |
|---------|------|------|
| Vercel | Free | $0 |
| Cloudinary | Free (25GB) | $0 |
| Web3Forms | Free (250/mo) | $0 |
| **Total** | | **$0/month** |

## 📝 Environment Variables

Optional (most settings are configured):
```
REACT_APP_BACKEND_URL=  # Optional, for future backend
```

## ❓ FAQ

**Q: Do I need a backend?**  
A: No, this is fully static. Frontend only.

**Q: How do I add images to the gallery?**  
A: Edit `frontend/src/config/imageConfig.js`, commit, and Vercel auto-deploys.

**Q: Where do contact form emails go?**  
A: To the email configured in your Web3Forms dashboard.

**Q: How many images can I host?**  
A: Unlimited on Cloudinary free tier (25GB storage).

**Q: Is it secure?**  
A: Yes. HTTPS, security headers, spam protection, no database.

**Q: What's the deployment time?**  
A: 5 minutes from GitHub push to live site.

## 📞 Support

Refer to the included documentation:
- `QUICK_START.md` for deployment
- `DEPLOYMENT_GUIDE.md` for detailed help
- `PRODUCTION_CHECKLIST.md` for verification

## 🔄 Maintenance

- **Images:** Update via Cloudinary dashboard
- **Content:** Edit React components
- **Config:** Edit `imageConfig.js` or `web3formsConfig.js`
- **Deployment:** Push to GitHub, Vercel auto-deploys

## 📄 License

Project by Renovations Painting and Masonry Restorations LLC

---

**Status:** ✅ Production Ready  
**Last Updated:** February 7, 2026  
**Deploy Time:** < 5 minutes  
**Cost:** Free tier (fully functional)  

Start with `QUICK_START.md` to deploy! 🚀
