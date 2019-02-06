import React from 'react';
import Header from '../components/header'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniList:[]
        }
    }

    componentDidMount() {
        const count = this.props.location.state.selectedCountry;
        const postList = this.props.location.state.postList;
        var uniList = []
        postList.forEach(post => {
            if(post.country === count) {
                uniList.push(post.university);
            }
        })

        this.setState({uniList});
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.uniList.map((uni, i) => (
                    <h2 key={i}>{uni}</h2>
                ))}
            </div>
        )
    }
}

export default Search;