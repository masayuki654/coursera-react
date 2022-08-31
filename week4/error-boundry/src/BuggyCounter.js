import React from "react";

export default class BuggyCounter extends React.Component {
    state = {counter: 0};

    handleClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        if (this.state.counter === 4) {
            throw new Error("Simulated error.");
        }
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}