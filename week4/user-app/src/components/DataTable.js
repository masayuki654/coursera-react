import React from "react";

export default class DataTable extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    deleteUser(id) {
        this.props.onClick(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                {
                    this.props.action === "DELETE"
                    && <td>
                        <button className="btn btn-danger" onClick={this.deleteUser.bind(this, this.props.obj.id)}>
                            Delete
                        </button>
                    </td>
                }
            </tr>
        )
    }
}