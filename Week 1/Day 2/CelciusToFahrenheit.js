const convertCtoF = () => {
    let userInput = prompt("Enter a value: ");
    
    let fahrenhiteValue = userInput * 9/5 + 32;
    
    console.log(fahrenhiteValue)
}

convertCtoF()