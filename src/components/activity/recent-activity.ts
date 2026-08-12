import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DashboardService } from '../../services/dashboard-service';

@customElement('recent-activity')
export class RecentActivity extends LitElement {

    static styles = css`

    .card{

      background:white;
      border-radius:20px;
      padding:24px;
      box-shadow:0 4px 12px rgba(0,0,0,.08);

    }

    h3{

      margin:0 0 20px;

    }

    .item{

      padding:14px 0;

      border-bottom:1px solid #eee;

    }

    .item:last-child{

      border-bottom:none;

    }

    .title{

      color:#6750A4;
      font-weight:600;

    }

    .date{

      margin-top:4px;

      color:#888;

      font-size:13px;

    }

  `;

    render(){
        const activities = DashboardService.getRecentActivities();
        return html`

      <div class="card">

        <h3>Recent Activity</h3>

        <div class="item">

            ${activities.map(activity=>html`

<div class="item">

<div class="title">

${activity.title}

</div>

<div class="date">

${activity.date}

</div>

</div>

`)}

        </div>

      </div>

    `;

    }

}