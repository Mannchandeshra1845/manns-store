import Link from 'next/link';
import { ArrowRight, Search, ShoppingBag, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { readProducts } from '@/lib/data';

export default async function HomePage() {
  const products = await readProducts();
  const featured = products.slice(0, 4);
  const categories = [
    { name: 'Gadgets', slug: 'gadgets', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80' },
    { name: 'Small Art', slug: 'small-art', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80' },
    { name: 'Home Decor', slug: 'home-decor', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
    { name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80' }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Live curated lifestyle</span>
            <h1>Modern essentials for everyday joy.</h1>
            <p>
              Unique gadgets, collectible art pieces, elevated décor, and smart accessories for every age.
              Curated for boys, girls, students, and creators with a premium blend of style and utility.
            </p>
            <div className="hero-actions">
              <Link href="#shop" className="primary-button">Shop now <ArrowRight size={16} /></Link>
              <Link href="/admin" className="secondary-button">Admin panel</Link>
            </div>
            <div className="hero-stats">
              <div><strong>50k+</strong><span>Happy shoppers</span></div>
              <div><strong>4.9/5</strong><span>Customer rating</span></div>
              <div><strong>24/7</strong><span>WhatsApp support</span></div>
            </div>
          </div>

          <div className="live-poster">
            <div className="live-badge">LIVE</div>
            <div className="video-screen">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="orb orb-three" />
              <div className="floating-product-card">
                <div className="mini-icon"><Sparkles size={16} /></div>
                <div>
                  <span>New launch</span>
                  <strong>GlowBox Mini</strong>
                </div>
                <b>$79</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container section-head">
          <div>
            <span className="eyebrow">Explore</span>
            <h2>Shop by category</h2>
          </div>
          <Link href="#shop" className="text-link">See all products</Link>
        </div>

        <div className="container category-grid">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="category-card">
              <img src={category.image} alt={category.name} />
              <div className="category-card-overlay">
                <span>{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section" id="shop">
        <div className="container section-head">
          <div>
            <span className="eyebrow">Trending</span>
            <h2>Featured picks</h2>
          </div>
          <Link href="/products/all" className="text-link">Browse all</Link>
        </div>

        <div className="container product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-banner">
        <div className="container promo-inner">
          <div>
            <span className="eyebrow light">Limited edition</span>
            <h3>Handpicked gifts for every age and every mood.</h3>
          </div>
          <Link href="/products/all" className="primary-button light">Discover more</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container feature-grid">
          <div className="feature-box">
            <ShoppingBag size={22} />
            <div>
              <h4>Fast WhatsApp orders</h4>
              <p>Chat directly for custom recommendations and quick delivery updates.</p>
            </div>
          </div>
          <div className="feature-box">
            <Search size={22} />
            <div>
              <h4>Smart discovery</h4>
              <p>Browse curated categories built for gifting, décor, and modern lifestyle needs.</p>
            </div>
          </div>
          <div className="feature-box">
            <Sparkles size={22} />
            <div>
              <h4>Premium quality</h4>
              <p>Minimal aesthetics, practical form, and elevated details across every product.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
