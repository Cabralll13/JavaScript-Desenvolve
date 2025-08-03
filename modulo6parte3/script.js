const inputNovaTarefa = document.getElementById('inputNovaTarefa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const listaDeTarefas = document.getElementById('listaDeTarefas');

let tarefas = [];

function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';

    for (let i = 0; i < tarefas.length; i++) {
        const tarefa = tarefas[i];

        const itemLista = document.createElement('li');
        itemLista.className = 'tarefa-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;

        checkbox.addEventListener('change', function(){
            alternarStatusTarefa(i);
        });
        
        const texto = document.createElement('span');
        texto.textContent = tarefa.descricao;

        if (tarefa.status) {
            itemLista.classList.add('concluida');
        }
        
        itemLista.appendChild(checkbox);
        itemLista.appendChild(texto);
        
        listaDeTarefas.appendChild(itemLista);
    }
}

function adicionarTarefa() {
    const descricao = inputNovaTarefa.value.trim();

    if (descricao !== "") {
        const novaTarefa = {
            descricao: descricao,
            status: false 
        };
        tarefas.push(novaTarefa);
        inputNovaTarefa.value = "";
        renderizarTarefas();
    }
}

function alternarStatusTarefa(indice) {
    tarefas[indice].status = !tarefas[indice].status;
    renderizarTarefas();
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputNovaTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

renderizarTarefas();