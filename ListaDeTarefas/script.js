function adicionarTarefa() {
    var tarefa = document.getElementById('txttarefa')
    var novaTarefa = document.createElement('li')
    var listaDeTarefas = document.getElementById('listaDeTarefas')

    if (tarefa.value != '') {

        novaTarefa.innerHTML = `<strong>Tarefa:</strong> ${tarefa.value}`

        novaTarefa.addEventListener('click', function () {
            novaTarefa.classList.toggle('feito')
        })

        const botaoRemover = document.createElement('button')
        botaoRemover.textContent = 'Remover'

        botaoRemover.addEventListener('click', function () {
            listaDeTarefas.removeChild(novaTarefa)
        })


        listaDeTarefas.appendChild(novaTarefa)
        novaTarefa.appendChild(botaoRemover)

        tarefa.value = ''

    } else {
        alert('Digite a tarefa')
    }


}