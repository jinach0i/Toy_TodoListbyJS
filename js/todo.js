const toDoForm = document.getElementById('todo-form'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.getElementById('todo-ul');

// form의 기본 submit기능을 막아 새로고침을 방지하자:
function handleSubmit(event) {
    event.preventDefault();
    // input에 입력된 값 저장:
    const savedTodo = toDoInput.value;
    // enter칠때마다 input내용 비우기:
    toDoInput.value = '';
}
toDoForm.addEventListener('submit', handleSubmit)
