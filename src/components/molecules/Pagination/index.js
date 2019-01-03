import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Pagination extends React.Component {
    static propTypes = {
        total: PropTypes.array.isRequired,
        maxPerPage: PropTypes.array,
        onDataPaginated: PropTypes.func,
    };

    constructor(props) {
        super(props);

        const maxPerPage = this.props.maxPerPage ? this.props.maxPerPage : 10;

        this.state = {
            maxPerPage,
            numberOfPages: Math.ceil(this.props.total.length / maxPerPage),
            currentPage: 0
        };

        this.handleNext = this.handleNext.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.total.length != prevProps.total.length) {
            this.setState({
                numberOfPages: Math.ceil(this.props.total.length / this.state.maxPerPage),
                currentPage: 0
            });
        }
    }

    handleNext(newIndex) {
        if (this.props.onDataPaginated) {
            this.props.onDataPaginated(
                newIndex * this.state.maxPerPage,
                Math.min(((newIndex + 1) * this.state.maxPerPage) - 1, this.props.total.length - 1));
            this.setState({ currentPage: newIndex });
        }
    }

    render() {
        return this.state.numberOfPages > 1 ? (
            <ul className="pagination">
                {
                    [...Array(this.state.numberOfPages)].map((p, index) => (
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
        ) : null;
    }
}

export default Pagination;
