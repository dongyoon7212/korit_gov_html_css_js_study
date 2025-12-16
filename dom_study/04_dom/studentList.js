function handleDeleteOnclick(studentId) {
    if (!confirm("정말 삭제하시겠습니까?")) {
        return;
    }

    studentList = studentList.filter((student) => student.id !== studentId);

    loadStudentList();
}

function loadStudentList() {
    const studentListHtml = studentList
        .map((student) => {
            const text = `${student.id}. ${student.name}(${student.age} - ${student.address})`;

            return `
            <li>
                ${text}
                <button onclick="handleDeleteOnclick(${student.id})">삭제</button>
            </li>
        `;
        })
        .join("");

    const studentListUl = document.querySelector(".student_list");

    studentListUl.innerHTML = studentListHtml;
}
