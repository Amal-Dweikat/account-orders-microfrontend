import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';

@customElement('text-input')
export class TextInput extends LitElement {

    @property({ type: String })
    label = '';

    @property({ type: String })
    type = 'text';

    @property({ type: String })
    value = '';


    static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    md-outlined-text-field {
      width: 100%;
    }
  `;
    private handleInput(event: Event) {

        const target = event.target as HTMLInputElement;

        this.value = target.value;

        this.dispatchEvent(
            new CustomEvent('value-changed', {
                detail: this.value,
                bubbles: true,
                composed: true
            })
        );

    }

    render() {
        return html`
            <md-outlined-text-field
                    .label=${this.label}
                    .type=${this.type}
                    .value=${this.value}
                    @input=${this.handleInput}>
            </md-outlined-text-field>
    `;
    }
}