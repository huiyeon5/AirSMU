import React from 'react';

const SearchBarOptions = ({label, options, depend, onChange}) => {
    const sel = <option value="None">-- Select Country --</option>
    const norm = <option className="white-text" value="" disabled selected style={{color:`white`}}>-- Choose your option --</option>
    return (<div className="input-field col s12 searchBarOptions" >
        <select className="white-text"  style={{color:`white`}} onChange={onChange ? onChange : null}>
            {depend ? options.length === 0 ? sel : norm : norm }
            {/* <option className="white-text" value="" disabled selected style={{color:`white`}}>Choose your option</option> */}
            {depend ? options.length === 0 ? null : <option className="white-text" value="none" style={{color:`white`}} selected>See All Universities</option> : <option className="white-text" value="" style={{color:`white`}}>See All</option>}
            {depend ? options.length !== 0 ? options.map((opt, i) => {
                return <option value={opt} key={i}>{opt}</option>
            }) :null: options.map((opt, i) => {
                return <option value={opt} key={i}>{opt}</option>
            })}
        </select>
        <label>{label}</label>
    </div>
    );
}

export default SearchBarOptions