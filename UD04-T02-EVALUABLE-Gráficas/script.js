window.onload = inicio;

function inicio() {
graficoLineal();
graficoDosSeries();
graficoTorta();
graficoLineasHorizontales();
}

function graficoDosSeries() {
  const ctx = document.getElementById('series');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'marzo', 'abril', 'mayo', 'Junio', 'Julio', 'Agosto', 'septiembre', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'diciembre'],
      datasets: [{
        label: 'Nº inscripciones',
        data: [290, 204, 190, 150, 120, 180, 250, 130, 200, 170, 120, 240, 235, 180],
        borderWidth: 1,
        borderColor: '#00c44b',
        backgroundColor: '#22ff77bb',
      }, 
      {
        type: 'line',
        label: 'Media',
        data: [145, 102, 95, 75, 60, 90, 125, 65, 100, 85, 60, 120, 117, 90],
        borderColor: '#ff4343',
        backgroundColor: '#ff4343',
    }]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'inscripciones en cada evento por cada mes/ranking de eventos con más inscritos'
        },legend: {
          display: true,
          labels: {
              color: 'rgb(68, 68, 68)'
          } ,
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
  }});




  
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
        borderWidth: 2,
        borderColor: '#ca53a6',
        backgroundColor: '#c948a2',
      }]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Ganancias del año 2022 por inscripciones'
        },legend: {
          display: true,
          labels: {
              color: 'rgb(68, 68, 68)'
          } ,
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
  }});
}


function graficoTorta(){

  const ctx = document.getElementById('torta');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['5K', '10K', '21K', '42K'],
      datasets: [{
        label: 'Nº inscritos',
        data: [2530, 2300, 2000, 2500],
        borderWidth: 2,
        borderColor: '#413838',
        backgroundColor: [
          'rgb(168, 211, 67)',
          'rgb(68, 186, 255)',
          'rgb(255, 251, 37)',
          'rgb(255, 68, 68)'
        ],
      }]
    },
    options: {
      plugins: {
        title: {
            display: true,
            text: 'Nº inscritos en las siguientes categorías:'
        },legend: {
          display: true,
          labels: {
              color: 'rgb(68, 68, 68)'
          } ,
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
  }});


}

function graficoLineasHorizontales(){
  const ctx = document.getElementById('horizontal');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Evento Sevilla', 'Evento Cordoba', 'Evento Huelva', 'Evento Castilleja', 'Evento Espartinas', 'Evento Olivares'],
      datasets: [{
        label: 'Nº Personas',
        data: [400, 370, 100, 300, 520, 210],
        borderWidth: 2,
        borderColor: 'rgb(156, 76, 221)',
        backgroundColor: 'rgb(139, 42, 218)',
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
            display: true,
            text: 'ranking de eventos más inscritos 2022'
        },legend: {
          display: true,
          labels: {
              color: 'rgb(68, 68, 68)'
          } ,
        subtitle: {
          display: true,
          text: 'Werruning'
      },
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }}
  }});


}