import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>SmartGo Team</p>
        <div className="dashboard-search">
          <button>Create New Folder</button>
          <input type="text" placeholder="Search data..." />
          <span>ID: 000000</span>
        </div>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-summary">
          <h2>This Month's Report</h2>
          <div className="summary-row">
            <span>Incoming Reports</span>
            <span>34</span>
          </div>
          <div className="summary-row">
            <span>Item Lost</span>
            <span>11</span>
          </div>
        </section>
        <section className="dashboard-items">
          <h2>Inventory</h2>
          <div className="items-row">
            <span>Item Found</span>
            <span>15</span>
            <span>8</span>
          </div>
          <div className="items-row">
            <span>Returned Today</span>
            <table>
              <thead>
                <tr>
                  <th>Owner</th>
                  <th>Items</th>
                  <th>Inventory</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Giano Rosser</td>
                  <td>Ring</td>
                  <td>A205</td>
                </tr>
                <tr>
                  <td>Corey Dokidis</td>
                  <td>Umbrella</td>
                  <td>C312</td>
                </tr>
                {/* add more table rows here */}
              </tbody>
            </table>
          </div>
        </section>
        <section className="dashboard-report">
          <h2>Latest Report</h2>
          <table>
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Date</th>
                <th>Owner</th>
                <th>Items</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:45 Sunday</td>
                <td>March 2nd</td>
                <td>Giona Rosser</td>
                <td>Ring</td>
                <td>+7 777 564 2185</td>
                <td>Lost</td>
              </tr>
              <tr>
                <td>11:32 Monday</td>
                <td>March 13th</td>
                <td>Corey Dokidis</td>
                <td>Umbrella</td>
                <td>+7 776 844.58-65</td>
                <td>Found</td>
              </tr>
              {/* add more table rows here */}
            </tbody>
          </table>
        </section>
      </main>
      <footer className="dashboard-footer">
        <button>Log Out</button>
      </footer>
    </div>
  );
}

export default Dashboard;
