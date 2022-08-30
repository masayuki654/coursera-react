import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {Component} from "react";
import Greeting from "./Greeting";

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.changeName = this.changeName.bind(this);
        this.state = {
            isLoggedIn: false,
            name: ""
        };
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            console.log("Logged in");
            button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        } else {
            console.log("Not logged in");
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} user={this.state.name} />
                <label className="label" htmlFor="name">Name:</label>
                <input className="text-input" type="text" id="name" value={this.state.name} placeholder="Enter your full name" onChange={e => this.changeName(e)} />
                <div>
                    {button}
                </div>
            </div>
        );
    }
}

export default LoginControl;