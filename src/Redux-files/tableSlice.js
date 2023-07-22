import { createSlice } from '@reduxjs/toolkit';

const initialRows = [
    { column1: 'Table Data', column2: 'Double Click to Edit' },
    { column1: 'Table Data', column2: 'Double Click to Edit' },
    // Add more initial rows as needed
  ];

const tableSlice = createSlice({
  name: 'table',
  initialState: initialRows,
  reducers: {
    addRow: (state, action) => {
      state.push(action.payload);
    },
    removeRow: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateCell: (state, action) => {
      const { rowIndex, columnName, value } = action.payload;
      state[rowIndex][columnName] = value;
    },
  },
});

export const { addRow, removeRow, updateCell } = tableSlice.actions;
export default tableSlice.reducer;
