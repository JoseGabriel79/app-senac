// listaHorarios = [
//     {
//         dia:"Segunda-feira",
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//         aux: "One"
//     },
//     {
//         dia:"Terça-feira",
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//         aux: "Two"
//     },
//     {
//         dia:"Quarta-feira",
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//         aux:"Three"
//     },
//     {
//         dia:"Quinta-feira",
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//         aux:"Four"
//     },
//     {
//         dia:"Sexta-feira",
//         horario1: "Programação Web",
//         horario2: "Programação Mobile",
//         horario3: "Codificação",
//         aux:"Five"
//     },
// ]

const listaHorarios = [
    {
        dia: "Segunda-feira",
        aux: "One",
        horarios: [
            {
                materia: "Codificação",
                inicio: "13:30"
            },
            {
                materia: "Programação Web",
                inicio: "15:30"
            },
            {
                materia: "Programação Mobile",
                inicio: "16:30"
            }
        ]
    },
    {
        dia: "Terça-feira",
        aux: "Two",
        horarios: [
            {
                materia: "Codificação",
                inicio: "13:30"
            },
            {
                materia: "Programação Web",
                inicio: "15:30"
            },
            {
                materia: "Programação Mobile",
                inicio: "16:30"
            }
        ]
    },
    {
        dia: "Quarta-feira",
        aux: "Three",
        horarios: [
            {
                materia: "Codificação",
                inicio: "13:30"
            },
            {
                materia: "Programação Web",
                inicio: "15:30"
            },
            {
                materia: "Programação Mobile",
                inicio: "16:30"
            }
        ]
    },
    {
        dia: "Quinta-feira",
        aux: "Four",
        horarios: [
            {
                materia: "Codificação",
                inicio: "13:30"
            },
            {
                materia: "Programação Web",
                inicio: "15:30"
            },
            {
                materia: "Programação Mobile",
                inicio: "16:30"
            }
        ]
    },
    {
        dia: "Sexta-feira",
        aux: "Five",
        horarios: [
            {
                materia: "Codificação",
                inicio: "13:30"
            },
            {
                materia: "Programação Web",
                inicio: "15:30"
            },
            {
                materia: "Arquitetura de dados",
                inicio: "16:30"
            }
        ]
    }
]

const containerHTML = document.getElementById("container")

function tabelaHorarios() {

    listaHorarios.forEach(horario => {

        const div = document.createElement("div")
        div.className = "accordion accordion-flush"
        div.id = "accordionFlushExample"

        let horariosHTML = ""

        horario.horarios.forEach(materiaObjc => {
            horariosHTML += `
                <li>
                    <p>${materiaObjc.materia}</p><span><strong>${materiaObjc.inicio}</strong></span>
                </li>
            `
        });


        div.innerHTML = `
        <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse${horario.aux}" aria-expanded="false" aria-controls="flush-collapse${horario.aux}">
                        ${horario.dia}
                    </button>
                </h2>
                <div id="flush-collapse${horario.aux}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <ul>
                            ${horariosHTML}
                        </ul>
                    </div>
                </div>
            </div>
        `
        containerHTML.appendChild(div)
    });

}
tabelaHorarios()