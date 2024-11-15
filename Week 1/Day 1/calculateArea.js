
function calculatearea() {
    let base = prompt("Enter the base of triangle: ");
    let height = prompt("Enter the height of triangle: ");
    
    while(isNaN(base) || base === ''){
        base = prompt("Please enter a valid number for the base: ");
    }
    
    while(isNaN(height) || height === ''){
        height = prompt("Please enter a valid number for the height: ");
    }
    
    base = parseFloat(base);
    height = parseFloat(height);
    
    
    let area = 0.5 * base * height;
    console.log(area);
}

calculatearea();