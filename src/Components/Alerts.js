import React from 'react'

function Alert(props) {
    return (
        // props.alert && <div className="alert alert-primary alert-dismissible fade show" role="alert">
        props.alert && <div className={`alert alert-${props.alert.type === 'Success' ? 'primary' : 'danger'} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}


export default Alert