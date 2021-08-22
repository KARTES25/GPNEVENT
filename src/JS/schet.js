
 document.addEventListener("DOMContentLoaded", function(event) {
  const countdownElement = document.querySelector(".countdown__items");
  const items = document.querySelectorAll(".countdown__item-iter");
  
  let countdownDate = new Date(2022, 0, 1, 0, 0, 0).getTime();
  
  function getCountTime() {
  
    const now = new Date().getTime();
  
    const distance = countdownDate - now;
  
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
  
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
  
    const values = [days, hours, minutes, seconds];
  
    items.forEach(function (item, index) {
      item.textContent = values[index];
    });
  
    if (distance < 0) {
      clearInterval(countdown);
      countdownElement.innerHTML = "<div class='countdown__text'>С новым годом!</div>";
    }
  }
  
  let countdown = setInterval(getCountTime, 1000);
  
  getCountTime();
});
