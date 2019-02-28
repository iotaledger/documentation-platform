import qs from 'qs';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { feed } from '../../../utils/api';
import EventCard from '../../molecules/EventCard';
import Pagination from '../../molecules/Pagination';
import { scrollIntoView } from '../../../utils/scroll';

class Feed extends React.Component {
    static propTypes = {
        apiEndpoint: PropTypes.string.isRequired,
        googleMapsKey: PropTypes.string,
        displayType: PropTypes.string.isRequired,
        context: PropTypes.string.isRequired,
        onLoaded: PropTypes.func,
        history: ReactRouterPropTypes.history
    };

    constructor(props) {
        super(props);

        let paramPage = 0;
        if (props.history.location.search) {
            const params = qs.parse(props.history.location.search, { ignoreQueryPrefix: true });
            if (params && params.page) {
                paramPage = parseInt(params.page, 10) - 1;
            }
        }

        this.state = {
            status: '',
            items: [],
            initialHash: props.history.location.hash,
            page: paramPage,
            pageSize: 10,
            totalPages: 0,
            totalItems: 0
        };

        this.onDataPaginated = this.onDataPaginated.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    async componentDidMount() {
        await this.loadData();
    }

    loadData() {
        const target = document.querySelector('#root');
        if (target) {
            scrollIntoView(target);
        }

        this.setState({ 
            status: 'Retreiving, please wait...',
            items: [],
            totalPages: 0,
            totalItems: 0
        }, async () => {
            if (this.props.onLoaded) {
                this.props.onLoaded(0);
            }
            this.updatePageUrl();

            const response = await feed(this.props.apiEndpoint, this.props.context, this.state.page, this.state.pageSize);

            if (response.success) {
                this.setState({
                    items: response.items,
                    status: '',
                    totalPages: response.totalPages,
                    totalItems: response.totalItems
                }, () => {
                    if (this.props.onLoaded) {
                        this.props.onLoaded(response.totalItems);
                    }
                    this.updatePageUrl();
                    if (this.state.initialHash) {
                        const target = document.querySelector(this.state.initialHash);
                        if (target) {
                            scrollIntoView(target);
                        }
                    }
                });
            } else {
                this.setState({
                    items: [],
                    status: 'Failed loading feed',
                    totalPages: 0,
                    totalItems: 0
                });
            }
        });
    }

    onDataPaginated(pageIndex) {
        this.setState({
            initialHash: '',
            page: pageIndex
        }, async () => {
            await this.loadData();
        });
    }

    updatePageUrl() {
        let url = this.props.history.location.pathname;
        if (this.state.page > 0) {
            url += `?page=${this.state.page + 1}`;
        }
        if (this.state.initialHash) {
            url += this.state.initialHash;
        }

        this.props.history.replace(url);
    }

    render() {
        return (
            <React.Fragment>
                {this.state.status}
                {this.state.items.map((item, idx) =>
                    this.props.displayType === 'events' && <EventCard item={item} key={idx} googleMapsKey={this.props.googleMapsKey} />
                )}
                {this.state.totalPages > 0 && (
                    <Pagination totalCount={this.state.totalItems} page={this.state.page} maxPerPage={this.state.pageSize} onDataPaginated={this.onDataPaginated} />
                )}
            </React.Fragment>
        );
    }
}

export default Feed;
