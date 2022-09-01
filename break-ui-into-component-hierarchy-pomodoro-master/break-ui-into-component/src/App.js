// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
import React from 'react';
import Message from './Message';
import TimerArea from './TimerArea';
import ModeButton from './ModeButton';
import StateButton from './StateButton';
import "./App.css";

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
           pomodoro: {type: "Pomodoro", timeout: false, timerState: "Stopped", timeLeft: 25*60, timeLeftDisplay: "25:00"},
           shortBreak: {type: "Short Break", timeout: false, timerState: "Stopped", timeLeft: 5*60, timeLeftDisplay: "05:00"},
        };

        this.state = {timerState: this.timer.pomodoro.timerState, 
                      currentTimer: this.timer.pomodoro.timeLeft,
                      currentType: this.timer.pomodoro.type};

        this.startTimer = this.startTimer.bind(this);
        this.endTimer = this.endTimer.bind(this);
        this.navigateToTimer = this.navigateToTimer.bind(this);
        this.navigateToNextTimer = this.navigateToNextTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer() {
        this.setState({timerState: "Running"});
        this.timerID = setInterval( () => this.tick(), 1000);
        this.timerID2 = setTimeout( () => this.navigateToNextTimer(), this.state.currentTimer * 1000);
    }

    tick() {
        this.setState({currentTimer: this.state.currentTimer - 1});
    }

    navigateToTimer() {
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

    navigateToNextTimer() {
        this.navigateToTimer();
    }

    stopTimer() {
        clearInterval(this.timerID);
        clearTimeout(this.timerID2);
        this.setState({timerState: "Stopped"});
    }

    endTimer(event) {
        this.setState({timerState: "Ended"}, this.navigateToTimer);
    }
    
    render() {
        const isRunning = this.state.timerState === "Running";
        const isPomodoro = this.state.currentType === "Pomodoro";

        return (
        <div className="back">
            <header>Pomodoro</header>
                <div className="pomodoro-timer">
                    <ModeButton onClickFunc={this.navigateToTimer} isPomodoro={isPomodoro}></ModeButton>
                    <TimerArea timeLeft={this.state.currentTimer}></TimerArea>
                    <StateButton isRunning={isRunning} onClickFunc={{startTimer: this.startTimer, stopTimer: this.stopTimer, endTimer: this.endTimer}}></StateButton>
                </div>             
            <Message type={this.state.currentType}></Message>
        </div>
        );
    }
}
// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
export default App;