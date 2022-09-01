import React from "react";
import { transferTime } from "./Funtion";

export default class TimerArea extends React.Component {
    render() {
        return (
            <div className="timer-area">
                <p className="timer-text">{transferTime(this.props.timeLeft)}</p>
            </div>
        );
    }
}