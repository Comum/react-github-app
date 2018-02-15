import React from 'react';

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.refs.userName.value);
    }

    render() {
        return (
            <div className="formWrapper">
                <form action="" className="formContainer" onSubmit={this.handleSubmit}>
                    <div className="formField">
                        <label htmlFor="userName" className="labelInlineField">User:</label>
                        <input type="text" name="userName" id="userName" ref="userName"/>
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