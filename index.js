// script.js

document.getElementById('file-upload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
      // Add logic to parse the CSV here
    }
  });
  
  document.getElementById('google-sheet-btn').addEventListener('click', () => {
    alert('Google Sheet connection coming soon!');
  });
  
  document.getElementById('connect-email-btn').addEventListener('click', () => {
    alert('Email account connection coming soon!');
  });
  
  document.getElementById('preview-btn').addEventListener('click', () => {
    const prompt = document.getElementById('email-prompt').value;
    if (prompt) {
      alert(`Preview: ${prompt}`);
    } else {
      alert('Please enter a prompt.');
    }
  });
  
  // Analytics Chart
  const ctx = document.getElementById('analytics-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Sent', 'Scheduled', 'Failed'],
      datasets: [{
        label: 'Emails',
        data: [10, 15, 5], // Example data
        backgroundColor: ['#10B981', '#3B82F6', '#EF4444']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
  