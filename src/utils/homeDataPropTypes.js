import PropTypes from 'prop-types';

const HomeDataPropTypes = PropTypes.shape({
    headerTopLinks: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    popularTopics: PropTypes.arrayOf(
        PropTypes.shape({
            query: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
});

export default HomeDataPropTypes;