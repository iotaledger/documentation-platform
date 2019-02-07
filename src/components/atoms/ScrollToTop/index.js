import React from 'react';

const ScrollToTop  = () => {

    const onScrollToTop = () => {
        const target = document.querySelector('#root');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <button
            className='scroll-to-top'
            onClick={onScrollToTop}>
        </button>
    );
};

export default ScrollToTop;