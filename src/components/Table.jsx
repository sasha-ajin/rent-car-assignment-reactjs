import React from "react";

const Table = ({ headers, row_attributes, rows, buttons }) => {
  return (
    <div className="uk-overflow-auto">
      <table className="uk-table  uk-table-divider">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              {row_attributes.map((row_attribute) => (
                <td key={row_attribute}>{row[row_attribute]}</td>
              ))}
              {buttons.map((button) => (
                <td key={button.text}>
                  <button
                    className={`uk-button uk-button-default uk-button-${button.type}`}
                    type="button"
                  >
                    {button.text}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
