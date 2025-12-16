/**
 * async - 비동기 함수 정의 키워드
 * await - 비동기 함수 동기 호출 키워드
 *
 * 이때 await는 async 함수 내부에서만 사용 가능
 */

// async function getData() {
//     return "박윤호";
// }

// const user = getData();
// user.then((name) => console.log(name));

function getUserReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("사용자 데이터 받아옴");
            resolve({ name: "이동윤", age: 27 });
        }, 2000);
    });
}

function getTodoReq() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("투두 데이터 받아옴");
            resolve({ todoId: 1, title: "잠자기" });
        }, 3000);
    });
}

// async function getData() {
//     await getUserReq();
//     await getUserReq();
//     await getUserReq();
//     return "서버2";
// }

// const data = getData();
// data.then((data) => {
//     console.log(data);
// });

// async function getUser() {
//     const response = await getUserReq();
//     return response;
// }

// async function getTodo() {
//     const response = await getTodoReq();
//     return response;
// }

async function getData() {
    const user = await getUserReq();
    const todo = await getTodoReq();
    console.log(`${user.name}의 할 일 ${todo.title}입니다.`);
}

getData();
