import classNames from "classnames";
import React, { ReactNode } from "react";
import { TableProps } from "./TableProps";

class Table extends React.Component<TableProps> {
    public render(): ReactNode {
        return (
            <table>
                <thead>
                    <tr>
                        {this.props.headers.map((header, headerIdx) => (
                            <th
                                key={headerIdx}
                                className={
                                    classNames(
                                        { "table-head-row-item--center": header.align === "center" },
                                        { "table-head-row-item--right": header.align === "right" }
                                    )
                                }
                            >{header.content}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {this.props.rows.map((row, rowIdx) => (
                        <tr key={rowIdx}>
                            {row.map((rowItem, rowItemIdx) => (
                                <React.Fragment key={rowItemIdx}>
                                    {rowItem.isHeader && (
                                        <th
                                            className={
                                                classNames(
                                                    { "table-body-row-item--center": rowItem.align === "center" },
                                                    { "table-body-row-item--right": rowItem.align === "right" }
                                                )
                                            }
                                        >{rowItem.content}
                                        </th>
                                    )}
                                    {!rowItem.isHeader && (
                                        <td
                                            className={
                                                classNames(
                                                    { "table-body-row-item--center": rowItem.align === "center" },
                                                    { "table-body-row-item--right": rowItem.align === "right" }
                                                )
                                            }
                                        >{rowItem.content}
                                        </td>
                                    )}
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;
