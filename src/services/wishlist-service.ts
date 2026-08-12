import { wishlistItems } from './mock-data';
import type {WishlistItem} from "../ models/wishlist-item.ts";


export class WishlistService {

    static getItems(): WishlistItem[] {

        return wishlistItems;

    }

    static removeItem(id: number): void {

        const index = wishlistItems.findIndex(
            item => item.id === id
        );

        if (index !== -1) {

            wishlistItems.splice(index, 1);

        }

    }

    static addToCart(id: number): void {

        const item = wishlistItems.find(
            item => item.id === id
        );

        if (item) {

            console.log(
                'Added to cart:',
                item.name
            );

        }

    }

}