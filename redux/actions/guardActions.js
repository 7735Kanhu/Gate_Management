// redux/actions/guardActions.js
export const assignGuard = (guardAssignment) => {
    return {
      type: 'ASSIGN_GUARD',
      payload: guardAssignment,
    };
  };
  
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
      default:
        return state;
    }
  };
  
  export default guardReducer;
  