const INITIAL_STATE = {
    status: '',
    repositories: undefined,
};

function repository(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_STATUS':
        return {
            ...state,
            status: action.status,
        };
        case 'UPDATE_REGISTER':
        return {
            ...state,
            ...action.item,
        };
        default:
        return state;
    }
}

export default repository;