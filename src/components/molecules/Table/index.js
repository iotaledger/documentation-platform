import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// const tbHeaders = [
//   { content: "Left"},
//   { content: "Center", align: "center" },
//   { content: "Right", align: "right" }
// ];

// const tbRows = [
//   [
//     { content: "Left", isHeader: true },
//     { content: "Center2", align: "center" },
//     { content: "Right3", align: "right" }
//   ],
//   [
//     { content: "Left4", isHeader: true },
//     { content: "Center5", align: "center" },
//     { content: "Right6", align: "right" }
//   ]
// ];

// <Table headers={tbHeaders} rows={tbRows} />

class Table extends React.Component {
  static propTypes = {
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]).isRequired,
        align: PropTypes.oneOf(['left', 'center', 'right'])
      })),
    rows: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
          ]).isRequired,
          isHeader: PropTypes.bool,
          align: PropTypes.oneOf(['left', 'center', 'right'])
        })))
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((header, headerIdx) => (
              <th
                key={headerIdx}
                className={
                  classNames(
                    { 'table-head-row-item--center': header.align === "center" },
                    { 'table-head-row-item--right': header.align === "right" }
                  )
                }>{header.content}</th>
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
                          { 'table-body-row-item--center': rowItem.align === "center" },
                          { 'table-body-row-item--right': rowItem.align === "right" }
                        )
                      }>{rowItem.content}</th>
                  )}
                  {!rowItem.isHeader && (
                    <td
                      className={
                        classNames(
                          { 'table-body-row-item--center': rowItem.align === "center" },
                          { 'table-body-row-item--right': rowItem.align === "right" }
                        )
                      }>{rowItem.content}</td>
                  )}
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Table;
