import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readProducts, writeProducts } from '@/lib/data';
import type { Product } from '@/lib/types';

export async function GET() {
  const products = await readProducts();
  return NextResponse.json({ products });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as Partial<Product>;
  const products = await readProducts();
  const newProduct: Product = {
    id: Date.now(),
    name: body.name || 'New product',
    shortDescription: body.shortDescription || 'Freshly added item',
    description: body.description || 'Premium quality product',
    price: Number(body.price || 0),
    category: body.category || 'gadgets',
    image: body.image || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80',
    stock: Number(body.stock || 1),
    createdAt: new Date().toISOString()
  };

  const updatedProducts = [newProduct, ...products];
  await writeProducts(updatedProducts);

  return NextResponse.json({ success: true, product: newProduct });
}
