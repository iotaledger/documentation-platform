export const scrollIntoView = (elem) => {
    // https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;

    const scrollObject = isIE || isEdge ? document.body : document.documentElement;

    const animate = (start, from, to, duration) => {
        const time = Math.min(1, ((Date.now() - start) / duration));
        const eased = 0.5 * (1 - Math.cos(Math.PI * time));
  
        scrollObject.scrollTop = (eased * (to - from)) + from;

        if (time < 1) {
            setTimeout(() => animate(start, from , to, duration), 0);
        }
    };

    animate(Date.now(), scrollObject.scrollTop, elem.offsetTop, 1000);
};