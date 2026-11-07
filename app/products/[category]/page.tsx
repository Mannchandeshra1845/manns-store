import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { readProducts } from '@/lib/data';
import type { Product } from '@/lib/types';

export default async function ProductsPage({ params }: { params: { category: string } }) {
  const products = await readProducts();
  const chosenCategory = params.category === 'all' ? 'all' : params.category;
  const filteredProducts = chosenCategory === 'all'
    ? products
    : products.filter((product) => product.category.toLowerCase() === chosenCategory.replace('-', ' '));

  return (
    <section className="page-shell">
      <div className="container">
        <div className="breadcrumb-row">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{chosenCategory === 'all' ? 'All products' : chosenCategory.replace('-', ' ')}</span>
        </div>

        <div className="page-header">
          <div>
            <span className="eyebrow">Curated collection</span>
            <h1>{chosenCategory === 'all' ? 'All products' : chosenCategory.replace('-', ' ')}</h1>
          </div>
          <Link href="/" className="secondary-button">Back home</Link>
        </div>

        <div className="product-grid products-list">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <Image src={product.image} alt={product.name} fill className="product-image" />
                <span className="product-tag">{product.category}</span>
              </div>

              <div className="product-content">
                <div className="product-head">
                  <h3>{product.name}</h3>
                  <button className="wishlist"><Heart size={16} /></button>
                </div>
                <p className="product-short">{product.shortDescription}</p>
                <div className="product-meta">
                  <span className="price">₹{product.price}</span>
                  <span className="stock">{product.stock > 0 ? `${product.stock} in stock` : 'Sold out'}</span>
                </div>
                <div className="product-actions">
                  <Link href={`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}/${product.id}`} className="secondary-button small">Details</Link>
                  <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I want to order ${product.name} for ₹${product.price}.`)}`} target="_blank" rel="noreferrer" className="primary-button small">
                    <ShoppingCart size={14} /> Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
