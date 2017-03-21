import React, {Component} from 'react';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions'
import classNames from 'classnames';
import styles from './Login.css';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        var name = this.state.name;
        var password = this.state.password;
        if (!name) {
            LoginActions.invalidName();
            this.refs.nameTextField.focus();
        } else if (!password) {
            LoginActions.invalidPassword();
        } 

        if (name && password) {
            LoginActions.getUser(name, password);
        }
    }
    
    render() {
        return (
            <div className={styles.login}>
                <div className='panel panel-info'>
                    <div className='panel-heading'>用户登录</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className='field required'>
                                <label >Name</label>
                                <input type='text' ref='nameTextField' value={this.state.name} onChange={LoginActions.updateName} autoFocus/>
                            </div>
                            <div className='field required'>
                                <label >Password</label>
                                <input type='password'  value={this.state.password} onChange={LoginActions.updatePassword}/>
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

export default Login;