var url = "https://api-senac.onrender.com/secretaria"
const containerHTML = document.getElementById("container")

async function buscarDados() {
    const listaSecretaria = await fetch(url).then(res=>res.json())

        let ul = document.createElement("ul")
        var docHtml =""
        docHtml += `
            <h1>Documentos</h1>
        `
        listaSecretaria.documentos.forEach(documento=> {
            docHtml += `
                <li>
                    <p>${documento}</p><img src="./img/download.png" alt="download">
                </li>
            `
        });
        docHtml += `
            <h1>Materiais</h1>
        `
        listaSecretaria.materiais.forEach(material=> {
            docHtml += `
                <li>
                    <p>${material}</p><img src="./img/download.png" alt="download">
                </li>
            `
        });
    
        ul.innerHTML = `
            ${docHtml}
        `
        containerHTML.appendChild(ul)

}

buscarDados()
