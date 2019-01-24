import qs from 'qs';

const QUERY_PARAM_NAME = 'q';
const QUERY_PARAM_HIGHLIGHTS = 'highlights';

export const performSearch = (history, query) => {
    history.push(`/search?${constructSearchQuery(query)}`);
};

export const constructSearchQuery = (query) => {
    return `${QUERY_PARAM_NAME}=${query.trim()}`;
};

export const extractSearchQuery = (location) => {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params && params[QUERY_PARAM_NAME] ? params[QUERY_PARAM_NAME] : '';
};

export const constructHighlights = (highlights) => {
    return `${QUERY_PARAM_HIGHLIGHTS}=${highlights.join(';')}`;
};

export const extractHighlights = (location) => {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params && params[QUERY_PARAM_HIGHLIGHTS] ? params[QUERY_PARAM_HIGHLIGHTS].split(';') : [];
};


export const initCorpusIndex = () => {
    const corpus = require('../searchData/corpus.json');
    const index = require('../searchData/index.json');

    const documents = corpus.reduce((memo, doc) => {
        memo[doc.id] = doc;
        return memo;
    }, {});
    
    return {
        documents,
        index
    };
};
