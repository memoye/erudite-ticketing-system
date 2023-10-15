export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function formatTimeTo12HourClock(time) {
    // Split the input time into hours, minutes, and seconds
    const [hours, minutes] = time.split(':');

    // Get the current date and time in the user's timezone
    const currentTime = new Date();
    currentTime.setHours(hours, minutes, 0);
    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };

    // Format the time in 12-hour clock with AM/PM notation and the timezone abbreviation
    const formattedTime = currentTime.toLocaleString('en-US', options);

    // Manually append the "WAT" timezone abbreviation
    return `${formattedTime}`;
}