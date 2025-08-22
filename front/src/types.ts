
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    originalPrice?: number | null;
    price: number;
    rating: number;
    ratingCount?: number;
    tag?: string | null;
    dateAdded?: string;
    status?: 'in-stock' | 'out-of-stock';
}
