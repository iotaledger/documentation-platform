import classnames from 'classnames';
import GoogleMapReact from 'google-map-react';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from '../../../assets/logo-small.svg';
import { sanitizeHashId } from '../../../utils/paths';
import './eventCard.css';
import MapMarker from '../../atoms/MapMarker';

/**
 * Component to display an event.
 */
class EventCard extends Component {
    static propTypes = {
        item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            startUtc: PropTypes.string.isRequired,
            urlDetails: PropTypes.string,
            venueName: PropTypes.string,
            venueAddress: PropTypes.arrayOf(PropTypes.string),
            venueLatitude: PropTypes.number,
            venueLongitude: PropTypes.number
        }).isRequired,
        googleMapsKey: PropTypes.string.isRequired

    };

    constructor(props) {
        super(props);

        this.state = {
            showMap: false
        };
    }

    render() {
        return (
            <div className="event-card">
                <h2 id={sanitizeHashId(this.props.item.title)} className="event-card--title">{this.props.item.title}</h2>
                <div className="event-card--date">{moment(this.props.item.startUtc).format('MMMM Do YYYY, h:mm a')}</div>
                <div className="event-card--description">{this.props.item.description}</div>
                <hr />
                <div className="event-card--venue">
                    {this.props.item.venueName && (
                        <div className="event-card--venue-name">{this.props.item.venueName}</div>
                    )}
                    {this.props.item.venueAddress && this.props.item.venueAddress.map((a, idx) => (
                        <div className="event-card--venue-address" key={idx}>{a}</div>
                    ))}
                </div>
                <div className="event-card--actions">
                    <a className="button button--secondary" href={this.props.item.urlDetails} target="_blank" role="button" rel="noreferrer noopener">More Details</a>
                </div>
                {this.props.item.venueLatitude && this.props.item.venueLongitude && (
                    <div className="event-card--map-container">
                        <a
                            className="event-card--map-toggle icon-up-down"
                            onClick={() => this.setState({ showMap: !this.state.showMap })}
                            role="button"
                        >{this.state.showMap ? 'Hide Map' : 'Show Map'}&nbsp;
                        </a>

                        <div
                            className={classnames(
                                'event-card--map',
                                { 'event-card--map__hidden': !this.state.showMap }
                            )}
                        >
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: this.props.googleMapsKey }}
                                defaultCenter={{
                                    lat: this.props.item.venueLatitude,
                                    lng: this.props.item.venueLongitude
                                }}
                                defaultZoom={14}
                            >
                                <MapMarker lat={this.props.item.venueLatitude} lng={this.props.item.venueLongitude}>
                                    <img src={logo} alt="IOTA" />
                                    {this.props.item.venueName}
                                </MapMarker>
                            </GoogleMapReact>
                        </div>
                    </div>
                )}
            </div>);
    }
}

export default EventCard;
