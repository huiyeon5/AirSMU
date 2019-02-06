import React from 'react'
import Icon from '@material-ui/core/Icon';
// import './materialize.min.js'
import M from 'materialize-css';
// import '../css/materialize.min.css';

class Header extends React.Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    }
    render() {
        return (
            <header className="navbar-fixed white" id="header">
                <nav className="nav-wrapper white" style={{boxShadow:`none`}}>
                    <div className="container" style={{height:`100%`}}>
                        <a href="#" className="brand-logo black-text">AirSMU</a>
                        <a href="#" className="sidenav-trigger valign-wrapper" data-target="mobile-menu">
                            <Icon style={{ fontSize: 30, color:`black` }} className="vertical-align">menu</Icon>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#" className="black-text">Home</a></li>
                            <li><a href="#" className="black-text">About</a></li>
                            <li><a href="#" className="black-text">Contact</a></li>
                        </ul>
                        <ul className="sidenav grey lighten-2" id="mobile-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
