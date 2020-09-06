// Prototype chain and Prototypal Inheritance

let obj = {
    name: 'Ali',
    city: 'karachi',
    getIntro: function() {
        console.log(this.name + " from " + this.city)
    }
}

let obj2 = {
    name: 'Usman'
}

obj2.__proto__ = obj;

// Accessing Method with all other methods

Function.prototype.selfBind = function() {
    console.log('Self Bind Method');
}

function checkSelfBind() {

}
