import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readProducts, writeProducts } from '@/lib/data';
import type { Product } from '@/lib/types';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = (await request.json()) as Partial<Product>;
  const products = await readProducts();
  const updated = products.map((product) =>
    product.id === Number(params.id)
      ? {
          ...product,
          name: body.name || product.name,
          shortDescription: body.shortDescription || product.shortDescription,
          description: body.description || product.description,
          price: Number(body.price ?? product.price),
          category: body.category || product.category,
          image: body.image || product.image,
          stock: Number(body.stock ?? product.stock),
          updatedAt: new Date().toISOString()
        }
      : product
  );

  await writeProducts(updated);
  return NextResponse.json({ success: true, products: updated });
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const products = await readProducts();
  const filtered = products.filter((product) => product.id !== Number(params.id));
  await writeProducts(filtered);
  return NextResponse.json({ success: true });
}
