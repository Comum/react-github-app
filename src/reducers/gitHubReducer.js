import actions from '../actions';
import gitHub from '../actions/gitHubActions';

const initialState = {
    gitHubUserRequested: false,
    gitHubUser: {}
}

function reduceGitHubUserRquested(state) {
    return {
        ...state,
        gitHubUserRequested: true
    }
}

function reduceGitHubUserReceived(state, data) {
    return {
        gitHubUserRequested: false,
        gitHubUser: data
    }
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = initialState;
    }
    switch (action.type) {
        case gitHub.GITHUB_USER_REQUESTED:
            return reduceGitHubUserRquested(state);
        case gitHub.GITHUB_USER_RECEIVED:
            return reduceGitHubUserReceived(state, action.data);
        default:
            return state;
    }
}