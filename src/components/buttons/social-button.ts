import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('social-button')
export class SocialButton extends LitElement {

    @property()
    label = '';

    @property()
    icon = '';


    static styles = css`
        :host{
            display:block;
            width:100%;
        }

        button{
            width:100%;
            height:48px;

            display:flex;
            justify-content:center;
            align-items:center;
            gap:8px;

            border:1px solid #D0D0D0;
            border-radius:12px;

            background:white;
            cursor:pointer;

            font-size:14px;
            font-weight:500;
        }

        .icon{
            font-size:18px;
            display:flex;
            align-items:center;
        }
        i{
            font-size:18px;
        }
    `;




    render() {
        return html`
            <button>
                <i class=${this.icon}></i>
                <span>${this.label}</span>
            </button>
        `;
    }
}