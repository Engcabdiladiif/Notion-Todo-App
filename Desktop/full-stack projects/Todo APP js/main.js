

function addTodo() {


    // so hel inputka
    const inputElement = document.querySelector('input');
    // so hel value inputka
    const value = inputElement.value;

    const todocontainer = document.createElement('div');
    todocontainer.className  = 'flex justify-between items-center';

    // create title

    const todoTitle = document.createElement('h4');
    todoTitle.textContent = value;

    // create button;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'bg-green-400 p-2 rounded';
    
    // append todotile and doneButton in to todocontaner

    todocontainer.appendChild(todoTitle);
    todocontainer.appendChild(doneButton);


    const  alldotoconatiner = document.querySelector('#todosconatiner');

    alldotoconatiner.appendChild(todocontainer);


    inputElement.value = '';

}