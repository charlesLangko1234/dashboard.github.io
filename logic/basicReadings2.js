waktuUpdate = 5000

// Current
function generateDataCurrent() {
    const dataCurrent = [];
    for (let i = 0; i < 4; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        dataCurrent[i] = randomValue;
    }

    current.data.datasets[0].data = dataCurrent;
    current.update();
}

const CurrentCtx = document.getElementById('current').getContext('2d');
const current = new Chart(CurrentCtx, {
    type: 'bar',
          data: {
            labels: ["Ia (A)","Ib (A)", "Ic (A)", "In (A)"],
            datasets: [{
              label: 'Current',
              data: [10,50,30],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
generateDataCurrent();
setInterval(generateDataCurrent, waktuUpdate);
