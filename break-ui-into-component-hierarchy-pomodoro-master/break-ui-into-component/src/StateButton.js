export default function StateButton(props) {
    if (props.isRunning) {
        return <div className="running">
        <button onClick={props.onClickFunc.stopTimer}>stop</button><button onClick={props.onClickFunc.endTimer}>end</button> 
        </div>
    } else {
        return <button onClick={props.onClickFunc.startTimer}>start</button>
    }
}