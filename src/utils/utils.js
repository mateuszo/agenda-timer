export const minutesToString = (duration) => {
    const hours = Math.floor(duration/60);
    const minutes = duration - hours * 60;
    const hoursStr = hours.toString().padStart(2, 0);
    const minutesStr = minutes.toString().padStart(2, 0);
    return (hours > 0 ? hoursStr + ":" : "") + minutesStr + ":00"; 
}
