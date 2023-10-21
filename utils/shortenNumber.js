function shortenNumber(number) {
    const suffix = ["", "K", "M", "B"]
    const index = Math.floor(Math.log10(Math.abs(number)) / 3) || 0;

    const shortNumber = number / Math.pow(10, index * 3)

    const fixed_length = Math.ceil(shortNumber % 1)

    return shortNumber.toFixed(fixed_length) + suffix[index];
}

export default shortenNumber;