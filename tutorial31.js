console.log('Welcome in tutorial 31');

class Employee{
	constructor(givenName, givenExperience, givenDivision){
		this.name = givenName;
		this.experience = givenExperience;
		this.division = givenDivision;
	}

	slogan(){
		return `I am ${this.name} and this company is the best.`
	}

	joiningYear(){
		return 2020-this.experience;
	}

	static add(a,b){
		return a+b;
	}
}

class Programmer extends Employee{
	constructor(givenName, givenExperience, givenDivision,givenLanguage,givenGithub){
		super(givenName,givenExperience,givenDivision);
		this.language = givenLanguage;
		this.github = givenGithub;
	}

	favoriteLanguage(){
		if(this.language == 'python'){
			return 'Python';
		}else{
			return 'Java Script';
		}
	}

	static multiply(a,b){
		return a*b;
	}
}

let harry = new Employee('Harry',11,'Software Development');

console.log(harry);
console.log(harry.joiningYear());
console.log(Employee.add(5,5));

let rohan = new Programmer('Rohan',3,'Lays','Go','rohan195');

console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(5,5));

