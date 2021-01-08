import React, { ReactNode } from "react";

class ScrollToTop extends React.PureComponent {
    public render(): ReactNode {
        return (
            <button
                type="button"
                className="scroll-to-top"
                onClick={() => this.handleScrollToTop()}
            />
        );
    }

    private handleScrollToTop(): void {
        const target = document.querySelector("#root");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

export default ScrollToTop;
