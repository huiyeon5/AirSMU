import React from 'react';
import Icon from '@material-ui/core/Icon';
import './AboutCard.css';

const AboutCard = ({icon, title, para, color, go}) => (
    <div className="col s12 l4 aboutcard" onClick={(e) => {
        e.preventDefault();
        document.getElementById(go).scrollIntoView({
            behavior: 'smooth'
        });
    }}>
        <div className={`card ${color}`}>
            <div className="card-content white-text">
                <span className="card-title" style={{display:`flex`, justifyContent:`center`, alignItems:`center`}}><Icon style={{marginRight:20}}>{icon}</Icon> {title}</span>
                <p style={{marginTop:20}}>{para}</p>
            </div>
        </div>
    </div>
)

export default AboutCard;