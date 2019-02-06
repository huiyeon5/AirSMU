import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
import About from '../components/About'

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: null,
            countryList: {},
        }
    }

    componentDidMount() {
        const posts = this.props.data.allMarkdownRemark.edges;
        let postList = []
        let countryList = {}
        // let uniList = []
        posts.forEach(post => {
            postList.push(post.node.frontmatter)
            countryList[post.node.frontmatter.country] = null;
            // uniList.push(post.node.frontmatter.university)
        })
        this.setState({
            countryList:countryList,
            postList:postList,
            // uniList:uniList
        }, () => console.log(this.state) )

    }
    render() {
        return (
            <div>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <Header />
                <SearchBar 
                    countryList={this.state.countryList} 
                    postList={this.state.postList}
                />
                <About />
            </div>
        );
    }
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            author
            path
            country
            university
          }
        }
      }
    }
}`