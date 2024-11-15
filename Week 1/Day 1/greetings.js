const greetings = () => {
    let name = prompt("Please enter your name: ")
    let age = prompt("Please enter your age: ")
    
    while(isNaN(age) || age === ''){
        age = prompt("Please enter a valid number: ")
    }
    
    while(name.trim() === ''){
        name = prompt("Please enter a valid name: ")
    }
    
    console.log(`Hi, ${name}(${age})`);
}

greetings()