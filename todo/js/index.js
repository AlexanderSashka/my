"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const enterTask = document.querySelector(".todo-list__input");
  const tasks = document.querySelector(".todo-list__items");
  const buttonAdd = document.querySelector(".todo-list__button-add");
  const buttonDelete = document.querySelector(".todo-list__button-delete");

  let arrayTasks = [];
  console.log(arrayTasks);

  function addInputValue() {
    const inputValue = enterTask.value.trim();
    if (inputValue) {
      let taskObj = {
        id: arrayTasks.length + 1,
        value: `${inputValue}`,
      };
      arrayTasks.push(taskObj);
      enterTask.value = "";
      showTask();
      updateDeleteButtonVisibility();
    }
  }

  function showTask() {
    tasks.innerHTML = "";
	  arrayTasks.forEach((task) => {
      const newTask = document.createElement("div");
      newTask.classList.add("todo-list__item");
      newTask.setAttribute('data-id', task.id);
      newTask.innerHTML =
        `<p>${task.value}</p>
			<button class="delete"></button>
			  `;
        tasks.appendChild(newTask);
    });
  }

  enterTask.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      e.preventDefault;
      addInputValue();
    }
  });
   
  buttonAdd.addEventListener("click", addInputValue);

  tasks.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.delete')) {
      const taskId = target.closest('.todo-list__item').getAttribute('data-id'); 
      arrayTasks = arrayTasks.filter(task => task.id !== parseInt(taskId));
      showTask();
      updateDeleteButtonVisibility();
    }
  });

  function updateDeleteButtonVisibility() {
    buttonDelete.style.display = arrayTasks.length > 0 ? 'block' : 'none';

  }

  buttonDelete.addEventListener('click', () => {
    if (arrayTasks.length > 0) {
      tasks.innerHTML = '';
      arrayTasks = [];
      updateDeleteButtonVisibility();
    }
  });

});
