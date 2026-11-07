import fs from 'fs/promises';
import path from 'path';
import type { Product } from '@/lib/types';

const DATA_FILE = path.join(process.cwd(), 'data', 'products.json');

export async function readProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data) as Product[];
  } catch {
    return [];
  }
}

export async function writeProducts(products: Product[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf-8');
}
