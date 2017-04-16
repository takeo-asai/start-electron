import Mastodon from 'mastodon-api';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';

class CreateApp extends React.Component {
    constructor(props) {
        super(props);
    }

    test8(e) {
        this.props.test();
    }

    render() {
        return <div>
        <h2>CreateApp</h2>
        <button onClick={(e) => this.test8(e)}>Test</button>
        </div>;
    }
}


function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApp);
