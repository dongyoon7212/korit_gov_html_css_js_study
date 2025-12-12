// 변수 선언 => let, const
let name = "이동윤";
console.log(name);
name = "삼동윤";
console.log(name);

const age = 27;
console.log(age);
// age = 18
// console.log(age)

//연산자
let data1 = 10;
let data2 = "10";

//동등연산자
let result = data1 == data2;
console.log(result);

//일치연산자
let result2 = data1 === data2;
console.log(result2);

//타입을 확인하고 싶다
console.log(typeof data1, typeof data2);

console.log("1" + "2");
console.log(1, 2);

//not 연산자
console.log(!1); //false
console.log(!0); //true
console.log(!"a"); //false
console.log(!""); //true
console.log(!null); //true
console.log(!!null); //false
// !! => 값을 명시적으로 boolean 타입으로 변환하는 일반적인 방법

console.log("abc".length > 0);
console.log(!!"" === false);

//객체
let data = {
    name: "이동윤",
    age: 27,
};

if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name === "삼동윤" && data.age === 27) {
    console.log("사용자 이름과 나이가 모두 일치합니다.");
} else if (data.name === "삼동윤") {
    console.log("사용자 이름이 일치합니다.");
} else if (data.age === 27) {
    console.log("사용자의 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
