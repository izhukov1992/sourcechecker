import React from 'react';

export default class Resource extends React.Component {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }

    getClassName() {
        if (this.props.resource.status === true) {
            return 'success';
        }
        else if (this.props.resource.status === false) {
            return 'danger';
        }
        else {
            return null;
        }
    }

    getStatus() {
        if (this.props.resource.status === true) {
            return 'available';
        }
        else if (this.props.resource.status === false) {
            return 'unavailable';
        }
        else {
            return 'unknown';
        }
    }

    render() {
        return (
            <tr className={this.getClassName()}>
                <td>{this.props.resource.url}</td>
                <td>{this.getStatus()}</td>
            </tr>
        )
    }
}
