// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateUTCTime() {
    const currentDate = new Date();
    const utcTime = currentDate.toISOString().substr(11, 8);
    document.querySelector('[data-testid="currentUTCTime"]').textContent = utcTime;
}

// Call the update functions initially and set intervals for updating
updateDayOfTheWeek();
updateUTCTime();
setInterval(updateDayOfTheWeek, 60000); // Update every minute
setInterval(updateUTCTime, 1000); // Update every second
