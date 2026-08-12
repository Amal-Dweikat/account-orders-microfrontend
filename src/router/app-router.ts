import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../pages/reviews/reviews-page';
import '../pages/login/login-page';
import '../pages/register/register-page';
import '../pages/dashboard/dashboard-page';
import '../pages/order-history/order-history-page';
import type { RouteName } from '../events/navigation-events';
import '../pages/wishlist/wishlist-page';

@customElement('app-router')
export class AppRouter extends LitElement {
    private getRouteFromUrl(): RouteName {
        const path = window.location.pathname.replace('/', '');

        const validRoutes: RouteName[] = [
            'login',
            'register',
            'dashboard',
            'orders',
            'order-history',
            'reviews',
            'wishlist'
        ];

        return validRoutes.includes(path as RouteName)
            ? path as RouteName
            : 'login';
    }

    @state()
    private currentRoute: RouteName = this.getRouteFromUrl();
    private handlePopState = () => {
        this.currentRoute = this.getRouteFromUrl();
    };
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', this.handlePopState);
        window.addEventListener(
            'navigate',
            this.handleNavigation as EventListener
        );
    }

    disconnectedCallback() {
        window.removeEventListener('popstate', this.handlePopState);
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

        switch (this.currentRoute) {

            case 'register':
                return html`
                    <register-page></register-page>
                `;

            case 'dashboard':
                return html`
                    <dashboard-page></dashboard-page>
                `;

            case 'order-history':
                return html`
                    <order-history-page></order-history-page>
                `;

            case 'wishlist':
                return html`
                    <wishlist-page></wishlist-page>
                `;

            case 'reviews':
                return html`
                    <reviews-page></reviews-page>
                `;

            default:
                return html`
                <login-page></login-page>
            `;

        }

    }
}