import { connect } from 'react-redux';

import { getGitHubUser } from '../actions';
import GitHome from '../components/GitHome';

const stateToProps = state => {
    return {
        gitHub: state.gitHub
    };
}

const dispatchToProps = dispatch => {
    return {
        onSubmitUserForm: (...args) => {
            dispatch(getGitHubUser(...args))
        }
    };
}

const GitHomeContainer = connect(stateToProps, dispatchToProps)(GitHome);

export default GitHomeContainer;