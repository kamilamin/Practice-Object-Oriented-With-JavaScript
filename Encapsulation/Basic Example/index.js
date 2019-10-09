class person{ 
	constructor(name,id){ 
		this.name = name; 
		this.id = id; 
	} 
	setAddress(address){ 
		this.address = address; 
	} 
	getDetails(){ 
		console.log(`Name is ${this.name}, and the ID is ${this.id}, Address is: ${this.address}`); 
	} 
} 

let person1 = new person('Kamil', 24); 
person1.setAddress('Karachi'); 
person1.getDetails(); 
