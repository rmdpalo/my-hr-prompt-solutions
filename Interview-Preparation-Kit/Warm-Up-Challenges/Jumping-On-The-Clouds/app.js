// Complete the jumpingOnClouds function below.
const sampleInput1 = [0, 0, 1, 0, 0, 1, 0]; //expected output 4
const sampleInput2 = [0, 0, 0, 0, 1, 0]; //expected output 3
function jumpingOnClouds(array) {
  let jumps = 0;

  for (let i = 0; i < array.length; ) {
    if (i === array.length - 1) {
      break;
    } else if (array[i + 1] === 1 || array[i + 2] === 0) {
      i += 2;
      jumps += 1;
      console.log("jumped 2 spaces");
    } else {
      i += 1;
      jumps += 1;
      console.log("jumped 1 space");
    }
  }
  return jumps;
}

console.log(jumpingOnClouds(sampleInput1));
console.log(jumpingOnClouds(sampleInput2));
