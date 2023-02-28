

function handle() {


    const inputElment = document.querySelector('input');
    const value = inputElment.value;

    const todoconatiner = document.createElement('div');
    todoconatiner.className = 'flex justify-between items-center';
    
    const todoTitle = document.createElement('h4')
    todoTitle.textContent = value;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.className = 'bg-green-600 px-4 py-2 rounded';


    // append

    todoconatiner.appendChild(todoTitle);
    todoconatiner.appendChild(doneButton)


    const  AlltodosConatiner = document.querySelector('#todosContainer');

    AlltodosConatiner.appendChild(todoconatiner);


    inputElment.value = '';



    doneButton.addEventListener('click', function() {

        doneButton.remove()
        todoTitle.className = 'line-through';

    })


}


