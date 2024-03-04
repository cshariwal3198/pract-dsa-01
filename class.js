class Student {
    constructor() {
        let name;
        let marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }

}
const stud = new Student();
stud.setName("John");
stud.setMarks(80);

function encapsulate() {
    let name = 'test';
    let marks = 45;

    return {
        getName() {
            return name;
        },
        setName(name) {
            this.name = name;
        },
        getMarks() {
            return marks;
        },
        setMarks(mks) {
            marks = mks;
        }
    }
}

const stud1 = encapsulate()
console.log(stud1.getName());