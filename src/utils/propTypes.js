import PropTypes from 'prop-types';

export const ContentHomePagePropTypes = PropTypes.shape({
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
    ).isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
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