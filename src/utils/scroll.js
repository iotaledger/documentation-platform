export const scrollIntoView = (elem, cb) => {
    const animate = (start, from, to, duration) => {
        const time = Math.min(1, ((Date.now() - start) / duration));
        const eased = 0.5 * (1 - Math.cos(Math.PI * time));
  
        document.scrollingElement.scrollTop = (eased * (to - from)) + from;

        if (time < 1) {
            setTimeout(() => animate(start, from , to, duration), 0);
        } else if (cb) {
            cb();
        }
    };

    animate(Date.now(), document.scrollingElement.scrollTop, elem.offsetTop, 1000);
};

export const currentScrollTop = () => {
    return document.scrollingElement.scrollTop;
};