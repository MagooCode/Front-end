function updateCountdown() {
    let currentTime = new Date().getTime();
    let timeDifference = endTime - currentTime;

    if (timeDifference <= 0) {
      countdownTimer.textContent = "Countdown complete!";
    } else {
      let seconds = Math.floor(timeDifference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      countdownTimer.textContent = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      setTimeout(updateCountdown, 1000);
    }
  }

  let durationInput = document.getElementById("duration");
  let countdownTimer = document.getElementById("countdownTimer");
  let startButton = document.getElementById("startButton");
  let endTime;

  startButton.addEventListener("click", function() {
    let duration = parseInt(durationInput.value);

    if (!isNaN(duration) && duration > 0) {
      countdownTimer.textContent = "Countdown started!";
      durationInput.disabled = true;
      this.disabled = true;

      let currentTime = new Date().getTime();
      endTime = currentTime + (duration * 1000);

      updateCountdown();
    } else {
      countdownTimer.textContent = "Invalid input. Please enter a positive number of seconds.";
    }
  });