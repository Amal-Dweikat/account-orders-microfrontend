import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { navigate } from '../../events/navigation-events';
import '../../components/cards/auth-card';
import '../../components/inputs/text-input';
import '../../components/inputs/password-input';
import '../../components/buttons/ primary-button';

import '@material/web/checkbox/checkbox.js';

import { AccountService } from '../../services/account-service';

@customElement('register-page')
export class RegisterPage extends LitElement {

    @state()
    private name = '';

    @state()
    private email = '';

    @state()
    private phone = '';

    @state()
    private password = '';

    @state()
    private confirmPassword = '';

    @state()
    private acceptedTerms = false;

    @state()
    private error = '';

    static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 430px;
      font-family: Inter, Arial, sans-serif;
    }

    .header {
      text-align: center;
      margin-bottom: 24px;
    }

    h1 {
      margin: 0;
      font-size: 30px;
      font-weight: 700;
      color: #6750A4;
    }

    p {
      margin-top: 8px;
      color: #625B71;
      font-size: 14px;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .password-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .terms {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: #625B71;
    }

    .terms b {
      color: #6750A4;
    }

    .login-link {
      margin-top: 24px;
      text-align: center;
      color: #625B71;
      font-size: 14px;
    }

    .login-link a {
      color: #6750A4;
      text-decoration: none;
      font-weight: 600;
    }

    .error {
      color: #d32f2f;
      text-align: center;
      font-size: 14px;
      margin-top: 8px;
    }
  `;
    private goToLogin(event: Event) {

        event.preventDefault();

        navigate('login');

    }
    private register() {

        this.error = '';

        if (
            !this.name ||
            !this.email ||
            !this.phone ||
            !this.password ||
            !this.confirmPassword
        ) {
            this.error = 'Please fill in all fields.';
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.error = 'Passwords do not match.';
            return;
        }

        if (!this.acceptedTerms) {
            this.error = 'Please accept the Terms & Conditions.';
            return;
        }

        const user = {
            id: Date.now(),
            name: this.name,
            email: this.email,
            phone: this.phone,
            password: this.password
        };

        AccountService.register(user);
        AccountService.saveUser(user);

        navigate('dashboard');
    }

    render() {
        return html`

      <auth-card>

        <div class="header">
          <h1>Create New Account</h1>
          <p>Join ShopModern for exclusive access and premium deals.</p>
        </div>

        <div class="form">

          <text-input
            label="Full Name"
            @value-changed=${(e: CustomEvent) => this.name = e.detail}>
          </text-input>

          <text-input
            label="Email Address"
            @value-changed=${(e: CustomEvent) => this.email = e.detail}>
          </text-input>

          <text-input
            label="Phone Number"
            @value-changed=${(e: CustomEvent) => this.phone = e.detail}>
          </text-input>

          <div class="password-row">

            <password-input
              label="Password"
              @value-changed=${(e: CustomEvent) => this.password = e.detail}>
            </password-input>

            <password-input
              label="Confirm Password"
              @value-changed=${(e: CustomEvent) => this.confirmPassword = e.detail}>
            </password-input>

          </div>

          <div class="terms">

              <md-checkbox
                      @change=${(e: Event) => {
                          this.acceptedTerms = (e.target as HTMLInputElement).checked;
                      }}>
              </md-checkbox>

            <span>
              I agree to the
              Terms & Conditions
              and
              Privacy Policy
            </span>

          </div>

          <primary-button
            label="Create Account"
            @click=${this.register}>
          </primary-button>

          ${this.error
            ? html`<p class="error">${this.error}</p>`
            : ''}

        </div>

        <div class="login-link">
          Already have an account?
            <a
                    href="#"
                    @click=${this.goToLogin}>
                Log In
            </a>
        </div>

      </auth-card>

    `;
    }

}