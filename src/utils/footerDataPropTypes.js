import PropTypes from 'prop-types';

const FooterDataPropTypes = PropTypes.shape({
    footerDocsSectionTitle: PropTypes.string.isRequired,
    footerSections: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    link: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired
                })
            ).isRequired
        })
    ).isRequired,
    footerStaticContent: PropTypes.shape({
        address: PropTypes.arrayOf(PropTypes.string).isRequired,
        legal: PropTypes.arrayOf(PropTypes.string).isRequired,
        copyright: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
});

export default FooterDataPropTypes;