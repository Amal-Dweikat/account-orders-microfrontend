import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './router/app-router';
import './components/navigation/account-sidebar';
import type {RouteName} from "./events/navigation-events.ts";



@customElement('account-app')
export class AccountApp extends LitElement {

    @state()
    private currentRoute: RouteName = this.getRouteFromUrl();
    private getRouteFromUrl(): RouteName {
        const path = window.location.pathname.replace('/', '');

        const validRoutes: RouteName[] = [
            'login',
            'register',
            'dashboard',
            'orders',
            'order-history',
            'reviews',
            'wishlist',
        ];

        return validRoutes.includes(path as RouteName)
            ? path as RouteName
            : 'login';
    }

    static styles = css`

        :host {
            display: block;
            width: 100%;
            min-height: 100vh;
            background: #F6F2FF;
        }

        .page {
            width: 100%;
            min-height: 100vh;

            box-sizing: border-box;

            padding: 32px 40px;
        }

        .auth-page {
            width: 100%;
            min-height: calc(100vh - 64px);

            display: flex;
            justify-content: center;
            align-items: center;

            box-sizing: border-box;
        }

        .account-layout {
            width: 100%;
            max-width: 1440px;

            margin: 0 auto;

            display: grid;

            grid-template-columns: 220px minmax(0, 1fr);

            gap: 28px;

            align-items: start;
        }

        .sidebar {
            width: 220px;
        }

        .content {
            min-width: 0;
            width: 100%;
        }

        @media (max-width: 700px) {

            .account-layout {
                grid-template-columns: 1fr;
            }

            .sidebar {
                width: 100%;
            }

        }

    `;

    connectedCallback() {
        super.connectedCallback();

        window.addEventListener(
            'navigate',
            this.handleNavigation as EventListener
        );
    }

    disconnectedCallback() {

        window.removeEventListener(
            'navigate',
            this.handleNavigation as EventListener
        );

        super.disconnectedCallback();
    }

    private handleNavigation = (
        event: CustomEvent<RouteName>
    ) => {

        this.currentRoute = event.detail;

    };

    render() {

        const isAuthPage =
            this.currentRoute === 'login' ||
            this.currentRoute === 'register';

        if (isAuthPage) {

            return html`
                <div class="page">
                    <div class="auth-page">
                        <app-router></app-router>
                    </div>
                </div>
            `;

        }

        return html`

            <div class="page">

                <div class="account-layout">

                    <div class="sidebar">

                        <account-sidebar
                            .active=${this.currentRoute === 'dashboard'
            ? 'Profile'
            : this.currentRoute === 'order-history'
                ? 'Orders'
                : this.currentRoute === 'wishlist'
                    ? 'Wishlist'
                    : 'Reviews'}
                        ></account-sidebar>

                    </div>

                    <main class="content">

                        <app-router></app-router>

                    </main>

                </div>

            </div>

        `;

    }

}