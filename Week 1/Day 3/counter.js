let counterId = document.getElementById("counterId");
let increaseCounter = document.getElementById("increaseCounter");

function counter(){
  let count = 0;
  return function(){
    increaseCounter.addEventListener("click", function(){
      count += 1;
      counterId.textContent = count;
    });
  }
}

const startCounter = counter();
startCounter();