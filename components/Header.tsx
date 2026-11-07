import Link from 'next/link';
import { Menu, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">M</span>
          <span>Mann’s Store</span>
        </Link>

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/products/all">All products</Link>
          <Link href="/products/gadgets">Gadgets</Link>
          <Link href="/products/small-art">Small Art</Link>
          <Link href="/products/home-decor">Home Decor</Link>
          <Link href="/products/accessories">Accessories</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/login" className="ghost-link">Login</Link>
          <Link href="/admin" className="mini-cart"><ShoppingCart size={18} /> Cart</Link>
          <button className="menu-toggle" aria-label="Toggle menu"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  );
}
