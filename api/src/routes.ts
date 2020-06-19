import { IRoute } from "./models/app/IRoute";

export const routes: IRoute[] = [
    {
        path: "/",
        method: "get",
        inline: async () => {
            // tslint:disable-next-line: no-require-imports
            const packageJson = require("../package.json");
            return {
                name: packageJson.name,
                version: packageJson.version
            };
        }
    },
    { path: "/init", method: "get", func: "init" },
    { path: "/email", method: "post", func: "emailCreate" },
    { path: "/feedback", method: "post", func: "feedbackCreate" },
    { path: "/feedback", method: "get", func: "feedbackList", dataResponse: true },
    { path: "/missing", method: "post", func: "missingCreate" },
    { path: "/missing", method: "get", func: "missingList", dataResponse: true },
    { path: "/search", method: "get", func: "search" }

];
