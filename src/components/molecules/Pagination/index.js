import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// <Pagination value={this.state.currentPage} total={this.state.totalPages} onChange={(newPage) => this.setState({ currentPage: newPage})} />

class Pagination extends React.Component {
  static propTypes = {
    total: PropTypes.array.isRequired,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props)
    this.state = {
      maxPerPage: 10,
      nbrPage: 1,
      currentPage: 0
    }
    this.handleNext = this.handleNext.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.total.length !== prevProps.total.length && this.props.total.length) {
      //console.log(this.props.total.length / this.state.maxPerPage)
      this.setState({
        nbrPage: Math.floor(this.props.total.length / this.state.maxPerPage)
      })
    }
  }
  handleNext(newIndex) {
    if (this.props.onDataPaginated) {
      //onChange(newIndex);
      this.props.onDataPaginated(newIndex * this.state.maxPerPage , newIndex * this.state.maxPerPage + this.state.maxPerPage)
      this.setState({ currentPage: newIndex })
    }
  }

  render() {
    return (
      <ul className="pagination">
        {
          [...Array(this.state.nbrPage)].map((p, index) => (
            <li key={index} className={
              classNames(
                'pagination-item',
                { 'pagination-item--selected': this.state.currentPage === index }
              )
            }>
              <a onClick={() => this.handleNext(index)}>
                {index + 1}
              </a>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Pagination;
