import React from 'react'
import PropTypes from 'prop-types'
import darkMode from './images/dark_mode.png'
import lightMode from './images/light_mode.png'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.item1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{props.item2}</Link>
                            </li>
                        </ul>

                        {/* Theme */}
                        <div className="theme">
                            {/* <img src={props.mode === 'dark' ? { darkMode } : { lightMode }} alt="" /> */}
                        </div>

                        {/*Search*/}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.proptype = {
    mode: PropTypes.string,
    title: PropTypes.string,
    item1: PropTypes.string,
    item2: PropTypes.string
}