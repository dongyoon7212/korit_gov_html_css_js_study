const API_URL = "https://jsonplaceholder.typicode.com/posts";
const tbody = document.querySelector("tbody");
const listContainer = document.querySelector("#body_container");
const postCount = document.querySelector("#count_span");
const postTd = document.querySelector("#post_td");
const body = document.querySelector("body");
const postIdDiv = document.querySelector("#post_id_div");
const userIdDiv = document.querySelector("#user_id_div");
const postTitle = document.querySelector("#post_title");
const contentBox = document.querySelector("#content_box");
const backBtn = document.querySelector("#back_btn");

window.onload = async () => {
    listContainer.innerHTML = "<div>로딩중...</div>";
    const response = await fetch(API_URL);
    if (!response.ok) {
        alert("서버에 문제가 발생했습니다.");
        return;
    }

    const data = await response.json();
    postCount.innerText = data.length;
    listContainer.innerHTML = `
        <table>
            <tbody>
                ${data
                    .map((post) => {
                        return `
                        <tr>
                            <td>${post.id}</td>
                            <td id="post_td" onclick="postClick(${post.id})">${post.title}</td>
                            <td>${post.userId}</td>
                        </tr>
                    `;
                    })
                    .join("")}
            </tbody>
        </table>
    `;
};

async function postClick(postId) {
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    const response = await fetch(API_URL);
    if (!response.ok) {
        alert("서버에 문제가 발생했습니다.");
        return;
    }

    const data = await response.json();

    postIdDiv.innerText = `게시물ID:${data.id}`;
    userIdDiv.innerText = `유저ID:${data.userId}`;
    postTitle.innerText = data.title;
    contentBox.innerText = data.body;
    const startPosition = parseInt(getComputedStyle(body).left);
    const targetPosition = startPosition - 1920; // 목표 위치
    const duration = 100; // 전환 시간 (1초)
    const interval = 10; // 이동 간격 (ms)

    let currentTime = 0;

    function move() {
        currentTime += interval;

        const progress = Math.min(currentTime / duration, 1); // 진행 상태 (0~1)

        const currentPosition =
            startPosition + (targetPosition - startPosition) * progress;
        body.style.left = currentPosition + "px";

        if (progress < 1) {
            setTimeout(move, interval);
        }
    }

    move();
}

backBtn.onclick = () => {
    const startPosition = parseInt(getComputedStyle(body).left);
    const targetPosition = startPosition + 1920; // 목표 위치
    const duration = 100; // 전환 시간 (1초)
    const interval = 10; // 이동 간격 (ms)

    let currentTime = 0;

    function move() {
        currentTime += interval;

        const progress = Math.min(currentTime / duration, 1); // 진행 상태 (0~1)

        const currentPosition =
            startPosition + (targetPosition - startPosition) * progress;
        body.style.left = currentPosition + "px";

        if (progress < 1) {
            setTimeout(move, interval);
        }
    }

    move();
};
