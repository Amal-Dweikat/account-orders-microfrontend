import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type {Review} from "../../ models/review.ts";



@customElement('review-card')
export class ReviewCard extends LitElement {

    @property({ type: Object })
    review!: Review;

    @state()
    private selectedRating = 0;

    @state()
    private comment = '';

    static styles = css`

        :host {
            display: block;
            width: 100%;
        }

        .card {
            width: 100%;
            box-sizing: border-box;

            background: white;

            border: 1px solid #DDD5E5;
            border-radius: 9px;

            padding: 14px;

            display: grid;
            grid-template-columns: 95px minmax(0, 1fr);

            gap: 12px;
        }


        

        .product-image {
            width: 105px;
            height: 105px;

            border-radius: 5px;

            overflow: hidden;

            background: #F5F2F7;
        }

        .product-image img {
            width: 100%;
            height: 100%;

            object-fit: cover;

            display: block;
        }


        

        .review-content {
            min-width: 0;

            background: #FCF9FD;

            border: 1px solid #E3DCE9;
            border-radius: 6px;

            padding: 12px;
        }

        h3 {
            margin: 0;

            color: #342D3F;

            font-size: 13px;
            font-weight: 600;
        }

        .date {
            margin-top: 3px;

            color: #777;

            font-size: 9px;
        }

        .label {
            margin-top: 7px;

            color: #342D3F;

            font-size: 9px;
            font-weight: 500;
        }




        .stars {
            gap: 2px;
            margin-top: 4px;
            margin-bottom: 2px;
        }

        .star {
            border: none;
            background: transparent;

            padding: 0;

            color: #C8C1D2;

            font-size: 16px;

            cursor: pointer;
        }

        .star.selected {
            color: #6750A4;
        }


        

        textarea {
            width: 100%;
            height: 55px;

            box-sizing: border-box;

            resize: none;

            border: 1px solid #D8D0DF;
            border-radius: 5px;

            padding: 7px;

            margin-top: 4px;

            font-family: inherit;
            font-size: 10px;

            background: white;

            outline: none;
        }

        textarea:focus {
            border-color: #6750A4;
        }


       

        .bottom {
            display: flex;
            justify-content: flex-end;

            margin-top: 5px;
        }

        button.submit {
            border: none;

            background: #6750A4;
            color: white;

            padding: 7px 18px;
            font-size: 10px;
            border-radius: 18px;
            font-weight: 600;

            cursor: pointer;
        }

        button.submit:hover {
            background: #594394;
        }


        @media (max-width: 600px) {

            .card {
                grid-template-columns: 1fr;
            }

            .product-image {
                width: 100%;
                height: 160px;
            }

        }

    `;
    private selectRating(rating: number) {

        this.selectedRating = rating;

    }

    private handleComment(event: Event) {

        this.comment =
            (event.target as HTMLTextAreaElement).value;

    }

    private submit() {

        this.dispatchEvent(
            new CustomEvent('submit-review', {
                detail: {
                    id: this.review.id,
                    rating: this.selectedRating,
                    comment: this.comment
                },
                bubbles: true,
                composed: true
            })
        );

    }

    render() {

        return html`

            <div class="card">

                <div class="product-image">

                    <img
                        src=${this.review.productImage}
                        alt=${this.review.productName}
                    >

                </div>

                <div class="review-content">

                    <h3>
                        ${this.review.productName}
                    </h3>

                    <div class="date">
                        Purchased on ${this.review.purchaseDate}
                    </div>

                    <div class="label">
                        Rate this product
                    </div>

                    <div class="stars">

                        ${[1, 2, 3, 4, 5].map(
            star => html`

                                <button
                                    class="star ${this.selectedRating >= star
                ? 'selected'
                : ''}"
                                    @click=${() =>
                this.selectRating(star)}
                                >
                                    ★
                                </button>

                            `
        )}

                    </div>

                    <textarea
                        placeholder="What did you like or dislike?"
                        @input=${this.handleComment}
                    ></textarea>

                    <div class="bottom">

                        <button
                            class="submit"
                            @click=${this.submit}
                        >
                            Submit Review
                        </button>

                    </div>

                </div>

            </div>

        `;

    }

}