import "./App.css";
import React from "react";
import FavColor from "./fav-color";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "blue", isVisible: true};
    console.log(this.state.favoriteColor);
  }

  showColor = () => this.setState(state => ({ isVisible: !state.isVisible }));

  render() {
    return (
      <>
        <button type="button" className="btn" onClick={this.showColor}>Show/Hide color</button>
        {this.state.isVisible && <FavColor color={this.state.favoriteColor} />}
      </>
    );
  }
}

export default App;
