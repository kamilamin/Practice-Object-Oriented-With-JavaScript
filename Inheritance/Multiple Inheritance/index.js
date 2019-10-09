//Inhertiance example 
class person{ 
	constructor(name){ 
		this.name = name; 
	}
	isString(){ 
		return (`Name of person: ${this.name}`); 
	} 
} 

class student extends person{ 
	constructor(name,id){ 
		//super keyword to for calling above class constructor 
		super(name); 
		this.id = id; 
	} 
	toString(){ 
		return (`${super.isString()}, Student ID: ${this.id}`); 
	} 
}

class Batch extends student {
    constructor(name, id, batch){
        super(name, id);
        this.batch = batch;
    }
    batchString(){
        return (`${super.toString()}, Student Batch: ${this.batch}`)
    }
}
let batch = new Batch("Kamil", 22, 10)
console.log(batch.batchString()); 
