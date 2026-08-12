import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../../components/orders/ recent-orders';
import '../../components/activity/recent-activity';
import '../../components/navigation/account-sidebar';
import '../../components/profile/profile-header';
import '../../components/stats/stat-card';
import '../../components/membership/membership-banner';

import { DashboardService } from '../../services/dashboard-service';

@customElement('dashboard-page')
export class DashboardPage extends LitElement {

    static styles = css`

        :host {
            display: block;
            min-height: 100vh;
            background: #F6F2FF;
            font-family: Inter, Arial, sans-serif;
            box-sizing: border-box;
        }

       

        .content {
            min-width: 0;
            width: 100%;
        }

        .stats {
            margin-top: 24px;

            display: grid;

            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 20px;
        }

        .bottom {
            display: grid;

            grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);

            gap: 20px;

            margin-top: 24px;
        }

        @media (max-width: 1000px) {

            .page {
                padding: 24px;
            }

            .layout {
                grid-template-columns: 220px minmax(0, 1fr);
            }

            .bottom {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 750px) {

            .layout {
                grid-template-columns: 1fr;
            }

            .stats {
                grid-template-columns: 1fr;
            }

        }

    `;

    render() {

        const stats = DashboardService.getStatistics();

        return html`

            <div class="page">

                <div class="layout">

                  

                    <main class="content">

                        <profile-header></profile-header>

                        <div class="stats">

                            ${stats.map(stat => html`

                                <stat-card
                                        .title=${stat.title}
                                        .value=${stat.value}
                                        .icon=${stat.icon}>
                                </stat-card>

                            `)}

                        </div>

                        <div class="bottom">

                            <recent-orders></recent-orders>

                            <recent-activity></recent-activity>

                        </div>

                        <membership-banner></membership-banner>

                    </main>

                </div>

            </div>

        `;

    }

}