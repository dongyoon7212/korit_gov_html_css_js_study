const inputButton = document.querySelector(".input_button");

inputButton.onclick = () => {
    const input = document.querySelector(".inputs");
    const ul = document.querySelector(".data_list");

    if (input.value === "") {
        alert("빈칸이야");
        return;
    }

    ul.innerHTML += `<li>${input.value}</li>`;

    input.value = "";
};
