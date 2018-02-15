import fetch from 'cross-fetch';

import gitHubActions from './gitHubActions';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

const requestedGitHubUser = createAction(gitHubActions.GITHUB_USER_REQUESTED);
const receivedGitHubUser = createAction(gitHubActions.GITHUB_USER_RECEIVED);
export const getGitHubUser = (user) => {
    return dispatch => {
        dispatch(requestedGitHubUser());
        return fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(json => dispatch(receivedGitHubUser(json)))
    }
}