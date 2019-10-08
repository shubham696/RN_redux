import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer  from './selectRequestedId';

export default combineReducers({
  libraries: libraryReducer,
  selectedId: selectionReducer
});
