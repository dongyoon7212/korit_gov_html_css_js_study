const addBtn = document.querySelector("#input_btn_box > button");
const addTodoInput = document.querySelector("#input_btn_box > input");
const todoListUl = document.querySelector("#todo_list");
const modal = document.querySelector("#modal_container");
const modalInput = document.querySelector("#modal_input_box > input");

let todoList = [];
let editTargetTodoId = 0;

window.onload = () => {
    if (!localStorage.getItem("TodoList")) {
        localStorage.setItem("TodoList", []);
    } else {
        todoList = JSON.parse(localStorage.getItem("TodoList"));
    }

    todoRender();
};

function addTodoBtnOnclick() {
    if (addTodoInput.value === "") {
        alert("할 일을 입력해주세요.");
        return;
    }
    let todoId = 0;
    if (todoList.length !== 0) {
        todoId = todoList[todoList.length - 1].id + 1;
    }

    let today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    let dateString = year + "-" + month + "-" + day;

    const newTodo = {
        id: todoId,
        content: addTodoInput.value,
        complete: false,
        date: dateString,
    };

    todoList = [...todoList, newTodo];
    localStorage.setItem("TodoList", JSON.stringify(todoList));

    addTodoInput.value = "";

    alert("할 일이 등록되었습니다.");

    todoRender();
}

addBtn.addEventListener("click", addTodoBtnOnclick);

function dateGroup() {
    todoList = JSON.parse(localStorage.getItem("TodoList"));
    const group = {};
    for (const todo of todoList) {
        if (!group[todo.date]) {
            group[todo.date] = [];
        }
        group[todo.date].push(todo);
    }
    return group;
}

function todoRender() {
    const groupTodo = dateGroup();

    const dateKeys = Object.keys(groupTodo);

    todoListUl.innerHTML = dateKeys
        .map((dateKey) => {
            const todoList = groupTodo[dateKey];
            return `
                <li>
                    <div class="todo_box">
                        <div class="todo_date">${dateKey}</div>
                        ${todoList
                            .map((todo) => {
                                return `
                                    <div class="todo">
                                            <div class="control-container">
                                                <input
                                                    type="checkbox"
                                                    id="todo_${todo.id}"
                                                    class="screen-reader"
                                                    onclick="checkClick(${
                                                        todo.id
                                                    })"
                                                    ${
                                                        todo.complete
                                                            ? "checked"
                                                            : ""
                                                    }
                                                />
                                                <div class="label-box">
                                                    <span
                                                        class="check-icon"
                                                        aria-hidden="true"></span>
                                                    <label for="todo_${todo.id}"
                                                        >${todo.content}</label
                                                    >
                                                </div>
                                            </div>
                                            <div class="todo_btn_box">
                                                <button onclick="deleteClick(${
                                                    todo.id
                                                })">삭제</button>
                                                <button onclick="openModalClick(${
                                                    todo.id
                                                })">수정</button>
                                            </div>
                                        </div>
                                `;
                            })
                            .join("")}
                    </div>
                </li>
            `;
        })
        .join("");
}

function checkClick(todoId) {
    todoList = JSON.parse(localStorage.getItem("TodoList"));
    todoList = todoList.map((todo) => {
        if (todo.id === todoId) {
            todo.complete = !todo.complete;
        }
        return todo;
    });

    localStorage.setItem("TodoList", JSON.stringify(todoList));

    todoRender();
}

function deleteClick(todoId) {
    if (!confirm("정말로 투두를 삭제하시겠습니까?")) {
        return;
    }
    todoList = JSON.parse(localStorage.getItem("TodoList"));
    todoList = todoList.filter((todo) => todo.id !== todoId);

    localStorage.setItem("TodoList", JSON.stringify(todoList));
    todoRender();
}

function editClick() {
    if (modalInput.value === "") {
        alert("수정할 내용을 입력해주세요.");
        return;
    }
    if (!confirm("정말로 수정하시겠습니까?")) {
        return;
    }
    todoList = JSON.parse(localStorage.getItem("TodoList"));

    todoList = todoList.map((todo) => {
        if (todo.id === editTargetTodoId) {
            todo.content = modalInput.value;
        }
        return todo;
    });

    localStorage.setItem("TodoList", JSON.stringify(todoList));

    todoRender();

    cancelClick();
}

function openModalClick(todoId) {
    modal.style.display = "flex";
    editTargetTodoId = todoId;
    todoList = JSON.parse(localStorage.getItem("TodoList"));
    todo = todoList.find((todo) => todo.id === todoId);
    modalInput.value = todo.content;
}

function cancelClick() {
    modal.style.display = "none";
}
