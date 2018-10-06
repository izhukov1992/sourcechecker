import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

import './styles/main.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
