import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Component to display a message box.
 */
class MessageBox extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        title: PropTypes.string,
        content: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            showMap: false
        };
    }

    render() {
        return (
            <div
                className={classnames(
                    'message-box',
                    { 'message-box__success': this.props.type === 'success' },
                    { 'message-box__danger': this.props.type === 'danger' },
                    { 'message-box__info': this.props.type === 'info' },
                    { 'message-box__warning': this.props.type === 'warning' }
                )}
            >
                <div className="message-box--icon"></div>
                <div className="message-box--text">
                    {this.props.title && (
                        <div className="message-box--title">{this.props.title}</div>
                    )}
                    {this.props.content && (
                        <div className="message-box--content">
                            {this.props.content.split('\n').map((a, idx) => (
                                <React.Fragment key={idx}>
                                    {a}<br />
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                </div>
            </div>);
    }
}

export default MessageBox;
