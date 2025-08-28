# CUWMC Website - Next.js React Application

A modern, responsive website built with Next.js 14, React 18, and Tailwind CSS for the Columbia Undergraduate Wealth Management Club.

## 🚀 Features

- **Next.js 14** - Latest React framework with App Router
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean, professional design with animations
- **Component-Based Architecture** - Reusable, maintainable components

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: EB Garamond (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
cuwmc-nextjs/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page component
├── components/                   # React components
│   ├── Navbar.tsx               # Navigation component
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Board.tsx                # Board members
│   ├── Programs.tsx             # Programs section
│   ├── Divisions.tsx            # Club divisions
│   ├── Recruitment.tsx          # Application form
│   └── Footer.tsx               # Footer component
├── public/                       # Static assets
│   └── assets/
│       └── imgs/
│           ├── logos/
│           │   └── crop-cuwmc-pen-white-copy.png
│           └── columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg
├── package.json                  # Dependencies and scripts
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README-NEXTJS.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Copy your assets** to the public directory:
   ```bash
   # Copy your logo
   cp assets/imgs/logos/crop-cuwmc-pen-white-copy.png public/assets/imgs/logos/
   
   # Copy your campus image
   cp assets/imgs/columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg public/assets/imgs/
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  'cuwmc': {
    primary: '#1f2647',        // Main brand color
    secondary: '#ffd700',      // Gold accent
    'primary-transparent': '#1f2647e6', // Navbar background
  }
}
```

### Font

EB Garamond is loaded from Google Fonts and applied globally in `globals.css`.

### Components

Each section is a separate React component in the `components/` directory. You can easily:

- **Modify content** by editing the component files
- **Add new sections** by creating new components
- **Change styling** using Tailwind classes
- **Update images** by replacing files in the `public/` directory

## 🔧 Component Details

### Navbar
- Fixed positioning with scroll effect
- Mobile hamburger menu
- Social media buttons
- Smooth scrolling navigation

### Hero Section
- Split layout with content and image
- Call-to-action button
- Responsive design

### About Section
- Club description
- Animated statistics
- Grid layout

### Board Section
- Executive board members
- Placeholder profile images
- Hover effects

### Programs Section
- Four main programs
- Icon-based design
- Responsive grid

### Divisions Section
- Three club divisions
- Feature lists
- Card-based layout

### Recruitment Section
- Benefits list
- Interactive application form
- Form validation
- Success feedback

### Footer
- Logo and description
- Quick navigation links
- Social media icons
- Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js
   - Deploy with one click

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Connect repository, build settings: `npm run build`
- **Traditional hosting**: Build locally and upload `.next` folder

## 🔍 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages
- **Lazy Loading**: Components load as needed
- **Optimized Fonts**: Google Fonts with display=swap

## 🛡️ Security

- **TypeScript**: Type safety
- **ESLint**: Code quality
- **Next.js**: Built-in security features
- **Form Validation**: Client-side validation

## 📈 SEO

- **Meta tags** in layout.tsx
- **Semantic HTML** structure
- **Accessible** navigation
- **Fast loading** times

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure assets are in the `public/` directory
2. **Build errors**: Check TypeScript types and dependencies
3. **Styling issues**: Verify Tailwind CSS is properly configured

### Development Tips

- Use `console.log()` for debugging
- Check browser console for errors
- Use React DevTools for component inspection
- Test on different devices and browsers

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Columbia Undergraduate Wealth Management Club.

## 🆘 Support

For technical support:
1. Check the documentation
2. Review error messages
3. Test in different environments
4. Create an issue with details

---

**Built with ❤️ using Next.js for CUWMC**
