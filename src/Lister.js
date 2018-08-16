import React from 'react';
import { connect } from "react-redux";
import constants from './store/constants';
import Footer from './Footer.js'


function Lister(props) {
    console.log('lister render', props)
    return (
        <div> 
            <h1>Lister</h1>
            <form onSubmit={props.submit}>
                <input value={props.inputText} 
                onChange={props.inputChange}/>
            </form>

            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}
                    onClick={() => props.itemDelete(index)}>{`${index + 1}.${item}`}</li>
                })}
            </ul>
            <Footer />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputText: state.inputText,
        items: state.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (evt) => {
            console.log('change',)
            const action = { type: constants.CHANGE_INPUT_TEXT, text: evt.target.value}
            dispatch(action)
        },

        submit: (evt) => {
            evt.preventDefault();
            console.log('submit')
            const action = {type: constants.ADD_ITEM};
            dispatch(action)
        },
        itemDelete: (index) => {
            console.log('delete', index)
            const action = {type: constants.DELETE_ITEM};
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Lister);