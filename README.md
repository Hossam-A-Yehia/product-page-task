# E-commerce Product Detail Page

A responsive product detail page built with React, TypeScript, and Tailwind CSS. It displays a single product, allows users to select variations (color/size), add items to a persistent cart, and manage a simple wishlist.

---

## 📚 Table of Contents

- **Overview**
- **Tech Stack**
- **Getting Started**
- **Project Structure**
- **Core Features**
- **Data Flow & State Management**
- **API & Environment**
- **UI & Styling**
- **Accessibility & UX**
- **Testing**
- **Assumptions & Limitations**
- **How to Modify / Extend**

---

## 🎯 Overview

- **Single-product experience** driven by a product `slug` and a remote REST API.
- **Interactive product gallery** with zoom, thumbnails, and wishlist controls.
- **Configurable variations** (color, size) that control the selected variant and price.
- **Persistent slide-out cart drawer** with item counter in the header (Zustand + localStorage).
- **Static reviews and related products** to mirror a real e‑commerce product detail page.

The implementation is intentionally focused on one product page so that layout, UX, and state management can be reviewed easily.

---

## 🛠 Tech Stack

- **React 19 + TypeScript** via Create React App (`react-scripts`)
- **Tailwind CSS 3** with a small custom design system (colors, typography, layout)
- **Zustand** with **Immer** and **persist** for app state and localStorage persistence
- **@tanstack/react-query** for data fetching and caching
- **Headless UI** (`@headlessui/react`) for accessible primitives (modals, menus, buttons)
- **react-share** for social sharing integrations
- **sonner** for toast notifications
- **Jest** + **React Testing Library** + **@testing-library/user-event** for unit and integration tests

Node.js **16+** is recommended to match the CRA setup and dependencies.

---

## 🚀 Getting Started

### Prerequisites

- Node.js **16+**
- npm (or yarn) installed globally

### Installation

```bash
git clone https://github.com/Hossam-A-Yehia/product-page-task.git
cd product-page-task
npm install
```

### Environment Variables

- Copy `.env.example` to `.env`:

```bash
cp .env.example .env   # or create .env manually on Windows
```

- Variable used by the app:

```bash
REACT_APP_API_URL=https://api.easy-orders.net/api
```

- If `REACT_APP_API_URL` is **not** defined, the app falls back to the same default URL in code.

### Run in Development

```bash
npm start
```

- Runs on `http://localhost:3000`.
- The product slug used by default is `Sneakers12` (see `src/App.tsx`).

### Build for Production

```bash
npm run build
```

- Outputs a production build into the `build/` folder.

---

## 🧱 Project Structure (High Level)

```text
product-page-task/
├─ public/
├─ src/
│  ├─ api/
│  │  └─ productApi.ts
│  ├─ components/
│  │  ├─ Header/
│  │  ├─ Product/
│  │  ├─ Cart/
│  │  ├─ Layout/
│  │  └─ Shared/
│  ├─ store/
│  ├─ hooks/
│  ├─ types/
│  ├─ utils/
│  ├─ __tests__/   # Jest + RTL tests
│  ├─ App.tsx
│  └─ index.tsx
├─ .env.example
├─ package.json
├─ tailwind.config.js
└─ tsconfig.json
```

- **`src/App.tsx`** wires the page layout: header, breadcrumb, `ProductDetailPage`, related products, reviews, footer, and cart drawer.
- **`src/index.tsx`** bootstraps React, React Query, and the global toast provider.

---

## ✨ Core Features

- **Product fetching & detail page**
  - `useFetchProduct` (React Query) calls `getProduct` from `src/api/productApi.ts`.
  - `ProductDetailPage` uses that hook and updates `useProductStore` with the result.
  - Skeleton loaders display while data is loading or unavailable.

- **Variations & pricing**
  - Variations and variants are typed in `src/types/product.ts`.
  - `productStore` tracks `selectedVariations` and `selectedVariant`.
  - `getCurrentPrice` / `getCurrentSalePrice` compute the active price.
  - `ProductInfo` connects store data with `ColorSelector`, `SizeSelector`, and `ProductPricing`.

- **Image gallery & wishlist**
  - `ProductImageGallery` merges main images, thumbnails, and variation images.
  - Supports zoom-in / zoom-out on click and thumbnail navigation.
  - Integrates with `useWishlistStore` to toggle wishlist and display toast messages.
  - Uses `ProductShareModal` to share the product via `react-share`.

- **Cart drawer & cart logic**
  - `useCartStore` manages cart items, quantities, totals, and persistence (`cart-storage`).
  - `ProductInfo` builds a cart item (including selected variations and price) and calls `addItem`.
  - `CartDrawer` shows a slide-out panel with items, subtotals, and a checkout button.
  - Users can remove items from the drawer; total price updates immediately.

- **Header, navigation, and promo bar**
  - `Header` combines logo, search bar, categories dropdown, user menu, wishlist icon, and cart icon.
  - `TopPromoBar` displays a configurable promo message.
  - `Breadcrumb` renders a simple static breadcrumb trail for the product page.

- **Reviews & related products**
  - `ProductReviews` shows a rating summary, filter UI, and static reviews list (dummy data).
  - `RelatedProducts` renders a responsive grid of static related products.

- **Footer**
  - `Footer` includes newsletter input, social icons, and several static navigation sections.

---

## 🔄 Data Flow & State Management

- **Product state (`useProductStore`)**
  - Holds `product`, `loading`, `error`, `selectedVariations`, and `selectedVariant`.
  - `setProduct` initializes default selected variations and matching variant.
  - `setSelectedVariation` updates a single variation and recomputes `selectedVariant`.
  - Pricing helpers: `getCurrentPrice` and `getCurrentSalePrice` (variant overrides product-level price when available).

- **Cart state (`useCartStore`)**
  - Stores `items` and `isOpen` and exposes methods: `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `toggleCart`.
  - Aggregation helpers: `getTotalItems`, `getTotalPrice`, and `getCartSummary`.
  - Uses `persist` middleware to save cart data under the key `cart-storage` in localStorage.

- **Wishlist state (`useWishlistStore`)**
  - Stores a list of simple wishlist items (product id, name, slug, image).
  - Methods: `toggleWishlist`, `isInWishlist`, `getTotalItems`.
  - Persists under `wishlist-storage` in localStorage.

State is intentionally colocated with the feature (product, cart, wishlist) to keep the stores small and focused.

---

## 🌐 API & Environment

- **Base URL**
  - Defined in `src/api/productApi.ts` as:
    - `API_BASE_URL = process.env.REACT_APP_API_URL || "https://api.easy-orders.net/api"`.

- **Product endpoint**
  - `getProduct(slug: string)` calls:
    - `GET {API_BASE_URL}/v1/products/slug/clear-theme/{slug}?join=reviews`.
  - Expects a response compatible with the `Product` interface defined in `src/types/product.ts`.

- **Error handling**
  - Non-2xx responses throw an `Error` with status code and text.
  - `ProductDetailPage` maps `error` into store state and renders a fallback error message.

- **Changing the product**
  - Update `slug` in `src/App.tsx` (`<ProductDetailPage slug="Sneakers12" />`).
  - Or make it dynamic via routing (not implemented in this exercise).

---

## 🎨 UI & Styling

- **Tailwind configuration** (`tailwind.config.js`)
  - Custom color palette under `primary`, `accent.rating`, and `cta`.
  - Custom `maxWidth`, `aspectRatio` (`4/5`), `gridTemplateColumns.hero`, and product title font sizes.
  - Slightly extended spacing and transition durations for smoother interactions.

- **Shared components**
  - `Button` uses `class-variance-authority` and Headless UI to provide variants and sizes.
  - `SkeletonLoader` renders configurable text/image skeletons for loading states.
  - `Modal` is a generic dialog used by `ProductShareModal`.

- **Layout**
  - Main content is constrained to `max-w-7xl` with responsive padding.
  - Grid layout for the product area (`ProductImageGallery` + `ProductInfo`) adapts across breakpoints.

---

## ♿ Accessibility & UX

- Uses **Headless UI** primitives (`Dialog`, `Menu`, `Button`) for accessible modals and menus.
- `Breadcrumb` uses `nav` with `aria-label="Breadcrumb"`.
- Many interactive elements have `aria-label` / `aria-pressed` attributes (color/size selectors, wishlist, cart).
- Images include `alt` text built from product name and index.
- Cart and wishlist badges expose counts in accessible labels.

This is not a full accessibility audit, but accessibility was considered in the layout and components.

---

## 🧪 Testing

- **Test runner**: `jest` via `react-scripts test`.
- **Libraries**: `@testing-library/react`, `@testing-library/dom`, `@testing-library/user-event`, `@testing-library/jest-dom`.

- **Key tests** (under `src/__tests__/`):
  - `AppCartFlow.test.tsx` – basic end-to-end flow: loads a product, clicks *Add To Cart*, and asserts that the cart drawer opens.
  - `ProductCartIntegration.test.tsx` – integration between `ProductInfo`, `useProductStore`, `useCartStore`, and `CartDrawer`.
  - `ProductActions.test.tsx` – verifies that callbacks (`onAddToCart`, `onCheckout`) fire on button clicks.
  - `cartStore.test.ts` – tests `addItem`, `getTotalItems`, `getTotalPrice`, and `updateQuantity` behaviour.
  - `productStore.test.ts` – tests initialization of variations and price helpers when product data changes.
  - `wishlistStore.test.ts` – tests wishlist toggle behaviour and counts.

### Run tests

```bash
npm test
```

### Run tests with coverage

```bash
npm test -- --coverage
```

---

## ⚙️ npm Scripts (Summary)

- `npm start` – start the development server.
- `npm run build` – build the production bundle.
- `npm test` – run the Jest test suite.

---

## 📌 Assumptions & Limitations

- Only **one product route** is implemented; routing and multi-product catalog are out of scope.
- **Reviews** and **related products** use static mock data (no real backend for those parts).
- The **search bar** logs the query to the console; it does not perform real search.
- Header links, categories, and footer links are mostly presentational.
- No real checkout or payment integration is implemented.

These trade-offs keep the focus on layout, UX, and state management.

---

## 🛠 How to Modify / Extend

- **Change the product**
  - Edit the `slug` passed to `ProductDetailPage` in `src/App.tsx`.

- **Point to another API**
  - Set `REACT_APP_API_URL` in `.env` to your backend base URL.
  - Ensure the `/v1/products/slug/clear-theme/:slug` response matches `src/types/product.ts`.

- **Add routing**
  - Wrap `App` with a router (e.g., React Router) and map route params to the `slug` prop.

- **Adjust styles / theme**
  - Update `tailwind.config.js` and global styles in `src/index.css` / `src/App.css`.
  - Reuse shared components (`Button`, `Modal`, `SkeletonLoader`) for consistent UI.

- **Extend tests**
  - Add more scenarios under `src/__tests__/` to cover new flows (e.g., size change, multiple cart items, wishlist interactions).

---

## 🎨 Design Reference

Figma design used as a visual reference for layout and interactions:

[Product Detail Page – Figma](https://www.figma.com/design/b4iHFiwykhwvQ92LlSzTGU/Ecommerce--Product-Detail-Page--Community-?node-id=57-1305&t=AyJ7l7DqUWRLpOnU-0)

---

## 💡 Implementation Notes

- **Framework choice**: This implementation uses Create React App to match the task requirements. For a production-ready storefront, it would be preferable to use **Next.js** (or at least **Vite**) for faster builds, better performance optimizations, built-in routing, and improved developer experience.
- **Dummy data for popularity and reviews**: The current API does **not** expose endpoints for popular/related products or customer reviews. Because of that, the **related products** and **reviews** sections are implemented with local dummy data to showcase the UI and flow without additional backend work.
