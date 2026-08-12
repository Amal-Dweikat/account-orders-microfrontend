import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {Order} from "../../ models/order.ts";
import {navigate} from "../../events/navigation-events.ts";


@customElement('order-history-card')
export class OrderHistoryCard extends LitElement {

    @property({ attribute: false })
    order!: Order;

    private goToReviews() {
        navigate('reviews');
    }
    static styles = css`

        :host {
            display: block;
        }

        .card {
            background: white;
            border: 1px solid #E2DCEB;
            border-radius: 14px;
            padding: 18px;
            margin-bottom: 16px;
        }

        .top {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr auto;
            align-items: center;
            gap: 20px;
            padding-bottom: 14px;
            border-bottom: 1px solid #E7E1EB;
        }

        .label {
            display: block;
            font-size: 10px;
            color: #777080;
            margin-bottom: 4px;
            text-transform: uppercase;
        }

        .value {
            font-size: 13px;
            color: #29232F;
        }

        .price {
            color: #6750A4;
            font-weight: 600;
        }

        .status {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
        }

        .shipped {
            background: #EDE5FF;
            color: #6750A4;
        }

        .delivered {
            background: #DFF5E7;
            color: #287A45;
        }

        .cancelled {
            background: #FFE1E1;
            color: #C62828;
        }

        .processing {
            background: #FFF0D9;
            color: #A35B00;
        }

        .bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            padding-top: 14px;
        }

        .products {
            display: flex;
            align-items: center;
        }

        .product {
            width: 58px;
            height: 58px;
            object-fit: cover;
            border-radius: 5px;
            border: 1px solid #E4DFE8;
            margin-right: 5px;
        }

        .more {
            width: 38px;
            height: 38px;
            border-radius: 5px;
            background: #E9DDFF;
            color: #6750A4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 600;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        button {
            height: 38px;
            padding: 0 18px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
        }

        .secondary {
            border: 1px solid #6750A4;
            background: white;
            color: #6750A4;
        }

        .primary {
            border: none;
            background: #6750A4;
            color: white;
        }

        @media (max-width: 700px) {

            .top {
                grid-template-columns: 1fr 1fr;
            }

            .bottom {
                flex-direction: column;
                align-items: flex-start;
            }

            .actions {
                width: 100%;
            }

        }

    `;

    private getStatusClass(): string {
        return this.order.status.toLowerCase();
    }

    render() {

        const visibleItems = this.order.items.slice(0, 3);
        const remaining = this.order.items.length - 3;

        return html`

            <div class="card">

                <div class="top">

                    <div>
                        <span class="label">Order Number</span>
                        <span class="value">${this.order.number}</span>
                    </div>

                    <div>
                        <span class="label">Date Placed</span>
                        <span class="value">${this.order.date}</span>
                    </div>

                    <div>
                        <span class="label">Total Price</span>
                        <span class="value price">
                            $${this.order.total.toFixed(2)}
                        </span>
                    </div>

                    <span class="status ${this.getStatusClass()}">
                        ${this.order.status}
                    </span>

                </div>

                <div class="bottom">

                    <div class="products">

                        ${visibleItems.map(item => html`
                            <img
                                class="product"
                                src=${item.image}
                                alt="Product">
                        `)}

                        ${remaining > 0
            ? html`
                                <div class="more">
                                    +${remaining}
                                </div>
                            `
            : ''
        }

                    </div>

                    <div class="actions">

                        ${this.order.status === 'Shipped'
            ? html`
                                <button class="secondary">
                                    Track Package
                                </button>
                            `
            : ''
        }

                        ${this.order.status === 'Delivered'
            ? html`
                                    <button @click=${this.goToReviews}>
                                        Write Review
                                    </button>
                            `
            : ''
        }

                        <button class="primary">
                            View Details
                        </button>

                    </div>

                </div>

            </div>

        `;
    }
}