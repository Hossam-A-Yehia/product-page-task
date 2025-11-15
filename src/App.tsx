import './App.css';
import { Header } from './components/Header/Header';
import { Breadcrumb } from './components/Header/Breadcrumb';
import { ProductDetailPage } from './components/Product/ProductDetailPage';
import { ProductReviews } from './components/Product/ProductReviews';
import { RelatedProducts } from './components/Product/RelatedProducts';
import { CartDrawer } from './components/Cart/CartDrawer';
import { Footer } from './components/Layout/Footer';

function App() {
  const breadcrumbItems = [
    { label: 'Homepage', href: '/' },
    { label: 'Women', href: '/women' },
    { label: 'Women\'s Shirts & Tops', href: '/women/shirts-tops' },
    { label: 'Long Sleeve Overshirt, Khaki, 6', current: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0 py-8 space-y-[50px]">
        <ProductDetailPage slug="Sneakers12" />
        <RelatedProducts />
        <ProductReviews />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
