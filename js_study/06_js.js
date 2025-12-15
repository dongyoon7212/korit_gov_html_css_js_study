//단축 평가 논리 연사
// && ||

const name = "이동윤";
console.log(!!name && !!"이동윤");

//앞의 값이 true일때 뒤의 "값"을 리턴, false일때 false
console.log(true && 10);
console.log(false && 10);

const data = [1, 2, 3];
console.log(data.length != 0 && "데이터 출력");

//앞의 값이 false일때 뒤의 "값"을 리턴, true일때 true
console.log(true || 10);

//??
//앞의 값이 null 또는 undefined가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log(0 ?? 100);
console.log("" ?? 100);
