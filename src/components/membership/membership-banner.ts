import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('membership-banner')
export class MembershipBanner extends LitElement {

    static styles=css`

    .banner{

      margin-top:24px;

      background:#6750A4;

      color:white;

      border-radius:24px;

      padding:32px;

      display:flex;

      justify-content:space-between;

      align-items:center;

    }

    h2{

      margin:0 0 12px;

    }

    p{

      margin:0;

      opacity:.9;

    }

    button{

      margin-top:20px;

      border:none;

      background:white;

      color:#6750A4;

      padding:12px 24px;

      border-radius:30px;

      cursor:pointer;

      font-weight:bold;

    }

    .badge{

      font-size:60px;

      opacity:.3;

    }

  `;

    render(){

        return html`

      <div class="banner">

        <div>

          <h2>

            Get 15% Cashback on Gold Membership

          </h2>

          <p>

            Renew now and enjoy exclusive benefits.

          </p>

          <button>

            Renew Today

          </button>

        </div>

        <div class="badge">

          ★

        </div>

      </div>

    `;

    }

}