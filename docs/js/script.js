function abrirPag(a){
    let localPag = document.querySelector('.span-2')
    let pag = new XMLHttpRequest()
    pag.onreadystatechange = () => {
        if (pag.readyState == 4 && pag.status == 200) {
            localPag.innerHTML = pag.response
        }

    }
    pag.open('GET',`${a}.html`)
    console.log(a)
    pag.send()
}


function redir_2d() {
    location.replace("index.html")
  }

function redir_d3() {
    location.replace("projeto_3d.html")
  }
