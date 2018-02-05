import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="formWrapper">
                <form action="" className="formContainer">
                    <div className="formField">
                        <label htmlFor="userName" className="labelInlineField">User:</label>
                        <input type="text" name="userName" id="userName"/>
                    </div>
                    <div className="formField">
                        <input type="submit" valid="Search"/>
                    </div>
                </form>
                <div className="resultWrapper">
                    
                </div>
            </div>
        );
    }
}

export default Form;