import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// <Pagination value={this.state.currentPage} total={this.state.totalPages} onChange={(newPage) => this.setState({ currentPage: newPage})} />

class Pagination extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(newIndex) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(newIndex);
    }
  }

  render() {
    return (
      <ul class="pagination">
        ({
          Array.from(Array(this.props.total).keys()).map(p => (
            <li key={p} className={
              classNames(
                'pagination-item',
                { 'pagination-item--selected': (p + 1) === this.props.value }
              )
            }><a onClick={() => this.handleOnChange(p + 1)}>{p + 1}</a></li>
          ))
        })
      </ul>
    )
  }
}

export default Pagination;
