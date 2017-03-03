import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './Register.css';

class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    // componentDidMount() {
    //     RegisterStore.listen(this.onChange);
    // }

    // componentWillUnmount() {
    //     RegisterStore.unlisten(this.onChange);
    // }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        var name = this.state.name;
        var password = this.state.password;
        var password2 = this.state.password2;
        console.log(this.state.name);
        console.log(this.state);
        console.log(password2);
        if (!name) {
            // AddCharacterActions.invalidName();
            this.refs.nameTextField.focus();
            this.state.helpBlock = "plase input the username";
        }

        if (!password || !password2) {
            // AddCharacterActions.invalidGender();
            // this.state.helpBlock = "plase input your password";
        }

        if (password != password2) {
            // AddCharacterActions.invalidGender();
            this.state.helpBlock = "两次密码不一致（别问我问什么写中文）";
        }
        
        if (name && password && password == password2) {
            // AddCharacterActions.addCharacter(name, gender);
            this.state.helpBlock = "success";
        }
        this.setState(this.state);
    }
    
    render() {
        console.log(this.state);
        return (
            <div className={styles.register}>
                <div className='panel panel-info'>
                    <div className='panel-heading'>注册用户</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className='form-group'>
                                <label >Name</label>
                                <input type='text' ref='nameTextField' value={this.state.name} autoFocus/>
                            </div>
                            <div className='form-group'>
                                <label >Password</label>
                                <input type='password' ref='passwordTextField' value={this.state.password} autoFocus/>
                            </div>
                            <div className='form-group'>
                                <label >Password Again</label>
                                <input type='password' ref='passwordTextField' value={this.state.password2} autoFocus/>
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Register;