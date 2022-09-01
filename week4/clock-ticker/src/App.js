import React from 'react';
import './App.css';
import ClockTicker from './ClockTIcker';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hideTicker: false};
  }

  hideTicker = (event) => {
    this.setState({hideTicker: event.target.checked});
  }

  render() {
    return (
      <div>
        <h1 className="app-header">Timer</h1>
        <div className='displayTimer'>
          <div>
            <input className='hideTimer' type="checkbox" onChange={this.hideTicker} />
            Hide Clock Ticker
          </div>
          <h2>{!this.state.hideTicker && <ClockTicker />}</h2>
        </div>
      </div>
    );
  }
}

export default App;
