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
