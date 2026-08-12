import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../../components/navigation/account-sidebar';
import '../../components/wishlist/wishlist-card';
import '../../components/wishlist/recommendation-card';

import { WishlistService } from '../../services/wishlist-service';

@customElement('wishlist-page')
export class WishlistPage extends LitElement {

    @state()
    private items = WishlistService.getItems();

    static styles = css`

        :host {
            display: block;
            min-height: 100vh;

            background: #F6F2FF;

            font-family: Inter, Arial, sans-serif;
        }

       

        .content {
            min-width: 0;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            border-bottom: 1px solid #DDD5E5;

            padding-bottom: 16px;

            margin-bottom: 18px;
        }

        h1 {
            margin: 0;

            font-size: 28px;
            font-weight: 600;

            color: #342D3F;
        }

        .subtitle {
            margin-top: 6px;

            color: #625B71;
            font-size: 13px;
        }

        .filter {
            border: 1px solid #6750A4;

            background: white;

            color: #6750A4;

            border-radius: 20px;

            padding: 8px 16px;

            cursor: pointer;
        }

        .wishlist-grid {
            display: grid;

            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 14px;
        }

        .recommendations {
            margin-top: 34px;

            border-top: 1px solid #DDD5E5;

            padding-top: 18px;
        }

        .recommendations h2 {
            margin: 0 0 12px;

            font-size: 18px;
            font-weight: 500;

            color: #342D3F;
        }

        .recommendation-grid {
            display: grid;

            grid-template-columns:
                repeat(3, 1fr);

            gap: 12px;

            max-width: 520px;
        }

        @media (max-width: 1000px) {

            .page {
                padding: 24px;
            }

            .wishlist-grid {
                grid-template-columns: repeat(2, 1fr);
            }

        }

        @media (max-width: 750px) {

            .layout {
                grid-template-columns: 1fr;
            }

            .wishlist-grid {
                grid-template-columns: 1fr;
            }

        }

    `;

    private removeWishlistItem(event: CustomEvent) {

        WishlistService.removeItem(event.detail);

        this.items = [...WishlistService.getItems()];

    }

    private addToCart(event: CustomEvent) {

        WishlistService.addToCart(event.detail);

    }

    render() {

        return html`

            <div class="page">

                <div class="layout">

                   

                    <main class="content">

                        <div class="header">

                            <div>

                                <h1>
                                    My Wishlist
                                </h1>

                                <div class="subtitle">
                                    You have ${this.items.length} items saved.
                                </div>

                            </div>

                            <button class="filter">
                                Filter
                            </button>

                        </div>

                        <div
                            class="wishlist-grid"
                            @remove-wishlist=${this.removeWishlistItem}
                            @add-to-cart=${this.addToCart}
                        >

                            ${this.items.map(item => html`

                                <wishlist-card
                                        .item=${item}>
                                </wishlist-card>

                            `)}

                        </div>

                        <section class="recommendations">

                            <h2>
                                Recommended for You
                            </h2>

                            <div class="recommendation-grid">

                                <recommendation-card
                                    name="Tactile Mechanical Keyboard"
                                    price="110.00"
                                    image="https://images.unsplash.com/photo-1587829741301-dc798b83add3">
                                </recommendation-card>

                                <recommendation-card
                                        name="Eco-Cork Yoga Mat"
                                        price="65.00"
                                        image="https://images.unsplash.com/photo-1592432678016-e910b452f9a2">
                                </recommendation-card>

                                <recommendation-card
                                    name="Precision Pour Kettle"
                                    price="95.00"
                                    image="https://images.unsplash.com/photo-1594223274512-ad4803739b7c">
                                </recommendation-card>

                            </div>

                        </section>

                    </main>

                </div>

            </div>

        `;

    }

}