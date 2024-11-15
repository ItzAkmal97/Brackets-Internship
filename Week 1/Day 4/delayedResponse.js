async function delayedResponse(){
    console.log("Async await delayed simulation");
    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Good Morning");
            resolve();
        }, 1000);
    })

    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Good Afternoon");
            resolve();
        }, 1000);
    })

    await new Promise(resolve => {
        setTimeout(() => {
            console.log("Good Night");
            resolve();
        }, 1000);
    })

}

delayedResponse()
.then(() => {
    console.log("All greetings have been displayed: ");
}).catch(error => {
    console.log(error)
});