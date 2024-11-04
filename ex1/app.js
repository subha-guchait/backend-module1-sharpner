console.log("hello world");
class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    // console.log(this);
    return (minMarks) => {
      //   console.log(this);
      if (this.marks > minMarks && this.age > minPlacementAge) {
        console.log(this.name + " is ready for placement");
      } else {
        console.log(this.name + " is not ready for placement");
      }
    };
  }
}

const subha = new Student("subha", 23, 80);
const aman = new Student("aman", 16, 89);
subha.setPlacementAge(18)(70);
aman.setPlacementAge(18)(70);

const student = {
  name: "Subha",
  age: 23,
  marks: 86,
  intro() {
    console.log("Hi I am " + this.name);
  },
};
student.intro();
