import React, {Component} from "react";
import axios from "axios";
import DataTable from "./DataTable";

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: []};
    }

    componentDidMount() {
        axios.get("http://localhost:3000/users")
            .then(res => {
                console.log(res.data);
                this.setState({usersCollection: res.data});
            })
            .catch(error => console.log(error));
    }

    onDelete(id) {
        console.log(this.state.usersCollection);
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        
        const newUserCollection = this.state.usersCollection.filter(user => user.id !== id);
        console.log(newUserCollection);
        this.setState({ usersCollection: newUserCollection});
        console.log("deleted");
    }

    dataTable() {
        const action = this.props.action;
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} action={action} onClick={this.onDelete.bind(this)} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                {
                                    this.props.action === "DELETE"
                                    && <td>Confirm delete?</td>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    
}