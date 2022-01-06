const toDoForm = document.getElementById('todo-form'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.getElementById('todo-ul');
const toDos = [];
function deleteTodo(event) {
    // 해당 객체의 property들을 console창에서 모두 보여줌dir
    //클릭한 html요소 표시.target+클릭한 요소의 부모요소를 표시(접근용).parentElement :
    const li = event.target.parentElement;
    li.remove();
}
function create(savedTodo) {
    // 일단 li와 span을 만듬:
    const item = document.createElement('li'),
    itemSpan = document.createElement('span'),
    button = document.createElement('button');
    // li에 span을 추가:
    item.appendChild(itemSpan);
    // li(:item)에 span(:itemspan)넣기:
    toDoList.appendChild(item);
    // li에 button 추가:
    item.appendChild(button);
    // span에 input내용물(savedTodo)를 넣기:
    itemSpan.innerText = savedTodo;
    // btn 내용물:
    // cf.이모지 사용법 윈버튼+.
    button.innerText = '❌';
    // 버튼의 클릭을 감지하기(addEventListener)
    button.addEventListener('click',deleteTodo);

}
// form의 기본 submit기능을 막아 새로고침을 방지하자:
function handleSubmit(event) {
    event.preventDefault();
    // input이 비워지기 전에 입력된 값 저장:
    const savedTodo = toDoInput.value;
    // enter칠때마다 input내용 공백화:
    toDoInput.value = '';
    create(savedTodo);

}
toDoForm.addEventListener('submit', handleSubmit)
