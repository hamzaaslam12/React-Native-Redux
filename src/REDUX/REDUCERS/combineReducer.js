import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    root: counterReducer
});
