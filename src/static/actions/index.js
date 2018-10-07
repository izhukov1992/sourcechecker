import { RESOURCES_GET_ALL } from '../constants';

export function receiveResourcesFull(resources) {
    return {
        type: RESOURCES_GET_ALL,
        resources
    };
}

export function getResources() {
    return (dispatch) => {
        fetch('api/v1/resources/', {
            method: 'GET'
        }).then((response) => {
            if (response.ok) {
                response.json().then(json => {
                    dispatch(receiveResourcesFull(json));
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
