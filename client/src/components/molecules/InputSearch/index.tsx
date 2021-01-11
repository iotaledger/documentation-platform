import React, { ReactNode } from "react";
import { InputSearchProps } from "./InputSearchProps";
import { InputSearchState } from "./InputSearchState";

class InputSearch extends React.Component<InputSearchProps, InputSearchState> {
    constructor(props: InputSearchProps) {
        super(props);

        this.state = {
            query: this.props.query === undefined ? "" : this.props.query
        };
    }

    public componentDidUpdate(prevProps: InputSearchProps): void {
        if (this.props.query !== prevProps.query) {
            this.setState({
                query: this.props.query === undefined ? "" : this.props.query
            });
        }
    }

    public render(): ReactNode {
        const { query } = this.state;
        return (
            <input
                className={this.props.className}
                placeholder={this.props.placeholder}
                type="search"
                autoComplete="off"
                value={query}
                name="query"
                onChange={e => this.setState({ query: e.target.value })}
                onKeyUp={e => this.handleKeyChange(e)}
            />
        );
    }

    private handleKeyChange(e: React.KeyboardEvent): void {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
        if (e.key === "Enter" && this.props.onSearch) {
            this.props.onSearch(this.state.query);
        }
    }
}

export default InputSearch;
