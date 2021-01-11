/**
 * Scroll the element into view.
 * @param elem The element to scroll in to view.
 * @param cb The callback to call when the scroll is complete.
 */
export function scrollIntoView(elem: HTMLElement, cb: () => void): void {
    const animate = (start: number, from: number, to: number, duration: number): void => {
        const time = Math.min(1, ((Date.now() - start) / duration));
        const eased = 0.5 * (1 - Math.cos(Math.PI * time));

        document.scrollingElement.scrollTop = (eased * (to - from)) + from;

        if (time < 1) {
            setTimeout(() => animate(start, from, to, duration), 0);
        } else if (cb) {
            cb();
        }
    };

    animate(Date.now(), document.scrollingElement.scrollTop, elem.offsetTop, 1000);
}

/**
 * Get the current scroll top position.
 * @returns The scroll top position.
 */
export function currentScrollTop(): number {
    return document.scrollingElement.scrollTop;
}
