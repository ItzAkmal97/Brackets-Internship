interface Data {
    numbers: number[],
    threshold: number
}

const thresholdNumber = ({numbers, threshold}: Data): string => {
    const copiedNumbers = [...numbers]
    let finalResult = copiedNumbers.filter(num => num >= threshold);
    let count = finalResult.length;

    return `There ${count <= 1 ? 'is': 'are'} ${count} ${count > 1 ? 'numbers': 'number'} greater than ${threshold}: ${finalResult}`
}

const data = {
  numbers: [3, 8, 15, 6, 22, 9, 78, 1],
  threshold: 90
};

console.log(thresholdNumber(data))
