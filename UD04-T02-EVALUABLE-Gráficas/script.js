window.onload = inicio;

function inicio() {
graficoLineal();
graficoDosSeries();
}

function graficoDosSeries() {
  const ctx = document.getElementById('series');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'marzo', 'abril', 'mayo', 'Junio', 'Julio', 'Agosto', 'septiembre', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'diciembre'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },{
        type: 'line',
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
    }]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'inscripciones en cada evento por cada mes/ranking de eventos con más inscritos'
        },
        subtitle: {
          display: true,
          text: 'Werruning'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }}
  });




  
}

function graficoLineal() {
  const ctx = document.getElementById('lineal');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Enero', 'Febrero', 'marzo', 'abril', 'mayo', 'Junio', 'Julio', 'Agosto', 'septiembre', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'diciembre'],
      datasets: [{
        label: '€',
        data: [2900, 2040, 1900, 1500, 1200, 1800, 2500, 1300, 2000, 1700, 1200, 2400, 2350, 1800],
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Ganancias del año 2022 por inscripciones'
        },
        subtitle: {
          display: true,
          text: 'Werruning'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }}
  });
}


