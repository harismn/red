import React from 'react';
import { connect } from 'react-redux';

function Footer(props) {
    console.log('footer render', props)
    return (
            <footer>
                Total count: {props.count}
            </footer>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps render', state)
    return {
        count: state.items.length
    };
}

export default connect(mapStateToProps)(Footer);