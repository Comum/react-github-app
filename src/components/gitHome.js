import React from 'react';

import Header from './header.js';
import Form from './form.js';

class GitHome extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <Header />
                <Form {...this.props} />
            </div>
        );
    }
}

export default GitHome;