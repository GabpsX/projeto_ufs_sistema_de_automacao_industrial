
/*

  const firebaseConfig = {
    apiKey: "AIzaSyAOXtymwvfDVwl12r7R15zdaxL4BTFboUA",
    authDomain: "gabpsx-6e9e9.firebaseapp.com",
    
    databaseURL: "https://gabpsx-6e9e9-default-rtdb.firebaseio.com",
    projectId: "gabpsx-6e9e9",
    storageBucket: "gabpsx-6e9e9.appspot.com",
    messagingSenderId: "884362290048",
    appId: "1:884362290048:web:d982a67e0340602f001765",
    measurementId: "G-0VXZH6321R"
  };
  

  firebase.initializeApp(firebaseConfig);

  function atualizarTabela_grafico() {
    const tabelaBody = document.getElementById("tabela-body");
    firebase.database().ref("Lista_1").on("value", snapshot => {
        tabelaBody.innerHTML = ""; // limpar tabela
        const vazao = snapshot.val();
        console.log(vazao);
        firebase.database().ref("Lista_2").on("value", snap => {
            const velocidade = snap.val();
            console.log(velocidade);
            for (let i = 1; i < vazao.length; i++) {
                const linha = document.createElement("tr");
                const colunaVazao = document.createElement("td");
                colunaVazao.innerHTML = vazao[i];
                const colunaVelocidade = document.createElement("td");
                colunaVelocidade.innerHTML = velocidade[i];
                linha.appendChild(colunaVazao);
                linha.appendChild(colunaVelocidade);
                tabelaBody.appendChild(linha);
            }
            var u = document.getElementById('myChart').getContext('2d');
            var char = new Chart(u, {
                type: 'line',
                data: {
                    labels: vazao,
                    datasets: [{
                        label: 'Vazão L/min',
                        data: vazao,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'green',
                        borderWidth: 1
                    }, {
                        label: 'Velocidade m/s',
                        data: velocidade,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
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
        });
    });
    
}
atualizarTabela_grafico();


*/
function atualizarTabela_grafico() {
    const tabelaBody = document.getElementById("tabela-body");
    const vazao = [0.0, 13.0, 26.0, 39.0, 52.0, 65.0, 78.0, 91.0, 104.0, 117.0, 130.0]
    

    const velocidade = [
        0.0,
        0.60,
        1.20,
        1.81,
        2.41,
        3.01,
        3.62,
        4.22,
        4.82,
        5.43,
        6.02
    ];
    
    
    tabelaBody.innerHTML = ""; // limpar tabela

    for (let i = 0; i < vazao.length; i++) {
        const linha = document.createElement("tr");
        const colunaVazao = document.createElement("td");
        colunaVazao.innerHTML = vazao[i];
        const colunaVelocidade = document.createElement("td");
        colunaVelocidade.innerHTML = velocidade[i];
        linha.appendChild(colunaVazao);
        linha.appendChild(colunaVelocidade);
        tabelaBody.appendChild(linha);
    }

    var u = document.getElementById('myChart').getContext('2d');
    var char = new Chart(u, {
        type: 'line',
        data: {
            labels: vazao,
            datasets: [{
                label: 'Vazão L/min',
                data: vazao,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'green',
                borderWidth: 1
            }, {
                label: 'Velocidade m/s',
                data: velocidade,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
}

atualizarTabela_grafico();
