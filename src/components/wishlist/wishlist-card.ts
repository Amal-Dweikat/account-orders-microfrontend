import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type {WishlistItem} from "../../ models/wishlist-item.ts";



@customElement('wishlist-card')
export class WishlistCard extends LitElement {

    @property({ type: Object })
    item!: WishlistItem;

    static styles = css`

        :host {
            display: block;
        }

        .card {
            background: white;
            border: 1px solid #E5DFEB;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
        }

        .image-container {
            position: relative;
            height: 170px;
            background: #F5F2F7;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .remove {
            position: absolute;
            top: 10px;
            right: 10px;

            width: 28px;
            height: 28px;

            border: none;
            border-radius: 50%;

            background: rgba(255,255,255,.9);
            color: #777;

            cursor: pointer;
            font-size: 16px;
        }

        .out-of-stock {
            position: absolute;
            top: 10px;
            left: 10px;

            background: rgba(255,255,255,.9);
            color: #777;

            padding: 5px 8px;
            border-radius: 4px;

            font-size: 10px;
            font-weight: 600;
        }

        .content {
            padding: 12px;
        }

        h3 {
            margin: 0 0 6px;

            font-size: 13px;
            font-weight: 600;
            color: #342D3F;

            line-height: 1.4;
        }

        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 8px;
        }

        .price {
            color: #6750A4;
            font-size: 13px;
            font-weight: 600;
        }

        .rating {
            color: #625B71;
            font-size: 11px;
        }

        .cart {
            width: 100%;

            border: none;
            border-radius: 20px;

            padding: 9px;

            background: #6750A4;
            color: white;

            font-size: 12px;
            font-weight: 600;

            cursor: pointer;
        }

        .cart:disabled {
            background: white;
            border: 1px solid #CFC8D8;
            color: #777;
            cursor: default;
        }

    `;

    private handleRemove() {

        this.dispatchEvent(
            new CustomEvent('remove-wishlist', {
                detail: this.item.id,
                bubbles: true,
                composed: true
            })
        );

    }

    private addToCart() {

        this.dispatchEvent(
            new CustomEvent('add-to-cart', {
                detail: this.item.id,
                bubbles: true,
                composed: true
            })
        );

    }

    render() {

        return html`

            <div class="card">

                <div class="image-container">

                    <img
                        src=${this.item.image}
                        alt=${this.item.name}
                    >

                    ${!this.item.inStock
            ? html`
                            <span class="out-of-stock">
                                OUT OF STOCK
                            </span>
                        `
            : ''
        }

                    <button
                        class="remove"
                        @click=${this.handleRemove}
                    >
                        ×
                    </button>

                </div>

                <div class="content">

                    <h3>
                        ${this.item.name}
                    </h3>

                    <div class="info">

                        <span class="price">
                            $${this.item.price.toFixed(2)}
                        </span>

                        <span class="rating">
                            ★ ${this.item.rating}
                            (${this.item.reviews})
                        </span>

                    </div>

                    <button
                        class="cart"
                        ?disabled=${!this.item.inStock}
                        @click=${this.addToCart}
                    >
                        ${this.item.inStock
            ? 'Add to Cart'
            : 'Notify When Available'
        }
                    </button>

                </div>

            </div>

        `;

    }

}