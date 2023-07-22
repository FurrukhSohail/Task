import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addRow, removeRow, updateCell } from '../Redux-files/tableSlice';
import './Tasks.css'

const EditableTable = ({ tableData, addRow, removeRow, updateCell }) => {
  const [editableRowIndex, setEditableRowIndex] = useState(null);

  const handleAddRow = () => {
    addRow({});
  };

  const handleRemoveRow = (index) => {
    removeRow(index);
    setEditableRowIndex(null); 
  };

  const handleCellDoubleClick = (index) => {
    setEditableRowIndex(index);
  };

  const handleCellChange = (event, rowIndex, columnName) => {
    const { value } = event.target;
    updateCell({ rowIndex, columnName, value });
  };

  return (
    <div>
      <h2 className='heading'>Task 1</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Add more columns as needed */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td onDoubleClick={() => handleCellDoubleClick(index)}>
                {editableRowIndex === index ? (
                  <input
                    type="text"
                    placeholder='Enter Data'
                    value={row.column1 || ''}
                    onChange={(e) => handleCellChange(e, index, 'column1')}
                  />
                ) : (
                  row.column1
                )}
              </td>
              <td onDoubleClick={() => handleCellDoubleClick(index)}>
                {editableRowIndex === index ? (
                  <input
                    type="text"
                    placeholder='Enter Data'
                    value={row.column2 || ''}
                    onChange={(e) => handleCellChange(e, index, 'column2')}
                  />
                ) : (
                  row.column2
                )}
              </td>
              {/* Add more columns as needed */}
              <td>
                <button className='removebtn' onClick={() => handleRemoveRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tableData: state.table,
});

const mapDispatchToProps = {
  addRow,
  removeRow,
  updateCell,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditableTable);
