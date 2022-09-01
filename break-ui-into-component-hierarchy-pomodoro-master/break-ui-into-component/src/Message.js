export default function Message(props) {
    if (props.type === "Pomodoro") {
        return <div className="message">Time to Work!</div>
    } else {
        return <div className="message">Time for Break!</div>
    }
}