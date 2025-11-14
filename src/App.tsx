import './App.css';
import { Header } from './components/Header/Header';
import { Breadcrumb } from './components/Header/Breadcrumb';

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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className='text-3xl font-bold text-primary-900'>
          Achilles Pro - Genuine Suede X Leather Sneakers
        </h1>
        <p className="text-primary-500 mt-2">Product page coming soon...</p>
      </main>
    </div>
  );
}

export default App;
