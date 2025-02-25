var url = "https://api-senac.onrender.com/professores"
const containerHTML = document.getElementById("container")

async function buscarDados() {
    const listaProfessores = await fetch(url).then(res=>res.json())

    listaProfessores.forEach(professor => {
        let ul = document.createElement("ul")

        ul.innerHTML = `
            <li class="professor">
                <img class="imgProf" src="${professor.foto}" alt="Foto do professor">
                <div>
                    <strong><h2>${professor.nome}</h2></strong>
                    <p>${professor.curso}</p>
                    <span>${professor.email}</span>
                    <a href="${professor.linkedin}"><img src="img/linkedin.png" alt="Linkedin"></a>
                </div>
            </li>
        `
        containerHTML.appendChild(ul)
    });
  }

  buscarDados()