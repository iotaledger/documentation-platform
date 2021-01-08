import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { constructHighlights, constructSearchQuery } from "../../../utils/search";
import { SearchResultProps } from "./SearchResultProps";

class SearchResult extends React.Component<SearchResultProps> {
    public render(): ReactNode {
        const res = this.props.foundResult.length > 0
            ? `Showing results ${this.props.indexStart + 1} to ${this.props.indexEnd + 1}.`
            : "";
        return (
            <div className="search-result">
                <div className="search-result__total">
                    {`${this.props.foundResult.length} documents found for "${this.props.query}". ${res}`}
                </div>
                {this.props.foundResult.slice(this.props.indexStart, this.props.indexEnd + 1).map(elm =>
                    (
                        <section key={elm.id} className="search-result__item">
                            <Link
                                to={`/${elm.id}?${constructSearchQuery(this.props.query)
                                    }&${constructHighlights(elm.matches)}`}
                            >
                                <div className="search-result-item__heading">{elm.title}</div>
                                <div className="search-result-item__link">{`/${elm.id}`}</div>
                            </Link>
                            <p className="text-paragraph">{elm.snippet}</p>
                        </section>
                    )
                )}
            </div>
        );
    }
}

export default SearchResult;
