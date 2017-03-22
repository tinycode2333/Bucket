import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore {
    constructor () {
        this.bindActions(LoginActions);
        this.name = '';
        this.password = '';
        this.helpBlock = 'please input your message~';
    }

    onGetUserSuccess(successMessage) {
        alert(successMessage);
        window.location.href="http://localhost:3000/";
    }

    onGetUserFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.helpBlock = '';
    }

    onUpdatePassword(event) {
        this.password = event.target.value;
        this.helpBlock = '';
    }

    onInvalidName() {
        this.helpBlock = 'plase input the username';
    }

    onInvalidPassword() {
        this.helpBlock = 'plase input the password';
    }

}

export default alt.createStore(LoginStore);