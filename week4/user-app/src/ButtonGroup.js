import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedButton: this.props.selectedButton}
    }

    static getDerivedStateFromProps(props, state) {
        if (props.selectedButton !== state.selectedButton) {
            return { selectedButton: props.selectedButton };
        }
        return null;
    }

    handleClick(event) {
        this.setState({ selectedButton: event.target.name });
        this.props.onClick(event);
    }

    render() {
        return (
            <div className="w-25 d-flex flex-row m-auto">
                {
                    this.props.buttons.map((buttonLabel, i) => 
                        <button
                            key={i}
                            name={buttonLabel}
                            onClick={(event)=>this.handleClick(event)}
                            className={buttonLabel === this.state.selectedButton ?
                                "btn btn-primary w-100 fs-3 fw-bold" :
                                "btn btn-secondary w-100 fs-3 fw-bold"}>
                        {buttonLabel}
                        </button>
                    )
                }
            </div>
        )
    }
}

export default ButtonGroup;