// Call method implementation
let infoObj = {
    firstName: 'Kamil',
    lastName: 'Amin'
}

let printInfo = function(homeTown, state) {
    console.log(this.firstName + " " + this.lastName, " ", homeTown, ",", state);
}
printInfo.call(infoObj, "Karachi", "Sindh");

let infoObj2 = {
    firstName: 'Tahseen',
    lastName: 'Amin'
}

// Function Borrowing
printInfo.call(infoObj2, "Hyderabad", "Sindh");

// Apply Method implementation

printInfo.apply(infoObj2, ["Hyderabad", "Sindh"]);

// Bind Method

let printBindedMethod = printInfo.bind(infoObj2, "karachi", "sindh");
printBindedMethod();

