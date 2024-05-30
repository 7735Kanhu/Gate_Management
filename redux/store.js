// redux/store.js
import { createStore, combineReducers } from 'redux';
import gateReducer from './reducers/gateReducer';
import guardReducer from './reducers/guardReducer';

const rootReducer = combineReducers({
  gate: gateReducer,
  guard: guardReducer,
});

const store = createStore(rootReducer);

export default store;
