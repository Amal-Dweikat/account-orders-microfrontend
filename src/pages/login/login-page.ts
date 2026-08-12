import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../../components/cards/auth-card.ts';
import '../../components/inputs/text-input.ts';
import '../../components/inputs/password-input.ts';
import '../../components/buttons/ primary-button.ts';
import '../../components/buttons/social-button.ts';
import '@material/web/checkbox/checkbox.js';
import { state } from 'lit/decorators.js';
import { navigate } from '../../events/navigation-events';
import { AccountService } from '../../services/account-service';
import { dispatchLogin } from '../../events/account-events';

@customElement('login-page')
export class LoginPage extends LitElement {
    @state()
    private email = '';

    @state()
    private password = '';

    @state()
    private error = '';
    static styles = css`
        :host{
            display:block;
            width:100%;
            max-width:430px;
        }

    .header {
      text-align: center;
      margin-bottom: 24px;
    }

    h1 {
      margin: 0;
      color: #6750A4;
      font-size: 28px;
      font-weight: 700;
    }

    p {
      color: #625B71;
      margin-top: 8px;
      margin-bottom: 0;
    }


        .social-buttons{
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:12px;
            width:100%;
        }

    .form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #625B71;
    }

    .remember {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .forgot {
      color: #6750A4;
      text-decoration: none;
    }

    .divider {
      text-align: center;
      margin: 24px 0 16px;
      color: #625B71;
      position: relative;
    }

    .divider::before,
    .divider::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 35%;
      height: 1px;
      background: #C1BFCF;
    }

    .divider::before { left: 0; }
    .divider::after { right: 0; }

  

    .signup {
      text-align: center;
      margin-top: 24px;
      color: #625B71;
    }

    .signup a {
      color: #6750A4;
      text-decoration: none;
      font-weight: 600;
    }
        .error{
            color:#d32f2f;
            text-align:center;
            font-size:14px;
            margin-top:8px;
        }
        
  `;
    private login() {

        this.error = '';

        if (!this.email.trim() || !this.password.trim()) {

            this.error = 'Please enter email and password';

            return;
        }

        const user = AccountService.login(
            this.email,
            this.password
        );

        if (!user) {

            this.error = 'Invalid email or password';

            return;
        }

        AccountService.saveUser(user);

        dispatchLogin(user);

        AccountService.saveUser(user);

        navigate('dashboard');
    }
    private goToRegister(event: Event) {

        event.preventDefault();

        navigate('register');

    }

    render() {
        return html`
      <auth-card>

        <div class="header">
          <h1>Login</h1>
          <p>Welcome back! Please sign in.</p>
        </div>

        <div class="form">

            <text-input
                    label="Email"
                    @value-changed=${(e: CustomEvent) => this.email = e.detail}>
            </text-input>

            <password-input
                    label="Password"
                    @value-changed=${(e: CustomEvent) => this.password = e.detail}>
            </password-input>

          <div class="options">

            <div class="remember">
              <md-checkbox></md-checkbox>
              <span>Remember me</span>
            </div>

            <a href="#" class="forgot">
              Forgot password?
            </a>

          </div>

            <primary-button
                    label="Login"
                    @click=${this.login}>
            </primary-button>
            ${this.error
                    ? html`
        <p class="error">
            ${this.error}
        </p>
    `
                    : ''
            }
        </div>

        <div class="divider">or</div>

          <div class="social-buttons">

              <social-button
                      label="Google"
                      icon="fa-brands fa-google">
              </social-button>

              <social-button
                      label="Apple"
                      icon="fa-brands fa-apple">
              </social-button>

          </div>

        <div class="signup">
          Don&apos;t have an account?
            <a
                    href="#"
                    @click=${this.goToRegister}>
                Sign up
            </a>
        </div>

      </auth-card>
    `;
    }
}