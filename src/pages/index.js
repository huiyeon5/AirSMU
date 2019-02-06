import React from 'react';
import {navigate} from 'gatsby';

class Landing extends React.Component {
    render() {
        return (
            <div style={{width:`100vw`, height:`100vh`, background:`transparent`, position:`relative`}}>
                <img src={require("../images/background.jpg")} style={{position:`absolute`, width:`100%`, height:`100%`, zIndex:-1}} alt=""/>
                <div className="container" style={{height:`100%`, width:`100%`,  position:`relative`}}>
                    <div className="row">
                        <div className="col s12 l6" style={{display:`flex`, flexDirection:`column`, justifyContent:`space-between`, alignItems:`center`, position:`absolute`, top:`50%`, transform:`translate(0%,-50%)`}}>
                            <img src={require("../images/AirSMU Logo.png")} style={{width:`70%`,maxWidth:`500px`, height:`auto`}} alt=""/>
                            <h1 style={{color:`white`, fontSize:25, textAlign:`center`}}>Having trouble finding information about Exchange?</h1>
                            <p style={{color:`white`, textAlign:`center`}}>Visit our website, write about your experience and read about what people has to say about their experience!</p>
                            <button className="btn waves-effect waves-light btn-large" style={{width:`100%`,textAlign:`center`}} onClick={() => navigate("/app")}>Get Started!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing