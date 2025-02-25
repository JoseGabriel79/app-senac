// listaNotas = [
//     {
//       unidade: "UC01",
//       notas: [
//         {
//           materia: "Programação Web",
//           nota: 16
//         },
//         {
//           materia: "Programação Mobile",
//           nota: 16
//         },
//         {
//           materia: "Codificação",
//           nota: 17
//         }
//       ]
//     },
//     {
//       unidade: "UC02",
//       notas: [
//         {
//           materia: "Programação Web",
//           nota: 16
//         },
//         {
//           materia: "Programação Mobile",
//           nota: 16
//         },
//         {
//           materia: "Codificação",
//           nota: 17
//         }
//       ]
//     },
//     {
//       unidade: "UC03",
//       notas: [
//         {
//           materia: "Programação Web",
//           nota: 16
//         },
//         {
//           materia: "Programação Mobile",
//           nota: 52
//         },
//         {
//           materia: "Codificação",
//           nota: 17
//         }
//       ]
//     }
//   ]

var url = "https://api-senac.onrender.com/notas"
const containerHTML = document.getElementById("container")

async function buscarDados() {
    const listaNotas = await fetch(url).then(res => res.json())

    function tabelaNotas() {
        listaNotas.forEach( nota=> {
            const ul = document.createElement("ul")
            ul.className = "unidades"

            let materiasHTML = ""

            //forEach
            nota.notas.forEach(dados => {
                materiasHTML += `
                    <li>
                        <p>${dados.materia}</p><span>${dados.nota}pts</span>
                    </li>
            `
            })

            ul.innerHTML = `
            <li>
                <h2>Unidade Curricular ${nota.unidade}</h2>
                <ul class="disciplinas">
                   ${materiasHTML}
                </ul>
            </li>
        `
            containerHTML.appendChild(ul)
        });
    }
    tabelaNotas()
}
buscarDados()

// horarios: [
//     {
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//     }
// ],



