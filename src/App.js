import React from 'react';
import * as BS from 'react-bootstrap'
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            val: '',
            loading: false
        }
    }

    static defaultProps = {
        val1: '',
        val2: 0,
        val3: false
    }

    render() {
        let { val1, val2, val3 } = this.props;
        let {val, loading} = this.state
        return (
            <BS.Jumbotron>
                <h1>{val1}</h1>
            </BS.Jumbotron>
        );
    }
}

App.propTypes = {
    val1: PropTypes.string,
    val2: PropTypes.number,
    val3: PropTypes.bool,
}

export default App;
