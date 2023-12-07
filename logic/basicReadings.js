var waktuUpdate = 5000

// ENERGY
function generateDataEnergy() {
    const dataEnergy = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        dataEnergy[i] = randomValue;
    }

    energyChart.data.datasets[0].data = dataEnergy;
    energyChart.update();
}

const energyChartCtx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(energyChartCtx, {
    type: 'bar',
    data: {
        labels: ["Total W (kWh)", "Total Vah (kVah)", "Total V arh (kVarh)"],
        datasets: [{
            label: 'Energy',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
generateDataEnergy();
setInterval(generateDataEnergy, waktuUpdate);



// POWER
function generateDataPower() {
    const dataPower = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        dataPower[i] = randomValue;
    }

    powerChart.data.datasets[0].data = dataPower;
    powerChart.update();
}

const powerChartCtx = document.getElementById('powerChart').getContext('2d');
const powerChart = new Chart(powerChartCtx, {
    type: 'bar',
          data: {
            labels: ["Total P (kWh)","Total S (kVah)", "Total Q (kVarh)"],
            datasets: [{
              label: 'Power',
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
generateDataPower();
setInterval(generateDataPower, waktuUpdate);


// VOLTAGE LL
function generateDataVoltageLL() {
    const dataVoltageLL = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        dataVoltageLL[i] = randomValue;
    }

    volatgell.data.datasets[0].data = dataVoltageLL;
    volatgell.update();
}

const volatgellCtx = document.getElementById('volatgell').getContext('2d');
const volatgell = new Chart(volatgellCtx, {
    type: 'bar',
          data: {
            labels: ["Vab (V)","Vbc (V)", "Vca (V)"],
            datasets: [{
              label: 'VoltageLL',
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
generateDataVoltageLL();
setInterval(generateDataVoltageLL, waktuUpdate);


// VOLTAGE LN
function generateDataVoltageLN() {
    const dataVoltageLN = [];
    for (let i = 0; i < 3; i++) {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        dataVoltageLN[i] = randomValue;
    }

    voltageln.data.datasets[0].data = dataVoltageLN;
    voltageln.update();
}

const volatgelnCtx = document.getElementById('voltageln').getContext('2d');
const voltageln = new Chart(volatgelnCtx, {
    type: 'bar',
          data: {
            labels: ["Van (V)","Vbn (V)", "Vcn (V)"],
            datasets: [{
              label: 'VoltageLN',
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
generateDataVoltageLN();
setInterval(generateDataVoltageLN, waktuUpdate);



// Function to generate random data
function getRandomData() {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);
}

// Reset function for all charts
function resetCharts() {
  // Reset ENERGY chart
  const energyData = getRandomData();
  energyChart.data.datasets[0].data = energyData;
  energyChart.update();

  // Reset POWER chart
  const powerData = getRandomData();
  powerChart.data.datasets[0].data = powerData;
  powerChart.update();

  // Reset VOLTAGE LL chart
  const voltageLLData = getRandomData();
  volatgell.data.datasets[0].data = voltageLLData;
  volatgell.update();

  // Reset VOLTAGE LN chart
  const voltageLNData = getRandomData();
  voltageln.data.datasets[0].data = voltageLNData;
  voltageln.update();
}


