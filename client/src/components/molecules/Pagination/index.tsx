import classNames from "classnames";
import React, { ReactNode } from "react";
import { PaginationProps } from "./PaginationProps";
import { PaginationState } from "./PaginationState";

class Pagination extends React.Component<PaginationProps, PaginationState> {
    constructor(props: PaginationProps) {
        super(props);

        const maxPerPage = this.props.maxPerPage ?? 10;

        this.state = {
            maxPerPage,
            numberOfPages: Math.ceil(this.props.totalCount / maxPerPage),
            currentPage: props.page
        };
    }

    public componentDidUpdate(prevProps: PaginationProps): void {
        if (this.props.totalCount !== prevProps.totalCount) {
            this.setState({
                numberOfPages: Math.ceil(this.props.totalCount / this.state.maxPerPage),
                currentPage: 0
            });
        }
    }

    public render(): ReactNode {
        return this.state.numberOfPages > 1 ? (
            <ul className="pagination">
                {
                    [...new Array(this.state.numberOfPages)].map((_, index) => (
                        <li
                            key={index} className={
                            classNames(
                                "pagination-item",
                                { "pagination-item--selected": this.state.currentPage === index }
                            )
                        }
                        >
                            <a onClick={() => this.handleNext(index)}>
                                {index + 1}
                            </a>
                        </li>
                    ))
                }
            </ul>
        ) : null;
    }

    private handleNext(newIndex: number): void {
        if (this.props.onDataPaginated) {
            this.props.onDataPaginated(
                newIndex,
                newIndex * this.state.maxPerPage,
                Math.min(((newIndex + 1) * this.state.maxPerPage) - 1, this.props.totalCount - 1));
            this.setState({ currentPage: newIndex });
        }
    }
}

export default Pagination;
