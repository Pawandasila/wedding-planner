# 💐 Wedding Planner - LŌŌVIO

A modern, responsive Indian wedding planning website built with Next.js 15, featuring elegant animations, smooth scrolling, and comprehensive wedding services showcase.

## 🚀 Live Demo

[View Live Website](https://your-domain.com) <!-- Replace with your actual domain -->

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Smooth Scrolling**: Implemented with Lenis for buttery-smooth page navigation
- **Animated Interactions**: Framer Motion viewport animations with staggered entrances
- **Professional Carousel**: Swiper.js integration for testimonials with fade effects
- **Interactive Elements**: Hover effects, floating animations, and micro-interactions

### 📱 Sections & Components
- **Hero Section**: Full-screen landing with call-to-action
- **Intro Section**: Animated introduction with decorative elements
- **Services Section**: Wedding services with image hover effects
- **Gallery Section**: Pinterest-style masonry layout (desktop) / Clean grid (mobile)
- **Offerings Section**: Comprehensive service packages with modern card design
- **Stats Section**: Animated counters with viewport triggers
- **Testimonials**: Professional carousel with client reviews and ratings
- **Navigation**: Responsive navbar with dropdown menus and mobile overlay

### 🛠 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Image Optimization**: Next.js Image component with lazy loading and blur placeholders
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
/* CSS Custom Properties */
:root {
  /* Primary Colors */
  --primary-background: #fefefe;           /* Main background */
  --secondary-background: #f8f9fa;         /* Section backgrounds */
  
  /* Text Colors */
  --primary-heading: #2d3748;             /* Main headings */
  --secondary-heading: #4a5568;           /* Subheadings */
  --primary-paragraphs: #718096;          /* Body text */
  --secondary-paragraphs: #a0aec0;        /* Secondary text */
  
  /* Accent Colors */
  --primary-accent: #e53e3e;              /* Primary buttons, highlights */
  --secondary-accent: #d69e2e;            /* Secondary accents, decorative */
  --secondary-accent-rgb: 214, 158, 46;   /* RGB for opacity variants */
  
  /* UI Elements */
  --primary-border: #e2e8f0;              /* Borders, dividers */
  --secondary-border: #edf2f7;            /* Subtle borders */
  --secondary-accent-opacity-10: rgba(214, 158, 46, 0.1);
  --secondary-accent-opacity-20: rgba(214, 158, 46, 0.2);
  --secondary-accent-opacity-30: rgba(214, 158, 46, 0.3);
  --secondary-accent-opacity-50: rgba(214, 158, 46, 0.5);
}
```

### 🎭 Component Styling

#### Buttons
- **Wedding Variant**: Gold gradient with hover color-swap effect
- **Wedding Light**: Outlined version with gold border
- **Responsive Sizing**: Adaptive padding and text size across devices

#### Cards & Sections
- **Shadow System**: Layered shadows (shadow-lg, shadow-xl, shadow-2xl)
- **Border Radius**: Consistent rounded corners (rounded-lg, rounded-xl, rounded-3xl)
- **Background Gradients**: Subtle gradients for visual depth

#### Animations
- **Viewport Triggers**: Elements animate when scrolling into view
- **Staggered Entrances**: Sequential animation delays for list items
- **Floating Effects**: Continuous subtle motion for decorative elements
- **Hover Interactions**: Scale, shadow, and color transitions

## 🏗 Project Structure

```
src/
├── app/
│   ├── (landing)/
│   │   ├── _components/
│   │   │   ├── Gallery/           # Image gallery with masonry layout
│   │   │   ├── Hero/              # Landing hero section
│   │   │   ├── IntroSection/      # Animated introduction
│   │   │   ├── Navbar/            # Navigation with dropdowns
│   │   │   ├── Offerings/         # Service packages
│   │   │   ├── Services/          # Wedding services
│   │   │   ├── Stats/             # Animated statistics
│   │   │   └── TestimonialSection/ # Client testimonials carousel
│   │   ├── layout.tsx             # Landing page layout
│   │   └── page.tsx              # Landing page
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Root page
├── components/
│   ├── ui/
│   │   └── button.tsx           # Enhanced shadcn button component
│   ├── DecorativeLine.tsx       # Animated decorative line
│   ├── LenisProvider.tsx        # Smooth scrolling provider
│   └── WeddingButton.tsx        # Custom wedding-themed button
└── lib/
    └── utils.ts                 # Utility functions
```

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
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: High-quality React components
- **Class Variance Authority (CVA)**: Component variant management

### Animations & Interactions
- **Framer Motion**: Animation library for React
- **Lenis**: Smooth scrolling library
- **Swiper.js**: Modern carousel/slider library

### Fonts & Assets
- **Google Fonts**: Homemade Apple, Marcellus, Montserrat
- **Next.js Image**: Optimized image loading and processing

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

**Pawan Dasila** - Wedding Planner & Developer
- Website: [your-website.com](https://your-website.com)
- Email: your-email@example.com
- GitHub: [@Pawandasila](https://github.com/Pawandasila)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Google Fonts** for beautiful typography
- **Unsplash/Pexels** for high-quality wedding photography

---

**Made with ❤️ for couples planning their dream weddings**
