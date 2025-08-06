# 💐 Wedding Planner - LŌŌVIO

A comprehensive Indian wedding planning website built with Next.js 15, featuring elegant animations, cultural authenticity, and complete wedding services. From traditional ceremonies to destination weddings, we create magical celebrations that honor heritage and exceed expectations.

## 🚀 Live Demo

[View Live Website](https://your-domain.com) <!-- Replace with your actual domain -->

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Smooth Scrolling**: Lenis integration for buttery-smooth navigation
- **Animated Interactions**: Framer Motion viewport animations with staggered entrances
- **Indian Wedding Theme**: Authentic cultural design elements and colors
- **Interactive Elements**: Hover effects, floating animations, and micro-interactions

### 📱 Complete Website Pages
- **Landing Page**: Hero section with comprehensive service introduction
- **About Page**: Detailed company story and expertise showcase
- **Gallery Page**: Curated wedding photography in organized categories
- **Contact Page**: Professional contact form with business information
- **Wedding Venues**: Interactive venue browsing with detailed information
- **Service Pages**: Six comprehensive service offerings:
  - 💒 **Wedding Planning**: Full-service traditional Indian wedding coordination
  - 🎯 **Event Coordination**: Day-of coordination and event management
  - 🏝️ **Destination Weddings**: Location-based celebrations across India and beyond
  - 🕉️ **Cultural Ceremonies**: Regional traditions and authentic ritual coordination
  - 🏢 **Corporate Events**: Business celebrations with Indian hospitality
  - 💬 **Consultation Services**: Expert guidance and planning advice

### 🛠 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and development experience
- **Tailwind CSS**: Custom Indian wedding design system
- **Image Optimization**: Next.js Image with lazy loading and blur placeholders
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations
- **Production Ready**: ESLint compliance, build optimization, and static generation

## 🎨 Design System

### 🖋 Typography
```css
/* Primary Fonts */
--font-homemade-apple: 'Homemade Apple', cursive;     /* Decorative headings */
--font-marcellus: 'Marcellus', serif;                 /* Section headings */
--font-montserrat: 'Montserrat', sans-serif;          /* Body text & UI */

/* Font Usage */
- Homemade Apple: Hero titles, decorative elements
- Marcellus: Section headings, client names
- Montserrat: Paragraphs, buttons, navigation
```

### 🎨 Color Palette
```css
/* Indian Wedding Theme Colors */
:root {
  /* Primary Colors */
  --primary-background: #ffffff;           /* Pure white background */
  --secondary-background: #f6f4ec;         /* Warm cream (#f6f4ec) */
  
  /* Text Colors */
  --primary-heading: #2d3748;             /* Main headings */
  --secondary-heading: #4a5568;           /* Subheadings */
  --primary-paragraphs: #718096;          /* Body text */
  --secondary-paragraphs: #a0aec0;        /* Secondary text */
  
  /* Accent Colors */
  --primary-accent: #e53e3e;              /* Primary buttons, highlights */
  --secondary-accent: #de967d;            /* Indian wedding gold (#de967d) */
  --secondary-accent-rgb: 222, 150, 125;  /* RGB for opacity variants */
  
  /* UI Elements */
  --primary-border: #e2e8f0;              /* Borders, dividers */
  --secondary-border: #edf2f7;            /* Subtle borders */
}

/* Indian Wedding Specific Classes */
.secondary-accent { color: #de967d; }
.secondary-background { background-color: #f6f4ec; }
```

### 🎭 Component Styling

#### Wedding Button Component
- **Wedding Variant**: Gold gradient (#de967d) with Indian wedding aesthetics
- **Wedding Light**: Outlined version with cultural gold border
- **Hover Effects**: Elegant transitions maintaining traditional feel

#### Service Cards & Sections
- **Cultural Design**: Cards reflecting Indian wedding elegance
- **Pricing Display**: Indian Rupee (₹) formatting with regional pricing
- **Service Imagery**: Traditional and modern Indian wedding visuals

## 🏗 Project Structure

```
src/
├── app/
│   ├── (landing)/
│   │   ├── _components/
│   │   │   ├── Contact/           # Contact section component
│   │   │   ├── Footer/            # Website footer
│   │   │   ├── Gallery/           # Landing page gallery
│   │   │   ├── Hero/              # Hero section
│   │   │   ├── IntroSection/      # Animated introduction
│   │   │   ├── Navbar/            # Navigation with dropdown menus
│   │   │   ├── Offerings/         # Service packages showcase
│   │   │   ├── Services/          # Core services overview
│   │   │   ├── Stats/             # Statistics with animations
│   │   │   └── TestimonialSection/ # Client testimonials
│   │   └── page.tsx              # Landing page
│   ├── about/
│   │   └── page.tsx              # About us page
│   ├── contact/
│   │   └── page.tsx              # Contact form page
│   ├── events/
│   │   └── weddings/
│   │       ├── [id]/
│   │       │   ├── _components/
│   │       │   │   ├── BookingForm.tsx      # Venue booking form
│   │       │   │   ├── ImageGallery.tsx     # Venue image gallery
│   │       │   │   └── LightboxGallery.tsx  # Full-screen image viewer
│   │       │   └── page.tsx      # Individual venue page
│   │       └── page.tsx          # Venue listing page
│   ├── gallery/
│   │   └── page.tsx              # Wedding photography gallery
│   ├── services/
│   │   ├── consultation/
│   │   │   └── page.tsx          # Wedding planning consultation
│   │   ├── corporate/
│   │   │   └── page.tsx          # Corporate events planning
│   │   ├── cultural/
│   │   │   └── page.tsx          # Cultural ceremonies
│   │   ├── destination/
│   │   │   └── page.tsx          # Destination weddings
│   │   ├── event-coordination/
│   │   │   └── page.tsx          # Event coordination services
│   │   └── wedding-planning/
│   │       └── page.tsx          # Full wedding planning services
│   ├── globals.css               # Global styles & Tailwind
│   ├── layout.tsx               # Root layout with navigation
│   └── page.tsx                 # Root redirect to landing
├── components/
│   ├── ui/                      # Shadcn UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── tabs.tsx
│   ├── DecorativeLine.tsx       # Animated decorative elements
│   ├── LenisProvider.tsx        # Smooth scrolling provider
│   └── WeddingButton.tsx        # Indian wedding themed button
└── lib/
    └── utils.ts                 # Utility functions & helpers
```

## 💍 Service Offerings

### 🏛️ Wedding Planning Services
- **Complete Planning**: Full-service coordination from engagement to reception
- **Venue Selection**: Expert venue scouting and booking across India
- **Cultural Integration**: Authentic regional traditions and rituals
- **Vendor Coordination**: Trusted network of wedding professionals
- **Timeline Management**: Detailed scheduling and day-of coordination
- **Budget Management**: Transparent pricing with value optimization

### 🎯 Specialized Services
1. **Event Coordination** (₹75K - ₹2L): Day-of coordination and management
2. **Destination Weddings** (₹12L - ₹45L): Exotic locations with full logistics
3. **Cultural Ceremonies** (₹1.5L - ₹6L): Regional traditions and authentic rituals
4. **Corporate Events** (₹3L - ₹15L): Business celebrations with Indian hospitality
5. **Consultation** (₹15K - ₹85K): Expert guidance and planning advice

### 📍 Popular Destinations
- **Rajasthan**: Palace weddings in Udaipur, Jodhpur, Jaipur
- **Goa**: Beach resorts with Indian cultural elements
- **Kerala**: Backwater venues with traditional ceremonies
- **Himachal Pradesh**: Mountain weddings in scenic locations
- **International**: Thailand, Bali, Dubai with Indian customs

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation
```bash
# Clone the repository
git clone https://github.com/Pawandasila/wedding-planner.git
cd wedding-planner

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development
```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Export static files (if needed)
npm run export
```

## 📦 Key Dependencies

### Core Framework
- **Next.js 15**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript**: Static type checking

### Styling & UI
- **Tailwind CSS**: Custom Indian wedding design system
- **Shadcn/ui**: High-quality React components with wedding theme
- **Class Variance Authority (CVA)**: Wedding button variant management

### Animations & Interactions
- **Framer Motion**: Smooth animations with cultural elegance
- **Lenis**: Buttery smooth scrolling experience
- **Viewport Animations**: Elements animate on scroll with staggered timing

### Fonts & Cultural Elements
- **Google Fonts**: Marcellus (headings), Montserrat (body)
- **Indian Aesthetics**: Culturally authentic design elements
- **Responsive Typography**: Optimized for all devices

## 🎯 Performance Optimizations

### Image Optimization
- **Next.js Image Component**: Automatic WebP conversion, lazy loading
- **Blur Placeholders**: Smooth loading transitions
- **Responsive Images**: Optimized for different screen sizes

### Code Splitting
- **Dynamic Imports**: Components loaded on demand
- **Route-based Splitting**: Automatic code splitting by Next.js

### SEO & Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive image alt attributes
- **Keyboard Navigation**: Full keyboard accessibility support

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repository to Vercel for automatic deployments
```

### Other Platforms
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Digital Ocean**: VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**LŌŌVIO - Indian Wedding Specialists**
- Website: [loovio-wedding.com](https://loovio-wedding.com)
- Email: hello@loovio-wedding.com
- Phone: +91 98765 43210
- GitHub: [@Pawandasila](https://github.com/Pawandasila)

**Specializing In:**
- Traditional Indian Weddings
- Destination Wedding Planning
- Cultural Ceremony Coordination
- Corporate Event Management
- Wedding Consultation Services

## 🙏 Acknowledgments

- **Next.js Team** for the exceptional React framework
- **Vercel** for seamless hosting and deployment
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for beautiful animations
- **Indian Wedding Community** for cultural authenticity guidance
- **Wedding Photography** contributors for stunning visuals

---

**Made with ❤️ for couples celebrating their sacred journey**

*Honoring traditions, creating memories, celebrating love* 🕉️💒
