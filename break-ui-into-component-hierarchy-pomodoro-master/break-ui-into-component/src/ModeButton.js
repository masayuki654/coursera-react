export default function ModeButton(props) {
    return <div className="mode-select-button">
    <button onClick={props.onClickFunc} style={ props.isPomodoro ? {pointerEvents: "none", color: "blue"} : null }>Pomodoro</button>    
    <button onClick={props.onClickFunc} style={ !props.isPomodoro ? {pointerEvents: "none", color: "blue"} : null }>Short Break</button>
    </div>
}