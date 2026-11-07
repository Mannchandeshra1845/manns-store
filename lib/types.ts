export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
};
