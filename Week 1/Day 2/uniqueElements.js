const arr = [1,1,22,22,5,5,6,7,7,8,8,9];

const uniqueElements = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === arr.lastIndexOf(item));
}

console.log(uniqueElements(arr))