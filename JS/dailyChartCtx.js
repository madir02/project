// All Items Chart (Assuming data for Lost, Found, and Returned)

const allItemsCtx = document.getElementById('allItemsChart').getContext('2d');

// Replace with your actual counts
const allItemsData = {
  labels: ['Lost', 'Found', 'Returned'],
  datasets: [{
    label: 'Items',
    data: [2, 4, 1],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)', // Light red (Lost)
      'rgba(54, 162, 235, 0.2)', // Light blue (Found)
      'rgba(255, 206, 86, 0.2)' // Light yellow (Returned)
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)', // Red (Lost)
      'rgba(54, 162, 235, 1)', // Blue (Found)
      'rgba(255, 206, 86, 1)' // Yellow (Returned)
    ],
    borderWidth: 1
  }]
};

const allItemsConfig = {
  type: 'bar',
  data: allItemsData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const allItemsChart = new Chart(allItemsCtx, allItemsConfig);

// Status Breakdown Chart (Assuming data for Lost, Found, and Returned)

const statusCtx = document.getElementById('statusChart').getContext('2d');

// Replace with your actual percentages (calculate percentages from your data)
const statusData = {
  labels: ['Lost', 'Found', 'Returned'],
  datasets: [{
    label: 'Status',
    data: [40, 80, 20],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)', // Light red (Lost)
    ]
}]
}