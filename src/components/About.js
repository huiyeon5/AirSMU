import React from 'react';
import AboutCard from './AboutCard';

const About = () => (
    <div className="container">
        <div className="row" style={{marginTop:50}}>
            <h2 className="center-align orange-text text-darken-1">This is what we do.</h2>
        </div>
        <div className="row" style={{marginTop:50}}>
            <AboutCard icon="library_books" title="Read Reviews" para="Read about the reviews which the seniors left about the University and Country they visited. Read about the experience, food, transport and much more!" color="teal lighten-1" go="header"/>
            <AboutCard icon="border_color" title="Write Reviews" para="Write about your Unique Experience in the Host University and Country and let juniors know what to expect! Tips, hacks and know hows are welcome!" color="blue darken-1"/>
            <AboutCard icon="flight_takeoff" title="Fly Away!" para="Read and learn about the life at the hosting university, plan your trip with the knowledge gained from this website! Share the experience after your exchange!" color="pink lighten-1" go="header"/>
        </div>
    </div>
)

export default About;