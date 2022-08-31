import React from "react";

export default class ErrorBoundry extends React.Component {
    state = { error: null };

    static getDerivedStateFromError(error) {
        return { error: error.toString() };
    }

    componentDidCatch(error, info) {
        this.logErrorToService(error.toString(), info);
    }

    logErrorToService = console.log;

    render() {
        if (this.state.error) {
            console.log(this.state.error);
            return <p>Something broke</p>
        }
        return this.props.children;
    }
}