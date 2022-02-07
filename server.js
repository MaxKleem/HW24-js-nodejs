const student = require("student")
const teacher = require("teacher")

let student1 = new student.Student("Max",40,"Male","chess")
let teacher1 = new teacher.Teacher('Fedor',29,'Male','golf','piano')

student1.aboutMe();
teacher1.aboutMe();