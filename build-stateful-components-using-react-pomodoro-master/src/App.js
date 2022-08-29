// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
//import React from 'react';

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
        this.state = {timerState: "", currentTimer: "Pomodoro"};
        this.timer = {
            pomodoro: {type: "Pomodoro", timeout: false, timerState: "Stopped", timeLeft: 25*60, timeLeftDisplay: "25:00", message: "Time to Work!"},
            shortBreak: {type: "Short Break", timeout: false, timerState: "Stopped", timeLeft: 5*60, timeLeftDisplay: "5:00", message: "Time for Break!"},
        };
        this.startTimer = this.startTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.navigateToTimer = this.navigateToTimer.bind(this);
        this.navigateToNextTimer = this.navigateToNextTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    // define startTimer() function to start timer and update currentTimer state
    startTimer(event) {
        this.setState({timerState: "Running"})
    }
    
    // define endTimer() function to end current timer and navigate to next timer
    endTimer(event) {
        this.setState({currentTimer: "Short Break"})
    }

    // define navigateToTimer() function to update currentTimer state with given timer
    navigateToTimer(event) {
        
    }

    // define navigateToNextTimer() function to update currentTimer with next timer state
    navigateToNextTimer(event) {

        if (this.state.currentTimer === "Pomodoro") {
            this.timer.pomodoro.timeLeft = 25*60;
            this.setState({currentTimer: "Short Break"});
        } else {
            this.timer.shortBreak.timeLeft = 5*60;
            this.setState({currentTimer: "Pomodoro"});
        }
    }
    
    // define stopTimer() function to pause the current timer and update the currentTimer state
    stopTimer(event) {
        this.setState({Stopped: 0})
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

    render() {
        console.log(this.state.currentTimer);
        const type = this.state.currentTimer === "Pomodoro"
        this.timer.pomodoro.timeLeftDisplay = this.transferTime(this.timer.pomodoro.timeLeft);
        this.timer.shortBreak.timeLeftDisplay = this.transferTime(this.timer.shortBreak.timeLeft);

            return <div className="back">
                <header>Pomodoro</header>
                    <div className="pomodoro-timer">
                        <div className="mode-select-button">
                            <button onClick={this.navigateToNextTimer}>Pomodoro</button>    
                            <button onClick={this.navigateToNextTimer}>Short Break</button>
                        </div>
                        <p>{type ? this.timer.pomodoro.timeLeftDisplay : this.timer.shortBreak.timeLeftDisplay}</p>
                        {this.state.timerState === "Running" ? 
                        <><button onClick={this.stopTimer}>STOP</button><button onClick={this.endTimer}>END</button></> : 
                        <button onClick={this.startTimer}>START</button>}
                    </div>
                    <div className="message">{type ? this.timer.pomodoro.message : this.timer.shortBreak.message}</div>
                </div>;
    }
}


// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
//module.exports={App};