import type { Category } from "./Category"

export type Product = {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    active: boolean,
    category: Category | null
}