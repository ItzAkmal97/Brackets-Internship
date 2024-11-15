async function objEntries() {

    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if(!response.ok){
        console.log("Something went wrong: ");
    }

    const resData = await response.json();
    const data = Object.entries(resData);

    return data;
    } catch (error){
        console.log("Error fetching data: ", error);
    }
}

objEntries().then(data => {
    if (data) {
        console.log("There you go:");
        for(let i = 0; i < data.length; i++){
            console.log(data[i].join(": "));
        }
    }

})