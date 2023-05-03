function FtoC(number) {
    return (number - 32) * 5/9;
}

const FinC = FtoC(33);
console.log(FinC);

function getOddDigits(number) {
    const string = number.toString();
    const oddDigits = [];
    for (let index = 0; index < string.length; index++) {
        const digit = parseInt(string.charAt(index));
        if (digit % 2 !== 0 && !oddDigits.includes(digit)) {
            oddDigits.push(digit);
        }
    }
    return oddDigits;
}

const oddDigits = getOddDigits(237891);
console.log(oddDigits);

function AverageScore(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum / numbers.length;
}

const numbers = [93, 91, 92, 94, 85, 85];
const average = AverageScore(numbers);
console.log(average);