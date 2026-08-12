import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../../components/navigation/account-sidebar';
import '../../components/reviews/review-card';

import { ReviewService } from '../../services/review-service';

@customElement('reviews-page')
export class ReviewsPage extends LitElement {

    @state()
    private reviews = ReviewService.getPendingReviews();

    static styles = css`

        :host {
            display: block;
            min-height: 100vh;
            background: #F8F4FA;
            font-family: Inter, Arial, sans-serif;
        }

      

        .content {
            min-width: 0;
            width: 100%;
        }


        /* HEADER */

        .header {
            border-bottom: 1px solid #DDD5E5;
            margin-bottom: 16px;
        }

        .title-area {
            margin-bottom: 14px;
        }

        h1 {
            margin: 0;

            font-size: 28px;
            font-weight: 500;

            color: #342D3F;
        }

        .subtitle {
            margin-top: 5px;

            color: #625B71;
            font-size: 12px;
        }


        /* TABS */

        .tabs {
            display: flex;
            align-items: flex-end;

            gap: 28px;

            height: 38px;
        }

        .tab {
            position: relative;

            border: none;
            background: transparent;

            padding: 0 2px 10px;

            color: #625B71;

            font-size: 12px;
            cursor: pointer;
        }

        .tab.active {
            color: #6750A4;
            font-weight: 600;
        }

        .tab.active::after {
            content: '';

            position: absolute;

            left: 0;
            right: 0;
            bottom: -1px;

            height: 2px;

            background: #6750A4;
            border-radius: 2px;
        }


        /* REVIEWS */

        .reviews {
            display: flex;
            flex-direction: column;

            gap: 12px;

            width: 100%;
        }


        @media (max-width: 1050px) {

            .page {
                padding: 24px;
            }

            .layout {
                grid-template-columns: 200px minmax(0, 1fr);
                width: 100%;
            }

        }


        @media (max-width: 700px) {

            .layout {
                grid-template-columns: 1fr;
            }

        }

    `;

    private handleSubmit(event: CustomEvent) {

        ReviewService.submitReview(
            event.detail.id,
            event.detail.rating,
            event.detail.comment
        );

        this.reviews = [...this.reviews];

    }

    render() {

        return html`

            <div class="page">

                <div class="layout">

                   

                    <main class="content">

                        <div class="header">

                            <div class="title-area">

                                <h1>
                                    Product Reviews
                                </h1>

                                <div class="subtitle">
                                    Share your thoughts on recent purchases and manage past feedback.
                                </div>

                            </div>

                            <div class="tabs">

                                <button class="tab active">
                                    Pending Reviews
                                </button>

                                <button class="tab">
                                    My Reviews
                                </button>

                            </div>

                        </div>

                        <div
                                class="reviews"
                                @submit-review=${this.handleSubmit}
                        >

                            ${this.reviews.map(
                                    review => html`

                                        <review-card
                                                .review=${review}>
                                        </review-card>

                                    `
                            )}

                        </div>

                    </main>

                </div>

            </div>

        `;

    }

}