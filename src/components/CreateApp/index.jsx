import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class CreateApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }
    getToken() {
        this.props.getToken('https://pawoo.net/', this.props.clientId, this.props.clientSecret, this.state.code);
    }
    createApp() {
        this.props.createApp('https://pawoo.net/');
    }

    changeCode(event) {
        this.setState({code: event.target.value});
    }

    render() {
        return (<div>
          <h2>CreateApp</h2>
          <div>id: {this.props.clientId}</div>
          <div>secret: {this.props.clientSecret}</div>
          <div>token: {this.props.token}</div>
          <div><input type="text" onChange={e => this.changeCode(e)} /></div>
          <button type="button" disabled={this.props.clientId === ''} onClick={() => this.getToken()}>Get Token</button>
          <button type="button" onClick={() => this.createApp()}>Create App</button>
        </div>);
    }
}

CreateApp.propTypes = {
    getAuth: PropTypes.func.isRequired,
    createApp: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        clientId: state.clientId,
        clientSecret: state.clientSecret,
        code: state.clientSecret,
        token: state.token
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);
