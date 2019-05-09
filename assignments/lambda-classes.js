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

const Matthew = new Person({
    name: 'Matt',
    age: 37,
    location: 'The Moon',
    gender: 'Neutral'
})

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
    gradePoints(student) {
        student.grade += 10;
        while (student.grade <= 69 && student.grade > 0 ) {
            student.grade = student.grade + Math.round(Math.random()) * 2 - 1
            if (student.grade === 0) {
                return `You are so bad we had to throw you out, your grade is ${student.grade}`
            }
            console.log(`You suck, your grade is ${student.grade}  Get better or I will kill you!`);
            // setInterval(1000);
        }

        return student.grade;
    }
}

const Brian = new Instructor({
    name: 'Brian',
    age: 435,
    location: 'Parts Unknown',
    gender: 'Male',
    speciality: 'Knives',
    catchphrase: 'So you think your a Dev?'
})

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
    coursePassed() {
        if (this.grade >= 70) {
            return `You have passed this course with a score of ${this.grade}%`
        }
    }
}

const Matt = new Student({
    name: 'Matt',
    age: 37,
    location: 'The Moon',
    gender: 'Neutral',
    previousBackground: 'Moonwalker',
    className: 'Fairies',
    favSubjects: ['HTML', ' CSS ', ' Javascript'],
    grade: Math.round(Math.random() * 100)
})

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

