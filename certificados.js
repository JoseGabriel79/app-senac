var url = "https://api-senac.onrender.com/certificados"
const containerHTML = document.getElementById("container")

async function buscarDados() {
    const listaCertificados = await fetch(url).then(res => res.json())
    
   
    
    listaCertificados.forEach(certificado => {
        var divCertificado = document.createElement('div')
        divCertificado.className = "certificado"
        divCertificado.innerHTML = `
            <img class="imagem" src="img/certificado2ofc.png" alt="">
            <h2 class="nomeAluno">${certificado.nome}</h2>
            <span class="nomeCurso">${certificado.curso}</span>
            <div class="funcoesCertificados">
                <img src="img/download.png" alt="">
                <img src="img/share (1).png" alt="">
            </div>
            `
            containerHTML.appendChild(divCertificado)
    });

} 
buscarDados()