import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-static';
import { constructSearchQuery } from '../../../utils/search';

class SearchResult extends React.Component {
    static propTypes = {
        foundResult: PropTypes.array,
        indexStart: PropTypes.number,
        indexEnd: PropTypes.number,
        query: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const res = this.props.foundResult.length > 0 ? `Showing results ${this.props.indexStart + 1} to ${this.props.indexEnd + 1}.` : '';
        return (
            <div className="search-result">
                <div className="search-result__total">{`${this.props.foundResult.length} documents found for "${this.props.query}". ${res}`}</div>
                {this.props.foundResult.slice(this.props.indexStart, this.props.indexEnd + 1).map(elm =>
                    (<section key={elm.id} className="search-result__item">
                        <Link to={`/${elm.id}?${constructSearchQuery(this.props.query)}`} exact className="search-result-item__heading">{elm.name}</Link>
                        <p className="text-paragraph">{elm.summary}</p>
                        <Link to={`/${elm.id}?${constructSearchQuery(this.props.query)}`} exact className="search-result-item__link">
                            {`/${elm.id}`}
                        </Link>
                    </section>)
                )}
            </div>
        );
    }
}

export default SearchResult;
