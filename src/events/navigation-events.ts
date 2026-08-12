export type RouteName =
    | 'login'
    | 'register'
    | 'dashboard'
    | 'orders'
    | 'order-history'
    | 'reviews'
    | 'wishlist';

export function navigate(route: RouteName) {
    window.history.pushState({}, '', `/${route}`);

    window.dispatchEvent(
        new CustomEvent<RouteName>('navigate', {
            detail: route
        })
    );
}