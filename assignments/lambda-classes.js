//Person Class Main class

class Person {
    constructor(object) {
        this.name = object.name;
        this.age = object.age;
        this.location = object.location;
        this.gender = object.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
//Test case for Person

const Matthew = new Person({
    name: 'Matt',
    age: 37,
    location: 'The Moon',
    gender: 'Neutral'
})

//Instructor class inherits from Person

class Instructor extends Person {
    constructor(object) {
        super(object)
        this.speciality = object.speciality;
        this.favLanguage = object.favLanguage;
        this.catchphrase = object.catchphrase; 
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`
    }
    // Stretch Goals

    gradePoints(student) {
        if (student.grade < 100) {
            student.grade += 10;
            while (student.grade <= 69 && student.grade > 0) {
                student.grade = student.grade + Math.round(Math.random()) * 2 - 1
                if (student.grade === 0) {
                    return `You are so bad we had to throw you out, your grade is ${student.grade}`
                }
                console.log(`You suck, your grade is ${student.grade}  Get better or I will kill you!`);
            }
        }
        else if (student.grade >= 100) {
            student.grade = 100;
            console.log(`${student.name} You are the greatest student of all time.. bask in your glory`)
            return student.coursePassed();
        }   
        return student.coursePassed();
    }
}

// Instructor test case

const Brian = new Instructor({
    name: 'Brian',
    age: 12,
    location: 'Parts Unknown',
    gender: 'Male',
    speciality: 'Kung Fu',
    catchphrase: 'Be like water'
})
// Student class constructor, inherits from Person

class Student extends Person {
    constructor(object) {
        super(object);
        this.previousBackground = object.previousBackground;
        this.className = object.className;
        this.favSubjects = object.favSubjects;
        this.grade = object.grade;
    }
    listSubjects() {
        return `These are my favourite subjects ${this.favSubjects}`
    }
    prAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has bugun sprint challenge on ${subject}.`
    }
    // Stretch Goal

    coursePassed() {
        return `You have passed this course with a score of ${this.grade}%`
    }
}

// Student test case

const Matt = new Student({
    name: 'Matt',
    age: 37,
    location: 'The Moon',
    gender: 'Neutral',
    previousBackground: 'Moonwalker',
    className: 'EU2',
    favSubjects: ['HTML', ' CSS ', ' Javascript'],
    //stretch Goal
    grade: Math.round(Math.random() * 100)
})

// Project manager class, inherits from Instructor

class ProjectManager extends Instructor {
    constructor(object) {
        super(object);
        this.gradClassName = object.gradClassName;
        this.favInstructor = object.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// Project manager test case

const Borja = new ProjectManager({
    name: 'Borja',
    age: 435,
    location: 'Parts Unknown',
    gender: 'Male',
    speciality: 'Knives',
    catchphrase: 'So you think your a Dev?',
    gradClassName: 'EU2',
    favInstructor: 'God'
})

