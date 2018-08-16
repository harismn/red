import React from 'react';
import { connect } from "react-redux";

function InputMirror(props) {
    return (
        <div>
            <input value={props.inputValue} onChange={props.inputChange}/>
            <p>{props.inputValue}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        inputChange: (evt) => {
            console.log('ketika di input');
            const action = {type: 'INPUT_CHANGE', text:evt.target.value}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops) (InputMirror);