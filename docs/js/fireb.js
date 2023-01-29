
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
        firebase.database().ref("Lista_2").on("value", snap => {
            const velocidade = snap.val();
        
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
            
            // Criando o gráfico
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: vazao,
                    datasets: [{
                        label: 'Vazão',
                        data: vazao,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Velocidade',
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