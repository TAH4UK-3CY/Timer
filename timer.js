const secondElement = document.querySelector(".second");
const minuteElement = document.querySelector(".minute");
const hourElement = document.querySelector(".hour");
const milisecondElement = document.querySelector(".milisecond");
const startButton =  document.querySelector(".start");
const pauseButton =  document.querySelector(".pause");
const stopButton =  document.querySelector(".stop");
const newButton =  document.querySelector(".new");
const resultsBody = document.querySelector('.results__body');
let milisecond = 0,
    minute = 0,
    second = 0,
    hour = 0,
    interval;

function addZero(time){
    return time < 10 ? '0' + time : time;
}
function startTimer(){

    milisecond++;
    if(milisecond==100){
        milisecond=0;
        second++;

        milisecondElement.innerHTML= addZero(milisecond);
        secondElement.innerHTML= addZero(second);
        
        
    }
    if(second==60){
        second=0;
        minute++;
        secondElement.innerHTML= addZero(second);
        minuteElement.innerHTML= addZero(minute);
    }
    if(minute==60){
        minute=0;
        hour++;
        hourElement.innerHTML= addZero(hour);
        minuteElement.innerHTML=addZero(minute);
    }
    milisecondElement.innerHTML=addZero(milisecond);
    
}

startButton.addEventListener("click",()=>{
    clearInterval(interval)
    interval=setInterval(startTimer, 10);
} )
pauseButton.addEventListener("click",()=>{
    clearInterval(interval)
} )
stopButton.addEventListener("click",()=>{
    clearInterval(interval)
    second=0;
    milisecond=0;
    minute=0;
    hour=0;
    secondElement.innerHTML= "00";
    minuteElement.innerHTML= "00";
    hourElement.innerHTML= "00";
    milisecondElement.innerHTML="00";
})
newButton.addEventListener("click",()=>{
    clearInterval(interval);
    const block = document.createElement("div");
    block.innerHTML=`Result: ${addZero(hour)} ${addZero(minute)} ${addZero(second)} ${addZero(milisecond)}`;
    block.classList.add("results__block");
    resultsBody.append(block);
})