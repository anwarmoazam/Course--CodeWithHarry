console.log('Welcome in tutorial 30');

const proto = {
	slogan: function(){
		return 'This company is the best';
	},
	changeName: function(newName){
		return this.name = newName;
	}
}


// This creates newObj object
// const newObj = Object.create(proto);
// // console.log(newObj);
// newObj.name = 'Anwar Moazam';
// newObj.role = 'Developer';
// newObj.changeName('Moazam');

// This also creates newObj object
const newObj = Object.create(proto,{
	name: {value: 'Anwar Moazam', writable: true},
	role: {value: 'Tester', writable: true}
})

newObj.changeName('Moazam');
newObj.changeName('Anwar');

// console.log(newObj);

// Employee constructor
function Employee(name, salary, experience) {
	this.name = name;
	this.salary = salary;
	this.experience = experience;
}

// Slogan
// console.log(Employee('Anwar',152000,2));
Employee.prototype.slogan = function(){
	return `This company is the best. Regards, ${this.name}`;
}

let newObj1 = new Employee('Anwar',50000,1);
console.log(newObj1.slogan());

// Programmer
function Programmer(name,salary,experience,language){
	Employee.call(this,name,salary,experience);
	this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan',2,5,'JavaScript');
console.log(rohan);


// Exercise

function Flour(egg,bakingPowder,sugar){
	this.egg = egg;
	this.bakingPowder = bakingPowder;
	this.sugar = sugar;
}

Flour.prototype.slogan = function(){
	return `This item made by Anwar`;
}

let cake = new Flour(2,1,1);

console.log(cake);