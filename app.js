//1----- SALES BY MATCH
function sockMerchant(n, ar) {
// expected input example (9, [1,2,3,1,2,3,1,2,3])
// expected output 3
//n represents the number of socks
//ar represents the color of each sock in an array ar.length === n
//I need an object to keep track of the different socks
//create variable that stores our sock pairs
//if our number of socks is even then it's a pair, increment pairs.
let socks = {};
let pairs = 0;
for(let i = 0; i < n; i++) {
    socks[ar[i]] = socks[ar[i]] + 1 || 1;
    if (socks[ar[i]] % 2 === 0) {
        pairs++;
    } 
}
return pairs
}

//2----- FUN WITH ANAGRAMS
//expected input [arr of strings]
//expected output [filtered arr of strings] (length will be less than input if there are any anagrams.)
function funWithAnagrams(text) {
    // Write your code here
    
    //O(n)
    for (let i = 0; i < text.length; i++) {
        //O(n)
        //i goes from the left side of the array
        let alphabeticalWordOne = text[i].split('').sort().join('')
        for(let j=text.length-1; j > i ; j--) {
            //basically what we're doing is we're sorting the words in alphabetical order to be able to compare to each other.
            //we need to split the words, sort them alphabetically, then join again.
            //j goes from the right side of the array
            let alphabeticalWordTwo = text[j].split('').sort().join('')
            
            // if these two sorted strings equal each other they are anagrams
            //we want to remove j, because it's the later occurence of that anagram.
            if(alphabeticalWordOne === alphabeticalWordTwo){
            //splice takes to arguments, the index at which it removes and then how much it will remove.
            text.splice(j, 1);
            }
        }
    }
    //sort 
    return text.sort();
}

//Why this works...
//line 40 checks if they contain the same characters no matter the original string because if it's the same. once sorted into alphabetical order it should be exactly the same string.
//a for loop in a for loop might not scale well, if I have time after the next question revisit this and consider a different way of doing it.
    //we have a loop O(n) inside another loop O(n), our time complexity is O(n**2).
    //space complexity of this I believeee is O(n), strings require O(n) space where n is the length.
