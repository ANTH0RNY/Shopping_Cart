export const FAKESTOREURL = "https://fakestoreapi.com";
export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
};
export type Rating = {
  count: number;
  rate: number;
};

export type Products = Product[];

export type Categories = string;
