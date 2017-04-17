import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class CreateApp extends React.Component {

    test8() {
        this.props.getAuth('https://pawoo.net/');
    }
    test9() {
        this.props.createApp('https://pawoo.net/');
    }

    render() {
        return (<div>
          <h2>CreateApp</h2>
          <div>url: {this.props.baseUrl}</div>
          <div>id: {this.props.clientId}</div>
          <div>secret: {this.props.clientSecret}</div>
          <button onClick={() => this.test8()}>Test</button>
          <button onClick={() => this.test9()}>Promise Test</button>
        </div>);
    }
}

CreateApp.propTypes = {
    getAuth: PropTypes.func.isRequired,
    createApp: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        baseUrl: state.baseUrl,
        clientId: state.clientId,
        clientSecret: state.clientSecret
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);
