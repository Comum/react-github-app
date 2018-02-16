import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="resultWrapper">
                {this.props.gitHub.gitHubUserReceived &&
                    <ul className="resultsList">
                        <li className="resultsItem">{this.props.gitHub.gitHubUser.login}</li>
                        <li className="resultsItem">Name: {this.props.gitHub.gitHubUser.name}</li>
                        <li className="resultsItem">Location: {this.props.gitHub.gitHubUser.location}</li>
                        <li className="resultsItem">Public Repos: {this.props.gitHub.gitHubUser.public_repos}</li>
                        <li className="resultsItem--img resultsItem--img">
                            <img src={this.props.gitHub.gitHubUser.avatar_url} alt="avatar" className="resultsImg"/>
                        </li>
                    </ul>
                }
            </div>
        )
    }
}

export default Result;