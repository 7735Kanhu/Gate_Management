// redux/reducers/guardReducer.js
const initialState = {
    guardAssignments: [],
  };
  
  const guardReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ASSIGN_GUARD':
        return {
          ...state,
          guardAssignments: [...state.guardAssignments, action.payload],
        };
      case 'DELETE_GUARD_ASSIGNMENT':
        return {
          ...state,
          guardAssignments: state.guardAssignments.filter(assignment => assignment.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default guardReducer;
  