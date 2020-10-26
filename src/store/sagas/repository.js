import { actionChannel, take, call, put } from 'redux-saga/effects';
import api from '../services/api';
import getRealm from '../services/realm';
import Creators from '../actions';

function* fetchRepository({ input }) {
  try {
    const {data} = yield call(api.get, `/repos/${input}`);
    yield put(Creators.saveRepository(data));
    yield put(Creators.updateStatus('GET_REPOSITORY_SUCCESS'));
  } catch (error) {
    console.log('api error: ', error);
    yield put(Creators.updateStatus('GET_REPOSITORY_FAIL'));
  }
}

function* saveRepository({ newRepository }) {
  const data = {
    id: newRepository.id,
    name: newRepository.name,
    fullName: newRepository.full_name,
    description: newRepository.description,
    stars: newRepository.stargazers_count,
    forks: newRepository.forks_count,
  };
  const realm = yield call(getRealm);
  realm.write(() => {
    realm.create('Repository', data, 'modified');
  });
  yield put(Creators.loadRepositories());
}

function* loadRepositories() {
  const realm = yield call(getRealm);
  const repositories = realm.objects('Repository').sorted('stars', true);
  yield put(Creators.updateRegister({repositories}));
}

function* deleteRepositories() {
  const realm = yield call(getRealm);
  realm.write(() => {
    const data = realm.objects('Repository');
    realm.delete(data);
  });
  yield put(Creators.loadRepositories());
}

function* repository() {
  const channel = yield actionChannel([
    'FETCH_REPOSITORY',
    'LOAD_REPOSITORIES',
    'SAVE_REPOSITORY',
    'DELETE_REPOSITORIES',
  ]);

  while (true) {
    const action = yield take(channel);
    switch (action.type) {
      case 'FETCH_REPOSITORY':
        yield call(fetchRepository, action);
        break;
      case 'LOAD_REPOSITORIES':
        yield call(loadRepositories);
        break;
      case 'SAVE_REPOSITORY':
        yield call(saveRepository, action);
        break;
      case 'DELETE_REPOSITORIES':
        yield call(deleteRepositories);
        break;
    }
  }
}

export default repository;
