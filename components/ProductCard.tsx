import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill className="product-image" />
        <span className="product-tag">{product.category}</span>
      </div>

      <div className="product-content">
        <div className="product-head">
          <h3>{product.name}</h3>
          <span className="pill">Hot</span>
        </div>
        <p className="product-short">{product.shortDescription}</p>
        <div className="product-meta">
          <span className="price">₹{product.price}</span>
          <span className="stock">{product.stock} left</span>
        </div>
        <div className="product-actions">
          <Link href={`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.id}`} className="secondary-button small">View</Link>
          <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I want to buy ${product.name} for ₹${product.price}.`)}`} target="_blank" rel="noreferrer" className="primary-button small">Order</a>
        </div>
      </div>
    </article>
  );
}
