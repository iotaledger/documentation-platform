import PropTypes from 'prop-types';
import React from 'react';

class InputSearch extends React.Component {
    static propTypes = {
        query: PropTypes.string,
        onSearch: PropTypes.func,
        onKeyUp: PropTypes.func,
        className: PropTypes.string,
        placeholder: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = { query: this.props.query === undefined ? '' : this.props.query };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.reset = this.reset.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.query != prevProps.query) {
            this.setState({
                query: this.props.query === undefined ? '' : this.props.query
            });
        }
    }

    handleKeyChange(e) {
        this.props.onKeyUp(e);
        if (e.key === 'Enter') {
            if (this.props.onSearch) {
                this.props.onSearch(this.state.query);
            }
        }
    }

    handleInputChange({ target: { value } }) {
        this.setState({ query: value });
    }

    reset() {
        this.setState({ query: '' });
    }

    render() {
        const { query } = this.state;
        return (
            <input
                className={this.props.className}
                placeholder={this.props.placeholder}
                type="search"
                autoComplete="off"
                value={query}
                name="query"
                onChange={this.handleInputChange}
                onKeyUp={this.handleKeyChange}
            >
            </input>
        );
    }
}

export default InputSearch;
