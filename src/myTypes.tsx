export const FAKESTOREURL="https://fakestoreapi.com"
export type Product={
    id:number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export type Products=Product[]