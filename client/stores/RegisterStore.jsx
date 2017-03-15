import alt from '../alt';
import RegisterActions from '../actions/RegisterActions';

class RegisterStore {
    constructor () {
        this.bindActions(RegisterActions);
        this.name = '';
        this.password = '';
        this.password2 = '';
        this.helpBlock = 'GO';
    }

    onAddUserSuccess(successMessage) {
        this.helpBlock = successMessage;
    }

    onAddUserFail(errorMessage) {
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

    onUpdatePassword2(event) {
        this.password2 = event.target.value;
        this.helpBlock = '';
    }

    onInvalidName() {
        this.helpBlock = 'plase input the username';
    }

    onInvalidPassword() {
        this.helpBlock = 'plase input the password twice';
    }

    onInvalidSamePassword() {
        this.helpBlock = "两次密码不一致（别问我问什么写中文）";
    }

}

export default alt.createStore(RegisterStore);