import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Resource from '../../components/Resource'
import { getResources } from '../../actions'

import './style.scss';

class HomeView extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        getResources: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            timer: null
        };
    }

    componentDidMount() {
        let timer = setInterval(this.props.getResources, 5000);
        this.setState({timer});
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Resource</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.resources &&
                                 this.props.resources.map((resource) => <Resource resource={resource} key={resource.id} />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        resources: state.resources.resources,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getResources: bindActionCreators(getResources, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
