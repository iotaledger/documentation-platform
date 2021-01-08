import React, { ReactNode } from "react";
import { ScrollInContainerProps } from "./ScrollInContainerProps";

class ScrollInContainer extends React.Component<ScrollInContainerProps> {
    private _thisRef?: HTMLDivElement;

    private _lastRelativeTop?: number;

    public componentDidMount(): void {
        document.addEventListener("scroll", () => this.handleScroll());
        window.addEventListener("resize", () => this.handleResize());

        this.handleScroll();
    }

    public componentWillUnmount(): void {
        document.removeEventListener("scroll", () => this.handleScroll());
        window.removeEventListener("resize", () => this.handleResize());
    }

    public render(): ReactNode {
        return (
            <div ref={r => this.setRef(r)}>
                {this.props.children}
            </div>
        );
    }

    private setRef(ref: HTMLDivElement): void {
        this._thisRef = ref;
        this.handleScroll();
    }

    private handleResize(): void {
        this.handleScroll();
    }

    private handleScroll(): void {
        if (this._thisRef) {
            const parentDom = this._thisRef.parentElement;

            const thisRect = this._thisRef.getBoundingClientRect();
            const parentRect = parentDom.getBoundingClientRect();

            const computedParent = getComputedStyle(parentDom);

            const topOffset = this.props.topOffset ?? 0;
            const bottomOffset = this.props.bottomOffset ?? 100;

            if (parentRect.top < 0) {
                const newRelativeTop = -parentRect.top + topOffset;
                if (this._lastRelativeTop === undefined) {
                    this._lastRelativeTop = newRelativeTop;
                }

                const thisHeight = thisRect.height + bottomOffset;

                let fixBottom = false;
                if (thisHeight + this._lastRelativeTop >= parentRect.height) {
                    fixBottom = true;
                }

                this._lastRelativeTop = Math.floor(newRelativeTop);

                if (fixBottom) {
                    this._thisRef.style.top = `${parentRect.height - thisHeight}px`;
                    this._thisRef.style.position = "relative";
                    this._thisRef.style.width = "auto";
                } else {
                    const parentTopPadding = Number.parseInt(computedParent.paddingTop, 10);
                    const parentLeftPadding = Number.parseInt(computedParent.paddingLeft, 10);
                    const parentRightPadding = Number.parseInt(computedParent.paddingRight, 10);

                    this._thisRef.style.top = `${parentTopPadding + topOffset}px`;
                    this._thisRef.style.position = "fixed";
                    this._thisRef.style.width = `${parentRect.width - parentLeftPadding - parentRightPadding}px`;
                }
            } else {
                this._thisRef.style.top = `${topOffset}px`;
                this._thisRef.style.position = "relative";
                this._thisRef.style.width = "auto";
            }
        }
    }
}

export default ScrollInContainer;
