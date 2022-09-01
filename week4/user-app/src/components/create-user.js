import React, {Component} from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: "",
            email: ""
        }
    }

    onChangeUserName(event) {
        this.setState({ name: event.target.value });
    }

    onChangeUserEmail(event) {
        this.setState({ email: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const userObject = {
            name: this.state.name,
            email: this.state.email
        };

        axios.post("http://localhost:3000/users", userObject)
            .then((res)=>console.log(res.data))
            .catch((error)=>console.log(error));

        this.setState({name: "", email: ""});
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control"/>
                    </div>
                    <div className="mb-3 form-group">
                        <label>Add User Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block"/>
                    </div>
                </form>
            </div>
        )
    }

}
