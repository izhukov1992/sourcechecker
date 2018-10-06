import React from 'react';

export default class Resource extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.resource.url}</td>
                <td></td>
            </tr>
        )
    }
}
