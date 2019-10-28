var mobile = function(model){
    // Instance Member
    this.model = model;
    this.price = 3000;
}

var samsung = new mobile("Galaxy");
var nokia = new mobile("3310");
// Prototype Member
samsung.color = 'white';
console.log("Mobile - 1", samsung);
console.log("Mobile - 2", nokia)