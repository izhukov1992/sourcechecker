import { RESOURCES_GET_ALL, RESOURCES_CHECK } from '../constants';

const initialState = {
    resources: []
};

export default function resourcesReducer(state = initialState, action) {
    switch (action.type) {
        case RESOURCES_GET_ALL:
            return Object.assign({}, state, {
                resources: action.resources
            });
        default:
            return state;
    }
}

