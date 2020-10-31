function countingValleys(steps, path) {
    let seaLevel = 0;
    let valleys = 0;
    const pathArray = path.split('');
    for(let i=0; i<steps ; i++){
        if(pathArray[i] === 'D'){
            seaLevel--;
        }else if(pathArray[i] === 'U'){
            seaLevel++;
        }
        if (seaLevel === 0 && pathArray[i] === 'U') {
            valleys++;
        }    
    }
    return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
//expected output 1
