import {ThemeContext} from "./theme-context";
import React from "react";

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        console.log(props);

        return (
            <button
                {...props}
                style={{
                    backgroundColor: theme.background,
                    color: theme.foreground,
                    padding: "25px",
                    margin: "15px",
                    fontSize: "0.8em"
                }}
                >Themed Button</button>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;