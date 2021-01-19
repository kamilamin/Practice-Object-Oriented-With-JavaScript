// Simple Technique
function countVowels(string) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
            count += 1;
        }
    }
    console.log("Numbers of Vowels", count);
}

countVowels('kamil');
