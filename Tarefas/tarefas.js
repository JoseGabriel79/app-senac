var ulHTML = document.getElementById("listaTarefas")

async function buscarDados() {
    var url = "https://api-senac.onrender.com/professores"
    var listaDeTarefas = await fetch(url).then(res=>res.json())

    listaDeTarefas.forEach(tarefa => {
        var liHTML = document.createElement("li")
        
        liHTML.innerHTML = `
            <img src = "${tarefa.foto}">
            <p>${tarefa.nome} </p>
            <p>${tarefa.curso}</p>
        `
        ulHTML.appendChild(liHTML)
    });
}
buscarDados()