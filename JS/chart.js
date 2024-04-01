// Monthly Sales Chart (March)

const monthCtx = document.getElementById('monthChart').getContext('2d');

// Replace with your actual sales data (daily for March)
const monthData = {
  labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th',  ],
  datasets: [{
    label: 'Sales',
    data: [5, 8, 3, 7, 11, 13, 16, 19, 11, 14, 17,  8, 11, 14],
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
    borderColor: 'rgba(255, 99, 132, 1)', // Red
    borderWidth: 1
  }]
};

const monthConfig = {
  type: 'bar', // Use line chart for daily data
  data: monthData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 20 // Adjust based on your data
        }
      }]
    }
  }
};

const monthChart = new Chart(monthCtx, monthConfig);

// Yearly Sales Chart

const yearCtx = document.getElementById('yearChart').getContext('2d');

// Replace with your actual sales data (yearly)
const yearData = {
  
}