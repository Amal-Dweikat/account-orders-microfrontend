import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DashboardService } from '../../services/dashboard-service';
@customElement('recent-orders')
export class RecentOrders extends LitElement {

    static styles = css`

    .card{
      background:white;
      border-radius:20px;
      padding:24px;
      box-shadow:0 4px 12px rgba(0,0,0,.08);
    }

    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:20px;
    }

    h3{
      margin:0;
    }

    a{
      color:#6750A4;
      text-decoration:none;
      font-size:14px;
      font-weight:600;
    }

    table{
      width:100%;
      border-collapse:collapse;
    }

    th{
      text-align:left;
      color:#777;
      font-size:14px;
      padding-bottom:14px;
    }

    td{
      padding:14px 0;
      border-top:1px solid #eee;
      font-size:14px;
    }

    .status{
      background:#E8F5E9;
      color:#2E7D32;
      padding:4px 10px;
      border-radius:20px;
      font-size:12px;
    }

  `;

    render(){
        const orders = DashboardService.getRecentOrders();
        return html`

      <div class="card">

        <div class="header">

          <h3>Recent Orders</h3>

          <a href="#">View all</a>

        </div>

        <table>

            ${orders.map(order=>html`

<tr>

<td>${order.number}</td>

<td>${order.date}</td>

<td>

<span class="status">

${order.status}

</span>

</td>

<td>$${order.total}</td>

</tr>

`)}

        </table>

      </div>

    `;

    }

}