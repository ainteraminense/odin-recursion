function generateFibonacciIteratively(number) {
    const sequence = [];
    for (let i = 0; i < number; i++) {
        console.log("This was printed in iterations");
        if (i < 2) {
            sequence.push(i);
        } else {
            sequence.push(sequence[i-1] + sequence[i -2]);
        }
    }
    return sequence;
}

function generateFibonacciRecursively(number) {
    console.log("This was printed recursively");
    if (number === 1) {
        return [0];
    } else if (number === 2) {
        return [0, 1] 
    } else {
        const precedingTwo = generateFibonacciRecursively(number-1);
        const value = precedingTwo[precedingTwo.length-1] + precedingTwo[precedingTwo.length-2];
        const sequence = precedingTwo.slice();
        sequence.push(value);
        return sequence;
    }
}

console.log(generateFibonacciRecursively(8));


