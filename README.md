# E-commerce Product Detail Page

A responsive product detail page built with React, TypeScript, and Tailwind CSS featuring advanced cart functionality and state management.

## 🎯 Project Overview

Build a pixel-perfect e-commerce product page with:
- **Product image gallery** with zoom functionality
- **Dynamic variation selection** (color, size, etc.)
- **Persistent shopping cart** with Zustand
- **Responsive design** for all devices
- **API integration** for product data

## 🛠 Tech Stack

- **React 18+** with TypeScript
- **Tailwind CSS** for styling
- **Zustand + Immer** for state management
- **Headless UI** for accessible components

## 📋 Key Features

### Core Components
- `ProductImageGallery` - Image carousel with thumbnails
- `ProductInfo` - Title, description, pricing
- `VariationSelector` - Color/size selection
- `AddToCartButton` - Cart functionality
- `CartDrawer` - Shopping cart management
- `QuantitySelector` - Quantity controls

### API Integration
**Endpoint:** `https://api.easy-orders.net/api/v1/products/slug/clear-theme/Sneakers12?join=reviews`

### Design Reference
**Figma:** [Product Detail Page Design](https://www.figma.com/design/b4iHFiwykhwvQ92LlSzTGU/Ecommerce--Product-Detail-Page--Community-?node-id=57-1305&t=AyJ7l7DqUWRLpOnU-0)

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Quick Start

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd product-page-task
npm install
```
4. **Start development server:**
```bash
npm start
```

5. **Open your browser:**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ProductImageGallery/
│   ├── ProductInfo/
│   ├── VariationSelector/
│   ├── AddToCartButton/
│   ├── CartDrawer/
│   └── QuantitySelector/
├── stores/             # Zustand stores
│   ├── productStore.ts
│   └── cartStore.ts
├── types/              # TypeScript interfaces
├── utils/              # Helper functions
└── styles/             # CSS files
```

## 🎨 Design Requirements

### Responsive Breakpoints
- **Mobile:** < 768px (stacked layout)
- **Tablet:** 768px - 1024px (two-column)
- **Desktop:** > 1024px (full-width layout)

### Key UI Elements
- Image gallery with zoom on hover
- Color swatches and size selection
- Price display with sale highlighting
- Floating cart icon with item count
- Slide-out cart drawer

## 📋 Development Checklist

- [ ] Setup project dependencies
- [ ] Configure Tailwind CSS
- [ ] Create TypeScript interfaces
- [ ] Build Zustand stores
- [ ] Implement API integration
- [ ] Create core components
- [ ] Add responsive design
- [ ] Implement cart persistence
- [ ] Add performance optimizations
- [ ] Write tests

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📦 Build & Deploy

```bash
# Create production build
npm run build

# Serve build locally
npx serve -s build
```

## 📋 Evaluation Criteria

- **Code Quality (25%)** - Clean, maintainable code
- **State Management (25%)** - Efficient Zustand implementation  
- **UI Implementation (25%)** - Pixel-perfect design match
- **Technical Implementation (25%)** - Robust API integration

---

**Estimated Time:** 6-8 hours  
