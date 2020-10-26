import { markActionsOffline } from 'redux-offline-queue';

const Creators = {
  fetchRepository: (input) => {
    return {type: 'FETCH_REPOSITORY', input};
  },

  loadRepositories: () => {
    return {type: 'LOAD_REPOSITORIES'};
  },

  saveRepository: (newRepository) => {
    return {type: 'SAVE_REPOSITORY', newRepository};
  },

  deleteRepositories: () => {
    return {type: 'DELETE_REPOSITORIES'};
  },

  updateStatus: (status) => {
    return {type: 'UPDATE_STATUS', status};
  },

  updateRegister: (item) => {
    return {type: 'UPDATE_REGISTER', item};
  },
};

markActionsOffline(Creators, ['fetchRepository', 'deleteRepositories']);

export default Creators;