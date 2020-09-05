const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 50 },
    { name: "Book", price: 20 },
    { name: "Phone", price: 10 },
    { name: "Computer", price: 5 },
    { name: "Keyboard", price: 1000 },
]
// Filter Method
const filterItems = items.filter((item) => {
    return item.price <= 100;
})

console.log("Filter-Method", filterItems);

// Map Method
const itemNames = items.map(item => {
    return item.name;
})

console.log("Map-Method", itemNames);

// Find Method

const findItem = items.find(items => {
    return items.name === "Album";
})

console.log("Find-Method", findItem);

// ForEach Method

items.forEach(item => {
    console.log(item.name)
    console.log(item.price)
})

// Some Method

const checkArr = items.some(item => {
    return item.price <= 0;
})

console.log("Some-item", checkArr);

// Every method

const checkEveryElement = items.every(item => {
    return item.price <= 1000;
})

console.log("Every-Method", checkEveryElement);

// Reduce Method

const reduceItem = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log("Reduce", reduceItem);

const checkInclude = [1,2,3,4,5];

// Include Method

const checkItem = checkInclude.includes(8)

console.log("Include Method", checkItem);
