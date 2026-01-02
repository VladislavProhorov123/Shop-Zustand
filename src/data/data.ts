export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  inStock: boolean;
}

export const product: IProduct[] = [
  {
    id: 1,
    title: "Nike Air",
    price: 120,
    category: "Shoes",
    brand: "Nike",
    rating: 5,
    inStock: true,
  },
  {
    id: 2,
    title: "Adidas Boost",
    price: 100,
    category: "Shoes",
    brand: "Adidas",
    rating: 4,
    inStock: false,
  },
  {
    id: 3,
    title: "Puma Classic",
    price: 90,
    category: "Shoes",
    brand: "Puma",
    rating: 3,
    inStock: true,
  },
  {
    id: 4,
    title: "Nike Hoodie",
    price: 80,
    category: "Clothes",
    brand: "Nike",
    rating: 4,
    inStock: true,
  },
  {
    id: 5,
    title: "Adidas T-Shirt",
    price: 40,
    category: "Clothes",
    brand: "Adidas",
    rating: 5,
    inStock: true,
  },
];
