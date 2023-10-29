function calcTimeFrom(value) {
    const timeUnits = ['giây', 'phút', 'giờ', 'ngày'];

    let seconds = secondsFrom(value);
    let unitIndex = 0;

    while (seconds >= 60 && unitIndex < timeUnits.length - 1) {
        seconds /= 60;
        unitIndex++;
    }

    return `${Math.floor(seconds)} ${timeUnits[unitIndex]}`;
}

function secondsFrom(value) {
    const currentTimeString = new Date().toISOString();

    const targetTimeString = value;

    const currentTime = new Date(currentTimeString);
    const targetTime = new Date(targetTimeString);

    const timeDifference = currentTime - targetTime;

    const timeDifferenceInMilliseconds = Math.abs(timeDifference);
    const timeDifferenceInSeconds = timeDifferenceInMilliseconds / 1000;

    return timeDifferenceInSeconds;
}

export default calcTimeFrom;