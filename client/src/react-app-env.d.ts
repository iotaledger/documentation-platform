declare module "*.svg" {
    import * as React from "react";

    // eslint-disable-next-line @typescript-eslint/naming-convention
    export const ReactComponent: React.FunctionComponent<React.SVGProps<
      SVGSVGElement
    > & { title?: string }>;

    const src: string;
    export default src;
  }
