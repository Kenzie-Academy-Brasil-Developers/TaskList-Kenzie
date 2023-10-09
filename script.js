const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasks){
  const list = document.querySelector('ul')
  list.innerHTML = ''
  for (let i = 0; i < tasks.length; i++){
    let teste = createTaskItem(tasks[i])
    list.appendChild(teste)

  }

}

function createTaskItem(taskList){
  // criando os elementos
  const list = document.createElement('li')
  const infoContainer = document.createElement('div')
  const taskType = document.createElement('span')
  const taskTittle = document.createElement('p')
  const deleteButton = document.createElement('button')
  //classificando
  list.classList.add("task__item")
  infoContainer.classList.add("task-info__container")
  taskType.classList.add("task-type")
  if(taskList.type == 'Urgente' ){
  taskType.classList.add('span-urgent')  
  } else if (taskList.type == 'Importante'){
  taskType.classList.add('span-important')
  } else if (taskList.type == 'Normal'){
    taskType.classList.add('span-normal') 
  }
  taskTittle.innerText = taskList.title
  deleteButton.classList.add("task__button--remove-task")

  //hieraquia
  list.append(infoContainer, deleteButton)
  infoContainer.append(taskType, taskTittle)
  

  deleteButton.addEventListener("click", function() {
  const index = tasks.indexOf(taskList);
  tasks.splice(index, 1);
  renderElements(tasks);
})

return list


}
renderElements(tasks)


const button = document.getElementsByClassName("form__button--add-task");
const newTask = document.querySelector('#input_title')
const priority = document.querySelector('select')
const buttonAddTask = document.querySelector('.form__button--add-task');
const news = [{title: '' , type:''}];

buttonAddTask.onclick = function(event) {
  event.preventDefault();
  title1 = newTask.value
  title2 = priority.value
  tasks.push({ title: title1, type: title2 });
  renderElements(tasks)
  
};










