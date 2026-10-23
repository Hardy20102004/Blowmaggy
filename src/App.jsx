import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import Department from './pages/Department';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import Admin from './pages/Admin';

function Layout({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/admin';
  return (
    <div className="page-wrapper">
      {!isAdmin && <Header />}
      <main style={{ flex: 1 }}>{children}</main>
      {!isAdmin && <Footer />}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department/:id" element={<Department />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={
            <div style={{ textAlign:'center', padding:'var(--space-20)' }}>
              <div style={{ fontSize:'4rem', marginBottom:'var(--space-5)' }}>🌀</div>
              <h2>Page Not Found</h2>
              <p className="text-muted" style={{ marginBottom:'var(--space-6)' }}>The page you're looking for doesn't exist.</p>
              <a href="/" className="btn btn-primary btn-lg">Back to Home</a>
            </div>
          } />
        </Routes>
      </Layout>
    </StoreProvider>
  );
}
