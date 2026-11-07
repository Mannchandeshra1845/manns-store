import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { readProducts } from '@/lib/data';

export default async function ProductDetailPage({ params }: { params: { category: string; productId: string } }) {
  const products = await readProducts();
  const product = products.find((item) => item.id === Number(params.productId));

  if (!product) {
    return (
      <section className="page-shell">
        <div className="container empty-state">
          <h1>Product not found</h1>
          <Link href="/" className="primary-button">Go home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell detail-shell">
      <div className="container product-detail">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back</Link>

        <div className="detail-grid">
          <div className="detail-image-wrap">
            <Image src={product.image} alt={product.name} fill className="detail-image" />
          </div>

          <div className="detail-content">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="product-price-row">
              <span className="price large">₹{product.price}</span>
              <span className="stock">{product.stock > 0 ? `${product.stock} available` : 'Sold out'}</span>
            </div>

            <p>{product.description}</p>

            <div className="detail-actions">
              <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I want to order ${product.name} for ₹${product.price}.`)}`} target="_blank" rel="noreferrer" className="primary-button">
                <ShoppingCart size={15} /> Order on WhatsApp
              </a>
              <button className="secondary-button">
                <Heart size={15} /> Save item
              </button>
            </div>

            <div className="detail-specs">
              <div>
                <strong>SKU</strong>
                <span>{product.id}</span>
              </div>
              <div>
                <strong>Category</strong>
                <span>{product.category}</span>
              </div>
              <div>
                <strong>Style</strong>
                <span>Minimal modern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
