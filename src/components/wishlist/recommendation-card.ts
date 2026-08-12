import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('recommendation-card')
export class RecommendationCard extends LitElement {

    @property()
    name = '';

    @property()
    price = '';

    @property()
    image = '';

    static styles = css`

        :host {
            display: block;
        }

        .card {
            background: white;
            border: 1px solid #E5DFEB;
            border-radius: 8px;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 130px;
            object-fit: cover;
            display: block;
        }

        .content {
            padding: 8px;
        }

        h4 {
            margin: 0 0 4px;

            font-size: 11px;
            font-weight: 600;

            color: #342D3F;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        span {
            font-size: 10px;
            color: #6750A4;
        }

    `;

    render() {

        return html`

            <div class="card">

                <img
                    src=${this.image}
                    alt=${this.name}
                >

                <div class="content">

                    <h4>${this.name}</h4>

                    <span>$${this.price}</span>

                </div>

            </div>

        `;

    }

}