import React, { useReducer } from "react"
import Alertreducer from "./alertReducer"
import Alertcontext from "./alertContext";

/**
 * @description - provides inital state values in the beginning
 */

const Alertstate = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(Alertreducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT',
            })
        }, 3000)
    }

    return <Alertcontext.Provider
        value={{
            alert: state,
            setAlert
        }}>
        {props.children}

    </Alertcontext.Provider>
}

export default Alertstate;
