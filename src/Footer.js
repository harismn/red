import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
    return (
        <Footer>
            Total count: {props.count}
        </Footer>
    )
}

function mapStateToProps(state) {
    return {
        count: state.items.length
    };
}

export default connect(mapStateToProps)(Footer);