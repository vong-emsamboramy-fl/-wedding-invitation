# Wedding Invitation App Documentation

## 🏗️ Project Structure

```
wedding-invitation/
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                        # Source code
│   └── app/                    # Next.js App Router
│       ├── favicon.ico         # Website icon
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout component
│       └── page.tsx            # Main page component (Wedding Invitation)
├── .gitignore                  # Git ignore rules
├── APP-DOCUMENTATION.md        # This file
├── DEPLOYMENT-GUIDE.md         # Deployment instructions
├── README.md                   # Next.js default readme
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript definitions
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration for Tailwind
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment configuration
```

---

## 📱 Application Overview

### Purpose
A personalized wedding e-invitation system for **Ramy & Moniroth's** wedding that allows dynamic guest name personalization through URL parameters.

### Key Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dynamic Personalization**: Guest names via URL parameters
- **Elegant UI**: Rose/pink color scheme with gradients
- **Wedding Information**: Date, time, venue, RSVP details
- **Static Generation**: Pre-built for fast loading

---

## 🔧 Technical Stack

### Frontend Framework
- **Next.js 15.4.1** (App Router)
- **React 19.1.0** with TypeScript
- **Tailwind CSS 4.x** for styling

### Build Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** for CSS processing

### Deployment
- **Vercel** for hosting
- **Git/GitHub** for version control

---

## 📄 Core Components

### 1. Root Layout (`src/app/layout.tsx`)
```typescript
// Defines the HTML structure and metadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

**Purpose**: 
- Sets up the basic HTML structure
- Defines global metadata (title, description)
- Applies global fonts and styles

### 2. Main Page (`src/app/page.tsx`)
```typescript
'use client';

import { useState, useEffect } from 'react';

export default function WeddingInvitation() {
  const [inviteeName, setInviteeName] = useState('Dear Guest');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
      setInviteeName(`Dear ${name}`);
    }
  }, []);

  return (
    // Wedding invitation JSX
  );
}
```

**Purpose**:
- Main wedding invitation component
- Handles dynamic name personalization
- Contains all UI elements and styling

---

## 🎨 UI Structure Breakdown

### Header Section
```typescript
{/* Decorative Element */}
<div className="flex justify-center mb-6">
  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  </div>
</div>
```

### Dynamic Name Block
```typescript
{/* Dynamic Invitee Name Block */}
<div className="mb-8 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
  <h1 className="text-2xl md:text-3xl font-serif text-rose-800 mb-2">
    {inviteeName}
  </h1>
  <p className="text-rose-600 text-sm">You are cordially invited to celebrate</p>
</div>
```

### Couple Names Section
```typescript
{/* Couple Names */}
<div className="mb-8">
  <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
    <span className="block text-rose-600">Ramy</span>
    <span className="text-2xl text-gray-600 font-light">&</span>
    <span className="block text-rose-600">Moniroth</span>
  </h2>
  <p className="text-xl text-gray-700 font-light">are getting married!</p>
</div>
```

### Wedding Details Section
```typescript
{/* Wedding Details */}
<div className="mb-8 space-y-4">
  <div className="flex items-center justify-center space-x-3">
    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <div>
      <p className="text-lg font-semibold text-gray-800">Saturday, December 14th, 2024</p>
      <p className="text-gray-600">6:00 PM</p>
    </div>
  </div>
  
  <div className="flex items-center justify-center space-x-3">
    <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <div>
      <p className="text-lg font-semibold text-gray-800">Vimean Piphup Thmei Sensok</p>
      <p className="text-gray-600">Building C</p>
    </div>
  </div>
</div>
```

### RSVP Section
```typescript
{/* RSVP Section */}
<div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg mb-8">
  <h3 className="text-xl font-serif text-rose-800 mb-4">Please RSVP by December 1st, 2024</h3>
  <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
    RSVP Now
  </button>
</div>
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--rose-50: #fdf2f8;
--rose-100: #fce7f3;
--rose-400: #fb7185;
--rose-500: #f43f5e;
--rose-600: #e11d48;
--rose-800: #9f1239;

/* Pink Shades */
--pink-50: #fdf2f8;
--pink-100: #fce7f3;
--pink-400: #f472b6;
--pink-500: #ec4899;

/* Neutral Colors */
--gray-500: #6b7280;
--gray-600: #4b5563;
--gray-700: #374151;
--gray-800: #1f2937;
```

### Typography
```css
/* Font Families */
font-serif: ui-serif, Georgia, serif;      /* For headings and elegant text */
font-sans: ui-sans-serif, system-ui, sans-serif;  /* For body text */

/* Font Sizes */
text-sm: 0.875rem;     /* Small text */
text-lg: 1.125rem;     /* Large text */
text-xl: 1.25rem;      /* Extra large text */
text-2xl: 1.5rem;      /* Heading sizes */
text-4xl: 2.25rem;     /* Large headings */
text-5xl: 3rem;        /* Hero headings */
```

### Responsive Breakpoints
```css
/* Tailwind Breakpoints */
sm: 640px;    /* Small screens */
md: 768px;    /* Medium screens */
lg: 1024px;   /* Large screens */
xl: 1280px;   /* Extra large screens */
```

---

## ⚙️ Dynamic Features

### 1. URL Parameter Parsing
```typescript
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  if (name) {
    setInviteeName(`Dear ${name}`);
  }
}, []);
```

**How it works:**
- Reads URL parameters on component mount
- Extracts 'name' parameter
- Updates the invitation greeting
- Falls back to "Dear Guest" if no name provided

### 2. URL Examples
```
Basic invitation:
https://your-site.vercel.app
→ Shows "Dear Guest"

Personalized invitation:
https://your-site.vercel.app?name=John
→ Shows "Dear John"

Name with spaces:
https://your-site.vercel.app?name=Sarah%20Johnson
→ Shows "Dear Sarah Johnson"

Multiple guests:
https://your-site.vercel.app?name=Smith%20Family
→ Shows "Dear Smith Family"
```

---

## 🔧 Configuration Files

### 1. Next.js Configuration (`next.config.ts`)
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### 2. TypeScript Configuration (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 3. Tailwind Configuration (`postcss.config.mjs`)
```javascript
/** @type {import('postcss').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### 4. ESLint Configuration (`eslint.config.mjs`)
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

---

## 🚀 Development Workflow

### 1. Local Development
```bash
# Start development server
npm run dev

# Access at http://localhost:3000
# Hot reload enabled for instant updates
```

### 2. Testing Personalization
```bash
# Test different names locally
http://localhost:3000?name=John
http://localhost:3000?name=Sarah%20Johnson
http://localhost:3000?name=Smith%20Family
```

### 3. Building for Production
```bash
# Build the application
npm run build

# Start production server
npm run start

# Check for build errors and warnings
```

### 4. Code Quality
```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint -- --fix
```

---

## 📝 Customization Guide

### 1. Wedding Details
Update in `src/app/page.tsx`:
```typescript
// Couple Names
<span className="block text-rose-600">Ramy</span>
<span className="block text-rose-600">Moniroth</span>

// Date and Time
<p className="text-lg font-semibold text-gray-800">Saturday, December 14th, 2024</p>
<p className="text-gray-600">6:00 PM</p>

// Venue
<p className="text-lg font-semibold text-gray-800">Vimean Piphup Thmei Sensok</p>
<p className="text-gray-600">Building C</p>

// RSVP Date
<h3 className="text-xl font-serif text-rose-800 mb-4">Please RSVP by December 1st, 2024</h3>
```

### 2. Color Scheme
To change colors, update Tailwind classes:
```typescript
// Current: Rose/Pink theme
from-rose-400 to-pink-500

// Alternative: Blue theme
from-blue-400 to-indigo-500

// Alternative: Green theme
from-emerald-400 to-teal-500
```

### 3. Typography
```typescript
// Current: Serif for headings
font-serif

// Alternative: Sans-serif for modern look
font-sans

// Alternative: Mono for technical feel
font-mono
```

### 4. Adding New Sections
```typescript
// Add after RSVP section
{/* Gift Registry */}
<div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg mb-8">
  <h3 className="text-xl font-serif text-rose-800 mb-4">Gift Registry</h3>
  <p className="text-gray-600 mb-4">Your presence is our present, but if you wish to honor us with a gift:</p>
  <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
    View Registry
  </button>
</div>
```

---

## 🔍 Debugging Guide

### Common Issues

1. **Build Errors**
```bash
# Check for TypeScript errors
npm run build

# Common fix: Update quotes in JSX
"Don't" → &ldquo;Don&rsquo;t&rdquo;
```

2. **Name Parameter Not Working**
```typescript
// Check useEffect dependency
useEffect(() => {
  // ... name parsing logic
}, []); // Empty dependency array is correct
```

3. **Styling Issues**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

4. **Deployment Issues**
```bash
# Check vercel.json exists
cat vercel.json

# Should contain:
{
  "version": 2,
  "public": true
}
```

---

## 📊 Performance Optimization

### Built-in Optimizations
- **Static Site Generation**: Pre-built HTML for fast loading
- **Image Optimization**: Automatic Next.js image optimization
- **CSS Optimization**: Tailwind purges unused CSS
- **Code Splitting**: Automatic code splitting by Next.js

### Performance Metrics
```bash
# Check bundle size
npm run build

# Output shows:
Route (app)                Size  First Load JS
┌ ○ /                    1.48 kB    101 kB
└ ○ /_not-found           989 B     101 kB
```

---

## 📱 Mobile Responsiveness

### Responsive Design Features
- **Flexible Grid**: Container adapts to screen size
- **Responsive Typography**: Text scales appropriately
- **Touch-Friendly**: Buttons sized for mobile interaction
- **Optimized Images**: SVG icons scale perfectly

### Breakpoint Usage
```typescript
// Mobile-first approach
className="text-2xl md:text-3xl"  // Smaller on mobile, larger on desktop
className="p-8 md:p-12"          // Less padding on mobile
className="flex-col sm:flex-row"  // Stack on mobile, row on desktop
```

---

## 🔒 Security Considerations

### Input Sanitization
- URL parameters are automatically sanitized by Next.js
- No database connections or user input forms
- Static site generation prevents injection attacks

### Content Security
- No external scripts or dependencies
- All assets served from same domain
- HTTPS enforced by Vercel

---

## 🎯 Future Enhancements

### Potential Features
1. **RSVP Form Integration**
2. **Photo Gallery**
3. **Event Timeline**
4. **Guest Book**
5. **Music Playlist**
6. **Live Streaming Link**
7. **Gift Registry Integration**
8. **Multiple Language Support**

### Implementation Ideas
```typescript
// RSVP Form State
const [rsvpData, setRsvpData] = useState({
  attending: '',
  guests: 1,
  dietary: '',
  message: ''
});

// Photo Gallery
const [photos, setPhotos] = useState([]);

// Multi-language
const [language, setLanguage] = useState('en');
```

---

*This documentation provides a complete overview of the wedding invitation application structure, components, and procedures. Use this as a reference for understanding, maintaining, and extending the application.*