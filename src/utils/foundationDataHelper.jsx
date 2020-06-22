import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Class to help with foundation data.
 */
export class FoundationDataHelper {
    /**
     * The location of the foundation data.
     */
    FOUNDATION_DATA_URL = 'https://webassets.iota.org/data/foundation.json';

    /**
     * Cached version of the data.
     */
    static _foundationData;

    /**
     * Load the found data.
     * @returns The loaded foundation data.
     */
    static async loadData() {
        if (!FoundationDataHelper._foundationData) {
            try {
                const foundationDataResponse = await fetch(FoundationDataHelper.FOUNDATION_DATA_URL);
                FoundationDataHelper._foundationData = await foundationDataResponse.json();
            } catch (err) {
                console.error(`Failed loading foundation data from ${FoundationDataHelper.FOUNDATION_DATA_URL}`);
            }
        }

        return FoundationDataHelper._foundationData;
    }

    /**
     * Create the display for a value.
     * @param info The information to display.
     * @param key The key of the item.
     * @returns The element to display.
     */
    static createValue(info, key) {
        // tslint:disable: react-no-dangerous-html
        return (
            <React.Fragment key={key}>
                {info.label && (
                    <span
                        className="data-label"
                        dangerouslySetInnerHTML={
                            { __html: FoundationDataHelper.buildLines(info.label) }
                        }
                    />
                )}
                {info.value && (
                    <span
                        className="data-value"
                        dangerouslySetInnerHTML={
                            { __html: FoundationDataHelper.buildLines(info.value) }
                        }
                    />
                )}
                {info.urls && info.urls.map((link, idx) => (
                    <React.Fragment key={idx}>
                        {FoundationDataHelper.buildLink(link.url, link.label)}
                        {info.urls && idx < info.urls.length - 1 && ', '}
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }

    /**
     * Build lines to display.
     * @param content The content to display.
     * @returns The element to display.
     */
    static buildLines(content) {
        if (Array.isArray(content)) {
            return `<span className="line-breaks">${content.join('\n')}</span>`;
        }

        return content;
    }

    /**
     * Build link as either local or external.
     * @param url The url to create.
     * @param value The label for the link.
     * @param key The key of the item.
     * @returns The created link element.
     */
    static buildLink(url, value, key) {
        if (url.startsWith('http') || url.startsWith('mailto')) {
            return (
                <a
                    className="data-link"
                    href={url}
                    key={key}
                    target="_blank"
                    rel="noopener noreferrer"
                    dangerouslySetInnerHTML={
                        { __html: FoundationDataHelper.buildLines(value) }
                    }
                />
            );
        }

        return (
            <Link
                className="data-link"
                key={key}
                to={url.replace('local:/', '')}
                dangerouslySetInnerHTML={
                    { __html: FoundationDataHelper.buildLines(value) }
                }
            />
        );
    }
}
