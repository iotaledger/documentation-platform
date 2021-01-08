import classNames from "classnames";
import React, { ReactNode } from "react";
import "./index.css";
import { VersionPickerProps } from "./VersionPickerProps";

class VersionPicker extends React.Component<VersionPickerProps> {
    public render(): ReactNode {
        const { versions, currentVersion } = this.props;
        return versions.length > 1
            ? (
                <div className="version-picker__wrapper">
                    <div className="version-picker">
                        <div className="left-column" />
                        <div className="middle-column">
                            <div className={classNames(
                                "version-picker__current",
                                { "version-picker__not-current": currentVersion !== versions[versions.length - 1] }
                            )}
                            >
                                {
                                    `${currentVersion === versions[versions.length - 1]
                                        ? "You are viewing the latest version of this documentation"
                                        : "There are newer versions of this documentation available"}`
                                }
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="version-picker-select__wrapper">
                                <select
                                    className="version-picker__select"
                                    value={currentVersion}
                                    onChange={e => this.props.onChange(e.target.value)}
                                >
                                    {versions.map((version, indx) => (
                                        <option key={indx} value={version} >Version {version}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null;
    }
}

export default VersionPicker;
