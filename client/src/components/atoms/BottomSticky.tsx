import React, { ReactNode } from "react";
import { BottomStickyProps } from "./BottomStickyProps";

class BottomSticky extends React.PureComponent<BottomStickyProps> {
    private _thisRef: HTMLDivElement;

    public componentDidMount(): void {
        document.addEventListener("scroll", () => this.handleBottomStop());
        window.addEventListener("resize", () => this.handleBottomStop());

        // We must set the initial position on next redraw cycle
        // otherwise the component gets the initial position
        // wrong based on the parent bottom until first scroll
        setTimeout(() => this.handleBottomStop(), 0);
    }

    public componentWillUnmount(): void {
        document.removeEventListener("scroll", () => this.handleBottomStop());
        window.removeEventListener("resize", () => this.handleBottomStop());
    }

    public render(): ReactNode {
        const style = {
            position: "fixed",
            opacity: "0",
            bottom: `${this.props.bottomOffset ?? 20}px`,
            left: this.props.horizontalAlign === "left" ? `${this.props.horizontalOffset || 20}px` : undefined,
            right: this.props.horizontalAlign === "right" ? `${this.props.horizontalOffset || 20}px` : undefined,
            zIndex: this.props.zIndex
        };

        return (
            <div style={style as unknown} ref={r => this.setRef(r)}>
                {this.props.children}
            </div>
        );
    }

    private setRef(ref: HTMLDivElement): void {
        this._thisRef = ref;
        this.handleBottomStop();
    }

    private handleBottomStop(): void {
        if (this._thisRef) {
            const parentDom = this._thisRef.parentElement;

            const parentRect = parentDom.getBoundingClientRect();

            if (window.innerHeight - parentRect.bottom > 0) {
                this._thisRef.style.bottom =
                    `${Math.abs(window.innerHeight - parentRect.bottom) + (this.props.bottomOffset ?? 20)}px`;
            } else {
                this._thisRef.style.bottom = `${this.props.bottomOffset ?? 20}px`;
            }

            this._thisRef.style.opacity = "1";
        }
    }
}

export default BottomSticky;

