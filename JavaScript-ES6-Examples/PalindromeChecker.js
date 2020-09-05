const str = 'madam';

const isPalindrome = (data) => {
    for(let i = 0; i < data.length; i++) {
        if (data[i] !== data[data.length - 1 - i]) {
            console.log(false);
        } else {
            console.log(true);
        }

    }
}

isPalindrome(str);
