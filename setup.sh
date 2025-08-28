#!/bin/bash

echo "🚀 Setting up CUWMC Next.js Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "Please update Node.js to version 18 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Please check the error above."
    exit 1
fi

echo "✅ Dependencies installed successfully!"

# Check if assets exist
if [ ! -f "public/assets/imgs/logos/crop-cuwmc-pen-white-copy.png" ]; then
    echo "⚠️  Warning: Logo file not found in public/assets/imgs/logos/"
    echo "Please copy your logo file to: public/assets/imgs/logos/crop-cuwmc-pen-white-copy.png"
fi

if [ ! -f "public/assets/imgs/columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg" ]; then
    echo "⚠️  Warning: Campus image not found in public/assets/imgs/"
    echo "Please copy your campus image to: public/assets/imgs/columbia-campusandcityfromnwcb.day_.eileenbarroso.jpg"
fi

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "📁 Project structure:"
echo "   - components/     - React components"
echo "   - app/           - Next.js app router"
echo "   - public/        - Static assets"
echo "   - styles/        - CSS files"
echo ""
echo "🔧 Available commands:"
echo "   npm run dev      - Start development server"
echo "   npm run build    - Build for production"
echo "   npm run start    - Start production server"
echo "   npm run lint     - Run ESLint"
