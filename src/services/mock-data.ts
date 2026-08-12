import type {User} from "../ models/user.ts";
import type {Stat} from "../ models/stat.ts";
import type {Order} from "../ models/order.ts";
import type {Activity} from "../ models/activity.ts";
import type {WishlistItem} from "../ models/wishlist-item.ts";
import type {Review} from "../ models/review.ts";



export const users: User[] = [

    {
        id: 1,
        name: 'Alex Thompson',
        email: 'alex@example.com',
        phone: '+970599000000',
        password: '123456',
        image: 'https://i.pravatar.cc/150?img=12'
    }

];
export const currentUser = users[0];
export const statistics: Stat[] = [

    {
        title: 'Total Orders',
        value: '12',
        icon: 'shopping_bag'
    },

    {
        title: 'Wishlist',
        value: '5',
        icon: 'favorite'
    },

    {
        title: 'Membership',
        value: 'Gold',
        icon: 'workspace_premium'
    }

];

export const orders: Order[] = [

    {
        id: 1,
        number: '#SM-84920',
        date: 'Oct 24, 2024',
        status: 'Shipped',
        total: 432.50,
        items: [
            {
                id: 1,
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100'
            },
            {
                id: 2,
                image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100'
            },
            {
                id: 3,
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100'
            }
        ]
    },

    {
        id: 2,
        number: '#SM-84711',
        date: 'Oct 12, 2024',
        status: 'Delivered',
        total: 1299.00,
        items: [
            {
                id: 4,
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100'
            }
        ]
    },

    {
        id: 3,
        number: '#SM-84602',
        date: 'Sep 28, 2024',
        status: 'Cancelled',
        total: 89.99,
        items: [
            {
                id: 5,
                image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=100'
            }
        ]
    }

];

export const recentOrders: Order[] = [

    {
        id: 1,
        number: '#SM-92834',
        date: 'Oct 24',
        status: 'Delivered',
        total: 124.50,
        items: [
            {
                id: 1,
                image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100'
            }
        ]
    },

    {
        id: 2,
        number: '#SM-92102',
        date: 'Oct 12',
        status: 'Delivered',
        total: 89.99,
        items: [
            {
                id: 2,
                image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100'
            }
        ]
    }

];

export const recentActivities: Activity[] = [

    {

        id:1,

        title:'Order shipped',

        date:'2 hours ago'

    },

    {

        id:2,

        title:'Added item to wishlist',

        date:'Yesterday'

    },

    {

        id:3,

        title:'Profile updated',

        date:'3 days ago'

    }

];

export const wishlistItems: WishlistItem[] = [

    {
        id: 1,
        name: 'Aura Wireless Over-Ear Headphones',
        price: 249.00,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        rating: 4.8,
        reviews: 120,
        inStock: true
    },

    {
        id: 2,
        name: 'Lumina Smart Temperature Mug',
        price: 89.00,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
        rating: 4.5,
        reviews: 85,
        inStock: true
    },

    {
        id: 3,
        name: 'Nova Desk Lamp - Brushed Metal',
        price: 135.00,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
        rating: 4.9,
        reviews: 42,
        inStock: false
    }

];

export const recommendedProducts: WishlistItem[] = [

    {
        id: 4,
        name: 'Tactile Mechanical Keyboard',
        price: 110.00,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
        rating: 4.7,
        reviews: 64,
        inStock: true
    },

    {
        id: 5,
        name: 'Eco-Cork Yoga Mat',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f',
        rating: 4.6,
        reviews: 38,
        inStock: true
    },

    {
        id: 6,
        name: 'Precision Pour Kettle',
        price: 95.00,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc',
        rating: 4.8,
        reviews: 51,
        inStock: true
    }

];

export const pendingReviews: Review[] = [

    {
        id: 1,
        productName: 'Aura Wireless ANC Headphones',
        productImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        purchaseDate: 'Oct 12, 2023',
        rating: 0,
        comment: ''
    },

    {
        id: 2,
        productName: 'Precision Pour Gooseneck Kettle',
        productImage: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c',
        purchaseDate: 'Oct 05, 2023',
        rating: 0,
        comment: ''
    }

];