import React from "react";

export default class FavColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoriteColor: props.color};
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Props color: ${props.color} and State color: ${state.favoriteColor}`);
        return null;
    }

    componentDidMount() {
        this.timeoutID = setTimeout( () => {
            this.setState({favoriteColor: "green"});
        }, 3000);
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before the update, the favorite was " + prevState.favoriteColor;
        return null;
    }

    componentWillUnmount() {
        alert("The favorite color component is about to be unmounted.");
        clearTimeout(this.timeoutID);
    }    

    changeColor = () => {
        this.setState({favoriteColor: "pink"});
    }

    render() {
        return (
            <div className="main">
                <button type="button" className="btn" onClick={this.changeColor}>Change color</button>
                <h1>My Favorite Color is {this.state.favoriteColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}