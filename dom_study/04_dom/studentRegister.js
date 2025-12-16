let studentInputValue = {
    id: 0,
    name: "",
    age: "",
    address: "",
};

function handleRegisterOnkeyup(e) {
    studentInputValue = {
        ...studentInputValue,
        [e.target.name]: e.target.value,
    };
}

const handleRegisterOnclick = () => {
    const newStudent = {
        ...studentInputValue,
        id: studentList.length + 1,
    };

    studentList = [...studentList, newStudent];

    loadStudentList();
};

function studentRegister() {
    return `
        <div>
           ${studentRegisterInput({
               type: "text",
               name: "name",
               onkeyup: "handleRegisterOnkeyup",
           })}
           ${studentRegisterInput({
               type: "text",
               name: "age",
               onkeyup: "handleRegisterOnkeyup",
           })}
           ${studentRegisterInput({
               type: "text",
               name: "address",
               onkeyup: "handleRegisterOnkeyup",
           })}
           <div>
                <button onclick="handleRegisterOnclick()">등록</button>
           </div>

        </div>
    `;
}
