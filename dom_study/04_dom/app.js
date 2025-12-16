let studentList = []

function app() {
    const appInfo = {
        title: "React Component Study",
        date: new Date().toLocaleDateString(),
        author: "이동윤",
    };

    console.log("app함수 호출 리턴함");

    return `
        <div>
            <h1>제목: ${appInfo.title}</h1>
            <h2>작성일: ${appInfo.date}</h2>
            <h3>작성자: ${appInfo.author}</h3>
            ${studentRegister()}
            <ul class="student_list"></ul>
        </div>
    `;
}
