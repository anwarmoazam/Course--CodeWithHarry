console.log('Welcome in tutorial 27');

// Object Literal for creating objects
let car = {
	name: 'Maruti 800',
	topSpeed: 80,
	run: function(){
		return 'Car is running';
	}
}

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName,givenSpeed){
	this.name = givenName;
	this.topSpeed = givenSpeed;
	this.run = function(){
		return `${this.name} is running`;
	}
	this.analyze = function(){
		return `${this.name} car is slower by ${200-this.topSpeed} Km/h than Mercedes`;
	}
}

let car1 = new GeneralCar('Nissan',180); 
let car2 = new GeneralCar('Maruti Alto',100); 
let car3 = new GeneralCar('Mercedes',200);



console.log(car1.topSpeed);
console.log(car2.topSpeed);
console.log(car3.topSpeed);

console.log(car1.analyze());
console.log(car2.analyze());
console.log(car3.analyze());

