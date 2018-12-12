import React from 'react'
import styled, { css } from 'styled-components'
import lunr from 'lunr'
import { Link } from "react-static";
import { getVersion } from 'utils/helpers'
import json from './index.json'
import corpus from './corpus.json'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { query: '', searchResults: [] }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.reset = this.reset.bind(this)
    this.search = this.search.bind(this)
    this.handleKeyChange = this.handleKeyChange.bind(this)
  }
  handleKeyChange(e) {
    this.props.onKeyUp(e)
    if(e.key === 'Enter'){
      this.search(e)
    }
  }
  buildDocuments() {
    const documents = corpus.reduce((memo, doc) => {
      memo[doc.id] = doc
      return memo
    }, {})
    return documents
  }

  handleInputChange({ target: { value } }) {
    this.setState({ query: value })
  }

  search(e) {
    e.preventDefault()
    const { query } = this.state
    const idx = lunr.Index.load(json)
    const results = idx.search(query)
    const documents = this.buildDocuments()
    const searchResults = results.map(result => documents[result.ref])
    //this.setState({ searchResults })
    this.props.onDataSearch(searchResults)
  }

  reset() {
    this.setState({ query: '' }, () => console.log(this.state));
  }

  render () {
    const { searchResults, query } = this.state
    return (
      <input
        {...this.props}
        type="search"
        value={query}
        name="query"
        onChange={this.handleInputChange}
        onKeyUp={this.handleKeyChange}
      >
          {/*<div className="query-error"></div>*/}
          {/*<div className="searchResults">
            <div>
              {
                searchResults.map(doc =>
                  <header key={doc.name}>
                    { console.log(doc) }
                    <Link to={{
                      pathname: `/${doc.id}`,
                      state: { query }
                    }}>
                      <h4>v.{getVersion(doc.id)}: {doc.name}</h4>
                    </Link>
                  </header>
                )
              }
            </div>
          </div>*/}
      </input>
    )
  }
}

export default Search
