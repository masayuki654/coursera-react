// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
import React from 'react';

//Write the code for creating App class component
class App extends React.Component{

    /* define the constructor and initialize the following:
       1. define timer states with values 'Running', 'Stopped' and 'Ended'
       2. define timers object with object properties: pomodoro and shortBreak, where each property 
       object should have properties: type, timeout, timerState, timeLeft, timeLeftDisplay and message
       3. set the 'currentTimer' state value to pomodoro that has been defined in 2nd step 
    */
    constructor(props) {
        super(props);

        this.timer = {
            pomodoro: {type: "Pomodoro", timeout: false, timerState: "Stopped", timeLeft: 25*60, timeLeftDisplay: "25:00", message: "Time to Work!"},
            shortBreak: {type: "Short Break", timeout: false, timerState: "Stopped", timeLeft: 5*60, timeLeftDisplay: "05:00", message: "Time for Break!"},
        };

        this.startTimer = this.startTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.navigateToTimer = this.navigateToTimer.bind(this);
        this.navigateToNextTimer = this.navigateToNextTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);

        this.state = {timerState: this.timer.pomodoro.timerState, currentTimer: this.timer.pomodoro.timeLeft, currentType: this.timer.pomodoro.type};
    }

    // define startTimer() function to start timer and update currentTimer state
    startTimer() {
        this.setState({timerState: "Running"});
        this.timerID = setInterval( () => this.tick(), 1000);
        this.timerID2 = setTimeout( () => this.navigateToNextTimer(), this.state.currentTimer * 1000);
    }
    
    // define endTimer() function to end current timer and navigate to next timer
    endTimer(event) {
        this.setState({timerState: "Ended"}, this.navigateToTimer);
    }
    
    // define navigateToTimer() function to update currentTimer state with given timer
    navigateToTimer(event) {
        clearInterval(this.timerID);
        clearTimeout(this.timerID2);
        if (this.state.currentType === this.timer.pomodoro.type) {
            this.setState({
                timerState: this.timer.shortBreak.timerState,
                currentTimer: this.timer.shortBreak.timeLeft,
                currentType: this.timer.shortBreak.type
            });
        } else if (this.state.currentType === this.timer.shortBreak.type) {
            this.setState({
                timerState: this.timer.pomodoro.timerState,
                currentTimer: this.timer.pomodoro.timeLeft,
                currentType: this.timer.pomodoro.type
            });
        }
    }
    
    // define navigateToNextTimer() function to update currentTimer with next timer state
    navigateToNextTimer() {
        this.setState(this.navigateToTimer(), this.startTimer());
    }
    
    // define stopTimer() function to pause the current timer and update the currentTimer state
    stopTimer(event) {
        clearInterval(this.timerID);
        clearTimeout(this.timerID2);
        this.setState({timerState: "Stopped"});
    }
    
    transferTime(seconds) {
        let minute = Math.floor(seconds/60);
        let second = seconds - 60 * minute;
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
    
    tick() {
        this.setState({currentTimer: this.state.currentTimer - 1});
    }

    render() {
        const isRunning = this.state.timerState === "Running";
        const isPomodoro = this.state.currentType === "Pomodoro";
        const timeLeftDisplay = this.transferTime(this.state.currentTimer);

        return (
        <div className="back">
            <header>Pomodoro</header>
                <div className="pomodoro-timer">
                    <div className="mode-select-button">
                        <button onClick={this.navigateToTimer} style={ isPomodoro ? {pointerEvents: "none", color: "blue"} : null }>Pomodoro</button>    
                        <button onClick={this.navigateToTimer} style={ !isPomodoro ? {pointerEvents: "none", color: "blue"} : null }>Short Break</button>
                    </div>
                    <div className="timer-area">
                        <p className="timer-text">{timeLeftDisplay}</p>
                    </div>
                    {isRunning ? 
                    <div className="running">
                        <button onClick={this.stopTimer}>stop</button><button onClick={this.endTimer}>end</button> 
                    </div>:
                    <button onClick={this.startTimer}>start</button>}
                </div>

                <div className="message">{this.state.currentType === "Pomodoro" ? this.timer.pomodoro.message : this.timer.shortBreak.message}</div>
        </div>
        );
    }
}


// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
//module.exports={App};
export default App;