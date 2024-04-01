// Yearly Sales Chart

const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');

// Replace with your actual sales data (yearly)
const yearlyData = {
  labels: ['W1 July', 'W2 July', 'W3 July','W4 July'],
  datasets: [{
    label: 'Sales',
    data: [14, 10, 12, 8], // Assuming this represents total sales for 2023
    backgroundColor: ['rgba(99, 255, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)'], // Light green
    borderColor: ['rgba(99, 255, 132, 0.2)','rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)'], // Green
    borderWidth: 1
  }]
};

const yearlyConfig = {
  type: 'bar',
  data: yearlyData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 1400 // Adjust based on your data
        }
      }]
    }
  }
};

const yearlyChart = new Chart(yearlyCtx, yearlyConfig);

// Weekly Sales Chart (Assuming data for W1 July)

const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');

// Replace with your actual sales data (weekly for W1 July)
const weeklyData = {
  labels: ['W1 July', 'W2 July', 'W3 July','W4 July'],
  datasets: [{
    label: 'Sales',
    data: [10,8,6,4], // Assuming this represents sales for W1 July
    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red
    borderColor: 'rgba(255, 99, 132, 1)', // Red
    borderWidth: 1
  }]
};

const weeklyConfig = {
  type: 'bar',
  data: weeklyData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 40 // Adjust based on your data (consider including all weeks)
        }
      }]
    }
  }
};

const weeklyChart = new Chart(weeklyCtx, weeklyConfig);

const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');

const monthlyData = {
  labels: ['W1 July', 'W2 July', 'W3 July','W4 July'],
  datasets: [{
    label: 'Sales',
    data: [10,8,5,3], // Replace with your actual sales data
    backgroundColor: 
    ['rgba(255, 99, 132, 10)',
      'rgba(255, 159, 64, 10)',
      'rgba(255, 205, 86, 10)',
      'rgba(75, 192, 192, 10)'],
    borderColor: ['rgb(255, 99, 135)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)'],
    borderWidth: 1
  }]
};

const monthlyConfig = {
  type: 'bar',
  data: monthlyData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 40  // Adjust based on your data
        }
      }]
    }
  }
};

const monthlyChart = new Chart(monthlyCtx, monthlyConfig);



