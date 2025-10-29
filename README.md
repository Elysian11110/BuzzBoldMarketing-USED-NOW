# 🚀 BuzzBold - Award-Winning Marketing Agency Website

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)

> A stunning, high-performance marketing agency website built with Next.js 16, featuring advanced animations, modern design, and best practices for the world's leading marketing agency.

![BuzzBold Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 Modern Design
- **Gradient-based color scheme** with orange, red, and pink accents
- **Glassmorphism effects** with backdrop blur
- **Animated gradient orbs** floating in the background
- **Custom scrollbar** with gradient styling
- **Responsive design** optimized for all devices

### 🚀 Performance
- Built with **Next.js 16** (App Router)
- **Server-side rendering** for optimal SEO
- **Image optimization** with Next.js Image component
- **Code splitting** for faster load times
- **Production-ready** configuration

### 🎬 Advanced Animations
- **GSAP ScrollTrigger** for scroll-based animations
- **Parallax effects** on scroll
- **Staggered animations** for card reveals
- **Smooth transitions** throughout the site
- **Counter animations** for statistics
- **Hover effects** with scale and glow

### 📱 Sections

1. **Hero Section**
   - Eye-catching headline with gradient text
   - Animated statistics bar
   - Floating gradient orbs
   - Dual CTAs for conversion
   - Parallax scroll effects

2. **Stats Section**
   - Animated counter numbers
   - 4 key performance indicators
   - Card-based layout with gradients
   - Scroll-triggered animations

3. **Services Section**
   - 6 comprehensive service offerings
   - Icon-based cards with gradients
   - Hover effects with border animations
   - Detailed descriptions

4. **Portfolio Section**
   - Filterable project gallery
   - Category-based filtering
   - Image overlays with project details
   - Results-driven case studies
   - Smooth filter transitions

5. **Testimonials Section**
   - 6 client testimonials
   - 5-star ratings
   - Client avatars with gradient borders
   - Trust badges from leading brands

6. **Contact Section**
   - Modern contact form
   - Input validation ready
   - Glassmorphism design
   - Smooth scroll animations

7. **Footer**
   - Newsletter subscription
   - Quick links navigation
   - Social media icons with gradients
   - Contact information
   - Scroll-to-top button

### 🛠️ Tech Stack

#### Core
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

#### UI Components
- **Radix UI** - Accessible component primitives
  - Navigation Menu
  - Label
  - Slot
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - Re-usable component system

#### Animation
- **GSAP 3.13** - Professional animation library
- **ScrollTrigger** - Scroll-based animations

#### Utilities
- **clsx** - Conditional classNames
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/buzzbold.git
cd buzzbold
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
buzzbold/
├── app/
│   ├── components/
│   │   ├── NewHeader.tsx      # Navigation header with mobile menu
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── Stats.tsx           # Statistics with counter animations
│   │   ├── Services.tsx        # Services grid section
│   │   ├── Portfolio.tsx       # Filterable portfolio gallery
│   │   ├── Testimonials.tsx    # Client testimonials
│   │   ├── Contact.tsx         # Contact form
│   │   └── Footer.tsx          # Footer with newsletter
│   ├── globals.css             # Global styles and utilities
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page
├── components/
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── tailwind.config.mjs         # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Colors

The color scheme uses gradient combinations. Edit `app/globals.css` to customize:

```css
--primary: 10 90% 55%;        /* Orange */
--accent: 280 100% 70%;       /* Pink/Purple */

.gradient-text {
  @apply bg-gradient-to-r from-orange-500 via-red-500 to-pink-500;
}
```

### Content

Update content in the component files:

- **Hero**: `app/components/Hero.tsx` - Headlines and CTAs
- **Services**: `app/components/Services.tsx` - Service offerings
- **Portfolio**: `app/components/Portfolio.tsx` - Project showcases
- **Testimonials**: `app/components/Testimonials.tsx` - Client reviews
- **Contact**: `app/components/Contact.tsx` - Contact form
- **Footer**: `app/components/Footer.tsx` - Footer content

### Images

Replace Unsplash placeholder images with your own:

1. Add images to `public/images/`
2. Update image URLs in components
3. Use Next.js Image component for optimization

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Build for production
npm run build
```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/buzzbold)

### Deploy to Other Platforms

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the Amplify Console
- **Docker**: Create a Dockerfile for containerization
- **Static Export**: Run `next build && next export`

## 🎯 Performance Optimization

### Already Implemented

✅ Next.js Image optimization  
✅ Code splitting & lazy loading  
✅ CSS minification  
✅ Font optimization with Geist  
✅ Scroll-based lazy animations  
✅ Production build optimization  

### Additional Recommendations

- [ ] Add Progressive Web App (PWA) support
- [ ] Implement ISR (Incremental Static Regeneration)
- [ ] Add image lazy loading with blur placeholders
- [ ] Optimize GSAP bundle size
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Implement caching strategies

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment variables:

```env
# Email service (for contact form)
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# API endpoints
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### SEO Configuration

Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Agency | Tagline",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],
  // ... more metadata
};
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **Radix UI** - For accessible components
- **GSAP** - For powerful animations
- **Unsplash** - For beautiful placeholder images
- **Lucide** - For the icon library
- **Tailwind CSS** - For the utility-first CSS framework

## 📞 Support

For support, email hello@buzzbold.com or join our Slack channel.

## 🗺️ Roadmap

- [x] Initial website launch
- [x] Responsive design
- [x] Advanced animations
- [x] Portfolio section
- [x] Testimonials
- [ ] Blog integration
- [ ] Case studies detail pages
- [ ] Multi-language support
- [ ] Dark/Light mode toggle
- [ ] Admin dashboard
- [ ] CMS integration (Contentful/Sanity)

## 📊 Analytics & Metrics

### Key Performance Indicators

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Page Load Time**: < 2 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds
- **Mobile Friendly**: 100%

---

<div align="center">
  <strong>Built with ❤️ by BuzzBold Team</strong>
  <br>
  <sub>Making bold brands since 2024</sub>
</div>