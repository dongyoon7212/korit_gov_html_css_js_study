window.onload = () => {
    console.log("리소스 온로드 됨");
    const root = document.querySelector("#root");

    render(root);

    console.log("렌더링 완료");
};

function render(targetElement) {
    targetElement.innerHTML = app();
}
