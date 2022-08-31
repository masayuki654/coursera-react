import React from "react";

export default class ClockTicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Getting the derived state from props", props, " : ", state);
        return null;
    }

    componentDidMount() {
        this.timerID = setInterval(this.updateTime, 1000);
        console.log("Ticker component mounted");
    }

    updateTime = () => {
        this.setState({time: new Date() });
    }

    pad = (i) => {
        return ("0" + i).slice(-2);
    }

    render() {
        console.log("Rendering");
        const time = this.state.time;
        const timeString = `${this.pad(time.getUTCHours())}:${this.pad(time.getUTCMinutes())}:${this.pad(time.getUTCSeconds())}`;
        return (
            <div>
                {timeString}
            </div>
        );
    }
}