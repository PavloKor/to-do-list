const btn = document.querySelector('.input-conteiner button');
const input = document.querySelector('.input-conteiner input');
const list = document.querySelector('.todo-list');

btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'todo-list-item';
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  li.innerText = input.value;
  list.appendChild(li);
  li.appendChild(deleteBtn);
  input.value = '';

  deleteBtn.addEventListener('click', () => {
    list.removeChild(li);
  })
});