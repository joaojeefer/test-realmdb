import { all, spawn } from 'redux-saga/effects';
import repository from './repository';
import watchNetworkConnection from './offline';

function* sagas() {
  yield all([spawn(watchNetworkConnection), repository()]);
}

export default sagas;