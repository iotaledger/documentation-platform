import PropTypes from 'prop-types';

const ViewDataPropTypes = PropTypes.shape({
    siteName: PropTypes.string.isRequired,
    enableFeedback: PropTypes.bool,
    enableSignup: PropTypes.bool,
    disableSearch: PropTypes.bool
});

export default ViewDataPropTypes;