import { orders } from './mock-data';
import type {Order} from "../ models/order.ts";


export class OrderService {

    static getOrders(): Order[] {
        return orders;
    }

    static filterByStatus(
        status: string
    ): Order[] {

        if (status === 'All') {
            return orders;
        }

        return orders.filter(
            order => order.status === status
        );
    }

    static search(
        ordersList: Order[],
        query: string
    ): Order[] {

        if (!query.trim()) {
            return ordersList;
        }

        return ordersList.filter(order =>
            order.number
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    }

}