export const minutesToString = (duration) => {
    const hours = Math.floor(duration/60);
    const minutes = duration - hours * 60;
    const hoursStr = hours.toString().padStart(2, 0);
    const minutesStr = minutes.toString().padStart(2, 0);
    return (hours > 0 ? hoursStr + ":" : "") + minutesStr + ":00"; 
};

export const secondsToString = (duration) => {
    const sign = Math.sign(duration) > 0 ? "" : "-" ;
    duration = Math.abs(duration);
    const hours = Math.floor(duration/(60*60));
    const minutes = Math.floor((duration - hours*60*60)/60);
    const seconds = duration - hours*60*60 - minutes*60;
    const hoursStr = hours.toString().padStart(2, 0);
    const minutesStr = minutes.toString().padStart(2, 0);
    const secondsStr = seconds.toString().padStart(2, 0);
    return sign + (hours > 0 ? hoursStr + ":" : "") + minutesStr + ":" + secondsStr;
};
