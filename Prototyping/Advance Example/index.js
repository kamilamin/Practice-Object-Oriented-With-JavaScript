var mobile = function(model){
    // Instance Member
    this.model = model;
    this.price = 1000;
}

var samsung = new mobile("Galaxy");
var nokia = new mobile("3310")
// Prototype Member
mobile.prototype.color = "White"
console.log("Mobile - samsung", samsung);
console.log("Mobile - nokia", nokia)