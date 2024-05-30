// redux/reducers/gateReducer.js
const initialState = {
    gates: [],
  };
  
  const gateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_GATE':
        return {
          ...state,
          gates: [...state.gates, action.payload],
        };
      case 'DELETE_GATE':
        return {
          ...state,
          gates: state.gates.filter(gate => gate.id !== action.payload),
        };
      case 'UPDATE_GATE':
        return {
          ...state,
          gates: state.gates.map(gate =>
            gate.id === action.payload.id ? action.payload : gate
          ),
        };
      default:
        return state;
    }
  };
  
  export default gateReducer;
  