import React, { Component, ReactNode } from "react";
import "./mapMarker.css";
import { MapMarkerProps } from "./MapMarkerProps";

/**
 * Component to display an event map marker.
 */
class MapMarker extends Component<MapMarkerProps> {
    public render(): ReactNode {
        return (
            <div className="map-marker" {...this.props}>
                {this.props.children}
            </div>
        );
    }
}

export default MapMarker;
