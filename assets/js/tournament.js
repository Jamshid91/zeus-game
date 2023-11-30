document.addEventListener('DOMContentLoaded', function () {

    // конечная дата, например 1 декабря 2023
    const deadline = new Date(2023, 11, 02);

    let timerId = null;
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    }
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

const filters = document.querySelectorAll('.filter-item li');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filter.parentElement.previousElementSibling.textContent = filter.textContent;
  })
})