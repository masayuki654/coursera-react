export default function TransferTime(props) {
    let minute = Math.floor(props/60);
    let second = props - 60 * minute;
    if (minute >= 10 && second >= 10) {
        return `${minute}:${second}`;
    } else if (minute < 10 && second >= 10) {
        return `0${minute}:${second}`;
    } else if (minute >= 10 && second < 10) {
        return `${minute}:0${second}`;
    } else {
        return `0${minute}:0${second}`;
    }
}