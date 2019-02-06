import React from 'react';
import {navigate} from 'gatsby';
import M from 'materialize-css';
import './searchBar.css';
import Icon from '@material-ui/core/Icon';

class SearchBar extends React.Component {
    componentDidMount() {
        var option = {
            data: this.props.countryList
        }
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        var el = document.querySelectorAll(".tabs")
        M.Tabs.init(el);
        var els = document.querySelectorAll(".autocomplete")
        M.Autocomplete.init(els,option);
        // console.log(this.props);
    }
    
    componentDidUpdate() {
        var option = {
            data: this.props.countryList
        }
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        var el = document.querySelectorAll(".tabs")
        M.Tabs.init(el);    
        var els = document.querySelectorAll(".autocomplete")
        var instance = M.Autocomplete.init(els,option);
        console.log(document.querySelector("#autocomplete-input").value);
    }

    handleClick = e => {
        e.preventDefault();
        var val = document.querySelector("#autocomplete-input").value;
        if(val in this.props.countryList) {
            navigate(`/search`, { state : { selectedCountry: val, postList: this.props.postList }})
        } else {
            document.querySelector("#autocomplete-input").style.borderColor = 'red'
        }
    }

    render() {
        return (
            <div style={{width:`calc(100vw - (100vw - 100%))`, position:`relative`, paddingTop:20}}>
                <div>
                    <img className="MainImg" src={require("../images/main.jpg")} alt="" style={{position:`absolute`, top:0, left:0, width:`100%`, height:`100%`, objectFit:`cover`,zIndex:-1}} />
                    <div className="mainimagediv"></div>
                </div>
                <section className="container section searchsection" style={{padding:`14.5px 0px`, zIndex:10}}>
                        <div className="row" style={{margin:0, padding:0}}>
                            <div className="col s12 l12 center-align" style={{padding:0}}>
                                <h3 className="white-text">Going Exchange?</h3>
                            </div>
                        </div>
                        <div className="row" style={{paddingRight:0}}>
                            <ul className="tabs col s12 l12 transparent">
                                <li className="tab col s6 l5">
                                    <a href="#fromsmu" className="white-text">From SMU</a>
                                </li>
                                <li className="tab col s6 l5 offset-l2 right">
                                    <a href="#tosmu" className="white-text">To SMU:</a>
                                </li>
                            </ul>
                            <div id="fromsmu" style={{marginTop:20}}>
                                <div className="input-field col s12 l12 center-align" style={{position:`relative`, top:60}}>
                                    <input type="text" id="autocomplete-input" className="autocomplete" style={{border:`1px solid white`, borderRadius:50, background:`white`, maxWidth:600, color:`black`, paddingLeft:30, boxSizing:`border-box`, boxShadow:`0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)`}} placeholder="Where do you want to go?" onInput={(e) => console.log(e.target.value)}/>
                                </div>
                            </div>
                            <div id="tosmu" style={{marginTop:20}}>
                                {/* <SearchBarOptions label="Departing Country: " options={["Option 1","Option 2","Option 3"]}/>
                                <SearchBarOptions label="Departing University: " options={["Option 1","Option 2","Option 3"]}/> */}
                            </div>
                        </div>
                        <div className="row" style={{marginTop:80}}>
                            <div className="col s12 l3 right">
                                <button className="btn waves-effect waves-light btn-large" style={{width:`100%`, position:`relative`}} onClick={this.handleClick}>
                                    <span style={{position:`absolute`, top:`50%`, left:`40%`, transform:`translate(-50%,-50%)`}}>Search Reviews</span>
                                    <Icon className="right">send</Icon> 
                                </button>
                            </div>
                        </div>
                </section>
            </div>
        );
    }
}

export default SearchBar