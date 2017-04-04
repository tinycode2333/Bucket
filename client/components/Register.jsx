import React, {Component} from 'react';
import RegisterStore from '../stores/RegisterStore';
import RegisterActions from '../actions/RegisterActions'
import classNames from 'classnames';
import styles from './Register.css';

class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = RegisterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        RegisterStore.listen(this.onChange);
    }

    componentWillUnmount() {
        RegisterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        var name = this.state.name;
        var password = this.state.password;
        var password2 = this.state.password2;
        var avatar = this.state.avatar;

        if (!name) {
            RegisterActions.invalidName();
            this.refs.nameTextField.focus();
        } else if (!password || !password2) {
            RegisterActions.invalidPassword();
        } else if (password != password2) {
            RegisterActions.invalidSamePassword();
        } else if (!avatar) {
            RegisterActions.invalidAvatar();
        }

        if (name && password && password == password2 && avatar) {
            RegisterActions.addUser(name, password, password2, avatar);
            this.state.helpBlock = "success";
        }
    }
    
    render() {
        return (
            <div className={styles.register}>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>注册用户</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)} >
                            <div className='field required'>
                                <label >Name</label>
                                <input type='text' ref='nameTextField' value={this.state.name} onChange={RegisterActions.updateName} autoFocus/>
                            </div>
                            <div className='field required'>
                                <label >Password</label>
                                <input type='password'  value={this.state.password} onChange={RegisterActions.updatePassword}/>
                            </div>
                            <div className='field required'>
                                <label >Password Again</label>
                                <input type='password'  value={this.state.password2} onChange={RegisterActions.updatePassword2}/>
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