class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("이동윤", 27);
console.log(student1);
console.log(student1.name);
