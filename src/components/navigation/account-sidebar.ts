import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/icon/icon.js';


import { navigate } from '../../events/navigation-events';
import { AccountService } from '../../services/account-service';
@customElement('account-sidebar')
export class AccountSidebar extends LitElement {

    @property()
    active = 'Profile';

    static styles = css`
        :host {
            display: block;
            width: 220px;
            min-width: 220px;
            box-sizing: border-box;
        }

        .sidebar {
            width: 220px;
            min-width: 220px;
            background: #F8F5FD;
            border-radius: 20px;
            padding: 20px;
            box-sizing: border-box;
        }

        h4 {
            margin: 0 0 24px;
            color: #6750A4;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            padding: 12px 14px;
            margin-bottom: 8px;
            border-radius: 12px;

            cursor: pointer;

            display: flex;
            align-items: center;

            gap: 12px;

            transition: .2s;

            font-size: 15px;
        }

        li:hover {
            background: #ECE6F9;
        }

        .active {
            background: #6750A4;
            color: white;
            font-weight: 600;
        }

        md-icon {
            font-family: 'Material Icons';
            font-size: 22px;
            width: 22px;
            height: 22px;
            color: #6750A4;
        }

        .active md-icon {
            color: white;
        }
    `;

    private handleNavigation(label: string) {

        switch (label) {

            case 'Orders':
                navigate('order-history');
                break;

            case 'Profile':
                navigate('dashboard');
                break;

            case 'Wishlist':
                navigate('wishlist');
                break;

            case 'Logout':
                AccountService.logout();
                navigate('login');
                break;
        }
    }

    render() {

        const items = [
            {
                label: 'Profile',
                icon: 'person'
            },
            {
                label: 'Orders',
                icon: 'shopping_bag'
            },
            // {
            //     label: 'Addresses',
            //     icon: 'location_on'
            // },
            // {
            //     label: 'Payments',
            //     icon: 'credit_card'
            // },
            // {
            //     label: 'Settings',
            //     icon: 'settings'
            // },
            {
                label: 'Wishlist',
                icon: 'favorite'
            },
            {
                label: 'Logout',
                icon: 'logout'
            },
        ];

        return html`

            <div class="sidebar">

                <h4>Welcome Back</h4>

                <ul>

                    ${items.map(item => html`

                        <li
                            class=${this.active === item.label ? 'active' : ''}
                            @click=${() => this.handleNavigation(item.label)}
                        >

                            <md-icon>${item.icon}</md-icon>

                            <span>
                                ${item.label}
                            </span>

                        </li>

                    `)}

                </ul>

            </div>

        `;
    }
}