import PropTypes from 'prop-types';

const ContentMenuItemsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        folder: PropTypes.string,
        link: PropTypes.string.isRequired
    })
);

export default ContentMenuItemsPropTypes;