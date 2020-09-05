const arr = [1,3,5,6,1,9,0,2,3,5,4]
let numberOfDuplicate = 0;
const duplicateChecker = () => {
    for(let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                numberOfDuplicate++;
                break;
            }

        }
    }
    console.log("Number of elements duplicates: ", numberOfDuplicate);
}

duplicateChecker();
