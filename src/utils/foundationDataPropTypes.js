import PropTypes from 'prop-types';

const FoundationDataPropTypes = PropTypes.shape({
    footerSections: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired
                })
            ).isRequired
        })
    ),
    registeredAddress: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    visitingAddress: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    information: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string,
            urls: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    url: PropTypes.string.isRequired
                })
            )
        })
    ),
});

export default FoundationDataPropTypes;