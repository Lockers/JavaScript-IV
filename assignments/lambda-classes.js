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

// const Matt = new Person({
//     name: 'Matt',
//     age: 37,
//     location: 'The Moon',
//     gender: 'Neutral'
// })

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
    grade(Student, subject) {
        `${Student.name} recieves a perfect score on ${subject}`
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
}

const Matt = new Student({
    name: 'Matt',
    age: 37,
    location: 'The Moon',
    gender: 'Neutral',
    previousBackground: 'Moonwalker',
    className: 'Fairies',
    favSubjects: ['HTML', ' CSS ', ' Javascript']
})