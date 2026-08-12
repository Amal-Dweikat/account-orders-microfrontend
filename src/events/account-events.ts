export const ACCOUNT_LOGIN = 'account-login';

export const ACCOUNT_LOGOUT = 'account-logout';

export const USER_UPDATED = 'user-updated';


export function dispatchLogin(user: unknown) {

    window.dispatchEvent(

        new CustomEvent(ACCOUNT_LOGIN, {

            detail: user

        })

    );

}