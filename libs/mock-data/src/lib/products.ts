export interface Product {
  id: string;
  name: string;
  price: number;
}

export const exampleProducts: Product[] = [
  {
    id: '1',
    name: 'product 1',
    price: 100,
  },
  {
    id: '2',
    name: 'product 2',
    price: 200
  },
];