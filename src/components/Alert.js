import React, { useContext } from 'react'
import Alertcontext from '../context/alert/alertContext'

/**
 * @author - tunCode
 */

const Alert = () => {

    const { alert } = useContext(Alertcontext);
    return (
        alert !== null && (
            <div className="container my-2">
                <div className={`alert alert-${alert.type} alert-dismissible fade show`}>
                    {alert.msg}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    )
}

export default Alert;
