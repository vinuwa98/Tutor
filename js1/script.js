let student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",

    sayHi: function() {
        console.log("Hello, my name is " + this.name);
    },
    sayAge: function() {
        console.log("I am " + this.age + " years old.");
    },
}

student.sayHi(); // Output: Hello, my name is John Doe
student.sayAge(); // Output: I am 20 years old.

