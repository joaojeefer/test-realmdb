import { combineReducers } from 'redux';
import { reducer as offline } from 'redux-offline-queue';
import repository from './repository';

const reducer = combineReducers({
  offline,
  repository,
});

export default reducer;
