console.log('Welcome in tutorial 28');

// Object Literals : Object.prototype
let obj = {
	name: 'Anwar',
	channel: 'Code with harry',
	address: 'Mars'
}

function Obj(givenName,givenAge=36){
	this.name = givenName;
	this.age = givenAge
}

console.log(obj);
let obj2 = new Obj('Anwar',25);

Obj.prototype.getName = function(){
	return this.name;
}

Obj.prototype.setName = function (newName){
	this.name = newName;
}
console.log(Obj);
console.log(obj2.getName());
console.log(obj2.setName('Hafiz'));
console.log(obj2.getName());
console.log(obj2);
