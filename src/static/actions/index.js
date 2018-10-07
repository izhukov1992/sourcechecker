import { RESOURCES_GET_ALL, RESOURCES_CHECK } from '../constants';

export function receiveResourcesFull(resources) {
    return {
        type: RESOURCES_GET_ALL,
        resources
    };
}

export function receiveCheckedResource(resource) {
    return {
        type: RESOURCES_CHECK,
        resource
    };
}

export function getResources() {
    return (dispatch) => {
        fetch('api/v1/resource/', {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                response.json().then(json => {
                    dispatch(receiveResourcesFull(json.results));
                    json.results.map((resource) => dispatch(checkResource(resource.id)));
                })
            }
            else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).catch((error) => {
            // this.addToast(error.message); TODO action to show toast
        });
    }
}

export function checkResource(pk) {
    return (dispatch) => {
        fetch('api/v1/resource/' + pk + '/check/', {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                response.json().then(json => {
                    dispatch(receiveCheckedResource(json));
                })
            }
            else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        }).catch((error) => {
            // this.addToast(error.message); TODO action to show toast
        });
    }
}