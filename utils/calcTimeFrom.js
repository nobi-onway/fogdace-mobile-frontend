function calcTimeFrom(value) {
    const timeUnits = ['giây', 'phút', 'giờ', 'ngày', 'tháng', 'năm'];
    const measureUnits = [60, 60, 24, 30, 12]

    let seconds = secondsFrom(value);
    let unitIndex = 0;

    while (seconds >= measureUnits[unitIndex] && unitIndex < timeUnits.length - 1) {
        seconds /= measureUnits[unitIndex];
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