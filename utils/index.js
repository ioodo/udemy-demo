export const formatDuration = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return hours > 0 
        ? `${hours}:${formattedMinutes}:${formattedSeconds}` 
        : `${formattedMinutes}:${formattedSeconds}`;
}

export const formatNumber = (val, decimal = true) => {
    const v = val < 0 ? val * -1 : val
    let str = `${v}`
    const arr = str.split('.')
    const num = arr[0]
    let counter = 0;
    const result = []
    for (let i = num.length - 1; i >= 0; i--) {
      counter++;
      result.unshift(num[i]);
      if (!(counter % 3) && i !== 0) {
        result.unshift(',');
      }
    }
    if (decimal) {
      if (arr.length > 1) {
        result.push(`.${arr[1]}`)
      } else {
        // result.push('.00')
      }
    }
    if (val < 0) {
      result.unshift('-')
    }
    str = result.join('')
    return str
}