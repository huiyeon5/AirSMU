import React from 'react';

class Review extends React.Component {
    render() {
        return (
            <section className="container section">
                {this.props.postList ? this.props.postList.map((node, i) => (
                    <div key={i}>{node.university}</div>
                )) : null}
            </section>
        );
    }
}


export default Review

