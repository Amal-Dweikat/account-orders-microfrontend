import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/icon/icon.js';

@customElement('stat-card')
export class StatCard extends LitElement {

    @property()
    title = '';

    @property()
    value = '';

    @property()
    icon = '';

    static styles = css`

    :host {
        display: block;
    }

    .card {
        background: white;
        border-radius: 16px;
        padding: 20px;

        display: flex;
        align-items: center;
        gap: 16px;

        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    }

    .icon {
        width: 52px;
        height: 52px;

        flex-shrink: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 14px;

        background: #F0EAFB;
        color: #6750A4;
    }

        md-icon {
            font-family: 'Material Icons';
            font-size: 26px;
            width: 26px;
            height: 26px;
            color: #6750A4;
        }

    h4 {
        margin: 0 0 6px;

        color: #625B71;
        font-size: 14px;
        font-weight: 500;
    }

    h2 {
        margin: 0;

        color: #2D2936;
        font-size: 24px;
        font-weight: 700;
    }

    `;

    render() {
        return html`

            <div class="card">

                <div class="icon">
                    <md-icon>${this.icon}</md-icon>
                </div>

                <div>
                    <h4>${this.title}</h4>
                    <h2>${this.value}</h2>
                </div>

            </div>

        `;
    }
}