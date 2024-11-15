function fetchDate(){
    console.log("Fetching the date...");

    return new Promise((resolve, reject) => {
        fetch("http://worldtimeapi.org/api/timezone/Asia/Karachi")
        .then(response => {
            if(!response.ok){
                reject(new Error("There was something wrong with the request"));
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error)
        });

    })
}

fetchDate()
.then(data => {
    const formattedDate = new Date(data.datetime).toLocaleString();
    console.log("Date fetched: ", formattedDate);
}).catch(error => {
    console.log(error);
})