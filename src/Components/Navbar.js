import React from 'react'
import PropTypes from 'prop-types'

// passing properties as props
export default function Navbar(props) {
    return (
        <div className="App">
            {/* <nav className={`navbar navbar-expand-lg navbar-light bg-light`}> */}
            {/* <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'black' ? 'black' : '#C8C8C8', color: props.mode === 'black' ? 'white' : 'black' }}> */}

            {/* Adding javascipt inside {} with ternary operator */}
            <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'dark' ? 'dark' : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#C8C8C8' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.about}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary" type="submit">Search</button>
                        </form>
                        <div className="form-check form-switch my-2 mx-4">
                            <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'dark' ? 'white' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.setModeName}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Setting proptypes and other properties
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// Setting default value for no errors
Navbar.defaultProps = {
    title: "Title",
    about: "About text"
}
