import React from 'react';
import ClickOutside from 'components/ClickOutside'

class Modal extends React.Component {
  render() {
    const { children, closeModal, show } = this.props;
    // Render nothing if the "show" prop is false
    if (!show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      display: 'flex',
      flexDirection: 'column'
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <ClickOutside onClickOutside={closeModal}>
          <div className="modal" style={modalStyle}>
            {children}
          </div>
        </ClickOutside>
      </div>
    );
  }
}

export default Modal;
