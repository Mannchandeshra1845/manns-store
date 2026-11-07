import Link from 'next/link';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">
            <span className="brand-mark">M</span>
            <span>Mann’s Store</span>
          </div>
          <p>Curated lifestyle, giftable tech, art, and décor designed to feel personal and premium.</p>
        </div>

        <div>
          <h4>Categories</h4>
          <ul>
            <li><Link href="/products/gadgets">Gadgets</Link></li>
            <li><Link href="/products/small-art">Small Art</Link></li>
            <li><Link href="/products/home-decor">Home Decor</Link></li>
            <li><Link href="/products/accessories">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/admin">Dashboard</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a></li>
            <li><a href="#"><Instagram size={15} /> Instagram</a></li>
            <li><a href="#"><MapPin size={15} /> India</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Mann’s Store</span>
        <span>Built for modern gifting and lifestyle shopping</span>
      </div>
    </footer>
  );
}
