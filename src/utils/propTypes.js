import PropTypes from 'prop-types';

export const HomeDataPropTypes = PropTypes.shape({
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

export const FooterDataPropTypes = PropTypes.shape({
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

export const ViewDataPropTypes = PropTypes.shape({
    siteName: PropTypes.string.isRequired,
    enableFeedback: PropTypes.bool.isRequired,
    enableSignup: PropTypes.bool.isRequired
});

export const ProjectsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        folder: PropTypes.string.isRequired,
        home: PropTypes.shape({
            description: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired
                })
            ).isRequired
        }),
        versions: PropTypes.arrayOf(
            PropTypes.shape({
                version: PropTypes.string.isRequired,
                pages: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        link: PropTypes.string.isRequired,
                        toc: PropTypes.arrayOf(
                            PropTypes.shape({
                                level: PropTypes.number.isRequired,
                                name: PropTypes.string.isRequired
                            })
                        )
                    })
                ).isRequired
            })
        ).isRequired
    }));

export const ContentMenuItemsPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        folder: PropTypes.string,
        link: PropTypes.string.isRequired
    })
);