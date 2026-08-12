import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../../components/navigation/account-sidebar';
import '../../components/orders/order-history-card';

import { OrderService } from '../../services/order-service';
import type {Order} from "../../ models/order.ts";


@customElement('order-history-page')
export class OrderHistoryPage extends LitElement {

    @state()
    private selectedStatus = 'All';

    @state()
    private searchQuery = '';

    static styles = css`

        :host {
            display: block;
            min-height: 100vh;
            background: #F6F2FF;
            font-family: Inter, Arial, sans-serif;
        }

        

        .content {
            min-width: 0;
            width: 100%;
        }

        h1 {
            margin: 0 0 20px;
            font-size: 28px;
            font-weight: 600;
            color: #211C25;
        }

        .toolbar {
            background: white;
            border: 1px solid #DDD5E5;
            border-radius: 12px;
            padding: 10px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;

            margin-bottom: 16px;
        }

        .filters {
            display: flex;
            gap: 7px;
            flex-wrap: wrap;
        }

        .filter {
            border: none;
            background: #F1ECF4;
            color: #625B71;
            padding: 7px 13px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 12px;
        }

        .filter.active {
            background: #6750A4;
            color: white;
        }

        .search {
            width: 180px;
            height: 34px;
            border: 1px solid #D5CDD9;
            border-radius: 18px;
            padding: 0 14px;
            outline: none;
            font-family: inherit;
        }

        .search:focus {
            border-color: #6750A4;
        }

        .orders {
            margin-top: 8px;
        }

        .empty {
            background: white;
            border: 1px solid #DDD5E5;
            border-radius: 14px;
            padding: 40px;
            text-align: center;
            color: #625B71;
        }

        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 14px;
            margin-top: 25px;
        }

        .page-button {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1px solid #D9D0E0;
            background: white;
            color: #6750A4;
            cursor: pointer;
        }

        .page-number {
            color: #6750A4;
            font-size: 13px;
            font-weight: 600;
        }

        @media (max-width: 900px) {

            .page {
                padding: 24px;
            }

            .layout {
                grid-template-columns: 220px minmax(0, 1fr);
            }

            .toolbar {
                align-items: flex-start;
                flex-direction: column;
            }

            .search {
                width: 100%;
            }
        }

        @media (max-width: 700px) {

            .layout {
                grid-template-columns: 1fr;
            }

        }

    `;

    private get filteredOrders(): Order[] {

        let result = OrderService.filterByStatus(
            this.selectedStatus
        );

        result = OrderService.search(
            result,
            this.searchQuery
        );

        return result;
    }

    private selectStatus(status: string) {
        this.selectedStatus = status;
    }

    private handleSearch(event: Event) {

        const input = event.target as HTMLInputElement;

        this.searchQuery = input.value;
    }

    render() {

        const filters = [
            'All',
            'Processing',
            'Shipped',
            'Delivered',
            'Cancelled'
        ];

        return html`

            <div class="page">

                <div class="layout">

                 

                    <main class="content">

                        <h1>Order History</h1>

                        <div class="toolbar">

                            <div class="filters">

                                ${filters.map(filter => html`

                                    <button
                                        class="filter ${this.selectedStatus === filter ? 'active' : ''}"
                                        @click=${() => this.selectStatus(filter)}>
                                        ${filter}
                                    </button>

                                `)}

                            </div>

                            <input
                                class="search"
                                type="text"
                                placeholder="Search orders..."
                                @input=${this.handleSearch}
                            />

                        </div>

                        <div class="orders">

                            ${this.filteredOrders.length > 0

            ? this.filteredOrders.map(order => html`

                                    <order-history-card
                                        .order=${order}>
                                    </order-history-card>

                                `)

            : html`

                                    <div class="empty">
                                        No orders found.
                                    </div>

                                `
        }

                        </div>

                        <div class="pagination">

                            <button class="page-button">
                                ‹
                            </button>

                            <span class="page-number">1</span>
                            <span>2</span>
                            <span>3</span>

                            <button class="page-button">
                                ›
                            </button>

                        </div>

                    </main>

                </div>

            </div>

        `;
    }
}