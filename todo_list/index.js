const addBtn = document.querySelector("#input_btn_box > button");
const addTodoInput = document.querySelector("#input_btn_box > input");
const todoListUl = document.querySelector("#todo_list");

let todoList = [];

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

    let dateString = year + "-" + month + "-" + day + 1;

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
            const todo = groupTodo[dateKey];
            return `
                <li>
                    <div class="todo_box">
                        <div class="todo_date">${dateKey}</div>
                        ${todo
                            .map((t) => {
                                return `
                                    <div class="todo">
                                            <div class="control-container">
                                                <input
                                                    type="checkbox"
                                                    id="todo_${t.id}"
                                                    class="screen-reader"
                                                    ${
                                                        t.complete
                                                            ? "checked"
                                                            : ""
                                                    }
                                                />
                                                <div class="label-box">
                                                    <span
                                                        class="check-icon"
                                                        aria-hidden="true"></span>
                                                    <label for="todo_${t.id}"
                                                        >${t.content}</label
                                                    >
                                                </div>
                                            </div>
                                            <div class="todo_btn_box">
                                                <button>삭제</button>
                                                <button>수정</button>
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
