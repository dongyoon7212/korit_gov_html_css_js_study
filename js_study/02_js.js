//자바스크립트의 함수

//일반 함수 정의
function 함수명(매개변수1, 매개변수2) {
    console.log("함수 호출됨");
    let 리턴데이터 = "이것은 리턴값임";
    console.log(매개변수1);
    console.log(매개변수2);
    return 리턴데이터;
}

const 리턴값 = 함수명(10);
console.log(리턴값);

//익명함수 : 이름이 없는 함수로, 주로 변수에 할당하거나
//다른 함수의 인수로 사용
const 함수명3 = function (매개변수1, 매개변수2) {};

//화살표 함수
const 화살표함수 = (매개변수1, 매개변수2) => {
    return "리턴값";
};
/**
 * 1. 매개변수가 하나면 ()를 생략할 수 있다.
 * 2. 실행문(구현부)이 한 줄이라면 {}를 생략할 수 있다.
 * 3. {}생략시 값만 입력하면 return 값이 된다.
 * 즉 {}를 생략하지 않고 return 하려면 return 키워드를 명시해야한다.
 */
const fx1 = () => console.log("fx1 호출");
const fx2 = (n) => console.log(n);
const fx3 = (n) => n + 1;
const fx4 = (n) => {
    console.log(n);
    return n + 1;
};

console.log(fx2(2));
const result = fx3(4);

const a = fx3;

const aa = () => {
    console.log("aa함수 호출");
    return "aa함수 리턴값";
};

const bb = (fxx) => {
    console.log("bb함수 호출");
    return fxx;
};

const aaa = (fxx, fxx2) => {
    console.log("aaa함수 호출");
    console.log(fxx());
    console.log(fxx2());
    return "aaa함수 리턴값";
};

console.log(aaa(bb(aa), bb(aa)));
