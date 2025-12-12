//객체
const student = {
    name: "박윤호",
    age: 25,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student["name"]);
console.log(student["age"]);

student["name"] = "배찬익";
student["age"] = 23;

console.log(student);

student.name = "유노윤호";
student.age = 7;
student.address = "화성";

console.log(student);

student.printName = () => console.log("이름 :", student.name);
student.printName();

const loginButton = {
    text: "로그인",
    value: "로그인 되었음",
    onClick: () => {
        console.log(loginButton.value);
    },
};

loginButton.onClick();

const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}
 