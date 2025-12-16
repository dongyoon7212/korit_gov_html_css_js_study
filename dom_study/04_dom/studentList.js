function loadStudentList() {
    const studentListHtml = studentList
        .map((student) => {
            const text = `${student.id}. ${student.name}(${student.age} - ${student.address})`;

            return `
            <li>
                ${text}
            </li>
        `;
        })
        .join("");

    const studentListUl = document.querySelector(".student_list");

    studentListUl.innerHTML = studentListHtml;
}
