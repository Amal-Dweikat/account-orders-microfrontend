import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('auth-card')
export class AuthCard extends LitElement {

    static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 20px;
      padding: 32px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.08);
      width: 420px;
      max-width: 100%;
      box-sizing: border-box;
    }
  `;

    render() {
        return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
    }
}