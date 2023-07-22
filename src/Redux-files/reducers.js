const initialState = {
  tableData: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return {
        ...state,
        tableData: [...state.tableData, action.payload],
      };
    case "REMOVE_ROW":
      return {
        ...state,
        tableData: state.tableData.filter((row, index) => index !== action.payload),
      };
    case "UPDATE_CELL":
      return {
        ...state,
        tableData: state.tableData.map((row, index) =>
          index === action.payload.rowIndex
            ? { ...row, [action.payload.columnName]: action.payload.value }
            : row
        ),
      };
    default:
      return state;
  }
};

export default tableReducer;
