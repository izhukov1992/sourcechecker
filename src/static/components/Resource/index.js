import React from 'react';

export default class Resource extends React.Component {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this);
    }

    getClassName() {
        if (this.props.resource.status) {
            if (this.props.resource.status < 200 || this.props.resource.status > 299) {
                return 'danger';
            }
            else {
                return 'success';
            }
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <tr className={this.getClassName()}>
                <td>{this.props.resource.url}</td>
                <td>{this.props.resource.status ? this.props.resource.status : null}</td>
            </tr>
        )
    }
}
