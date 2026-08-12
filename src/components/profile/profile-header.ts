import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@material/web/icon/icon.js';

import { DashboardService } from '../../services/dashboard-service';

@customElement('profile-header')
export class ProfileHeader extends LitElement {

    static styles = css`

        :host {
            display: block;
        }

        .card {
            background: white;
            border-radius: 20px;
            padding: 24px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            box-shadow: 0 4px 12px rgba(0,0,0,.08);
        }

        .left {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .avatar {
            width: 70px;
            height: 70px;

            border-radius: 14px;

            overflow: hidden;

            flex-shrink: 0;

            background: #F0EAFB;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .avatar img {
            width: 100%;
            height: 100%;

            object-fit: cover;

            display: block;
        }

        h2 {
            margin: 0;
            font-size: 24px;
        }

        p {
            margin: 6px 0;
            color: #666;
            font-size: 14px;
        }

        .verified {
            display: flex;
            align-items: center;
            gap: 5px;

            color: #6750A4;
            font-weight: 500;
        }

        .verified md-icon {
            font-family: 'Material Icons';
            font-size: 18px;
        }

        button {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 10px 20px;

            border: 1px solid #6750A4;

            color: #6750A4;

            background: white;

            border-radius: 30px;

            cursor: pointer;

            font-weight: 600;
        }

        button md-icon {
            font-family: 'Material Icons';
            font-size: 18px;
        }

    `;

    render() {

        const user = DashboardService.getUser();

        return html`

            <div class="card">

                <div class="left">

                    <div class="avatar">

                        <img
                                src=${user.image || 'https://i.pravatar.cc/150?img=12'}
                                alt="Profile picture"
                        />

                    </div>

                    <div>

                        <h2>${user.name}</h2>

                        <p>${user.email}</p>

                        <p class="verified">

                            <md-icon>verified</md-icon>

                            Verified Buyer

                        </p>

                    </div>

                </div>

                <button>

                    <md-icon>edit</md-icon>

                    Edit Profile

                </button>

            </div>

        `;

    }

}