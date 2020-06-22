import PropTypes from 'prop-types';

const FoundationDataPropTypes = PropTypes.shape({
    footerSections: PropTypes.shape({
        label: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                heading: PropTypes.string.isRequired,
                links: PropTypes.arrayOf(
                    PropTypes.shape({
                        link: PropTypes.string.isRequired,
                        name: PropTypes.string.isRequired
                    })
                ).isRequired
            })
        ).isRequired
    }),
    registeredAddress: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    visitingAddress: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    information: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        urls: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })
        )
    }),
});

export default FoundationDataPropTypes;