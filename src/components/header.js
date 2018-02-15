import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <div className="headerImage">
                    <img src="./assets/react.png" alt="react" class="headerImgElement"/>
                </div>
                <div className="headerText">React Git App</div>
            </div>
        );
    }
}

export default Header;