export interface OrderItem {
    id: number;
    image: string;
}

export interface Order {
    id: number;
    number: string;
    date: string;
    status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    total: number;
    items: OrderItem[];
}