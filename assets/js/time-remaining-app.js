// alert("task-down.js connected...");

// Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
function TimeClock() {
  let now = new Date();
  let dateStr = now.toDateString()
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  if(h == 0){
    h = 12;
  }

  if(h > 12){
    h = h - 12;
    ampm = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let t = h + ":" + m + ":" + s + " " + ampm;
  
  document.querySelector("#display-time").textContent = t;
  document.querySelector("#display-date").textContent = dateStr;
}

setInterval(TimeClock, 1000);

//=================================================================================================

// code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2019 0:0:1").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // Output the result in an element with id="demo"
  document.querySelector(".task-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".task-countdown").innerHTML = "EXPIRED";
  }
}, 1000);

//=================================================================================================


















// grab task data
let taskName = document.querySelector(".task-name");
let startDate = document.querySelector(".start-date");
let endDate = document.querySelector(".end-date");


// grabbed task data containers
let displayTaskName = document.querySelector(".display-task-name");
let displayStartDate = document.querySelector(".display-start-date");
let displayEndDate = document.querySelector(".display-end-date");


// display task data on change event
taskName.addEventListener("change", function(){
  console.log(taskName.value);
  displayTaskName.textContent = "Task Name: " + taskName.value;
});

startDate.addEventListener("change", function(){
  console.log(startDate.value);
  displayStartDate.textContent = "Start Date Value: " + startDate.value;
});

endDate.addEventListener("change", function(){
  console.log(endDate.value);
  displayEndDate.textContent = "End Date Value: " + endDate.value;
});
