import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/button/filled-button.js';

@customElement('primary-button')
export class PrimaryButton extends LitElement {

    @property({ type: String })
    label = 'Button';

    static styles = css`
    md-filled-button {
      width: 100%;
      --md-filled-button-container-color: #6750A4;
      --md-filled-button-label-text-color: white;
    }
  `;
    private handleClick() {

        this.dispatchEvent(

            new Event('click', {
                bubbles: true,
                composed: true
            })

        );

    }
    render() {
        return html`
            <md-filled-button
                    @click=${this.handleClick}>
        ${this.label}
      </md-filled-button>
    `;
    }
}