import React, { useState } from "react";
import MyModal from "./MyModal/MyModal.jsx";

const Table = ({
  headers,
  row_attributes,
  rows,
  buttons = [],
  updateRow,
  deleteRow,
  UpdateFromComponent,
}) => {
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div className="uk-overflow-auto">
      <table className="uk-table  uk-table-divider">
        <thead>
          <tr>
            <th></th>
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
                    onClick={() => button.action(row.id)}
                  >
                    {button.text}
                  </button>
                </td>
              ))}
              <td>
                <button
                  className={`uk-button uk-button-default uk-button-secondary`}
                  type="button"
                  onClick={() => setUpdateModal(true)}
                >
                  Update
                </button>
                <MyModal visible={updateModal} setVisible={setUpdateModal}>
                  <UpdateFromComponent
                    isCustomerWithId={true}
                    textSubmit="Update"
                    id={row.id}
                    action={updateRow}
                  />
                </MyModal>
              </td>
              <td>
                <button
                  className={`uk-button uk-button-default uk-button-danger`}
                  type="button"
                  onClick={() => deleteRow(row.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
