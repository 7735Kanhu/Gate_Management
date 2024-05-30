// redux/actions/gateActions.js
export const addGate = (gate) => {
    return {
      type: 'ADD_GATE',
      payload: gate,
    };
  };
  
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
      default:
        return state;
    }
  };
  
  export default gateReducer;
  