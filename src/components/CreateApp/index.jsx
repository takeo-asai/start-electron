import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class CreateApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: '',
            client_id: null,
            client_secret: null,
            token: null
        };
        console.log(props);
    }

    test8() {
        this.props.getAuth('https://pawoo.net/');
    }
    test9() {
        this.props.promiseTest();
    }

    render() {
        return (<div>
          <h2>CreateApp</h2>
          {this.props.baseUrl}
          <button onClick={() => this.test8()}>Test</button>
          <button onClick={() => this.test9()}>Promise Test</button>
        </div>);
    }
}

CreateApp.propTypes = {
    getAuth: PropTypes.func.isRequired,
    promiseTest: PropTypes.func.isRequired,
    baseUrl: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        baseUrl: state.baseUrl
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);
