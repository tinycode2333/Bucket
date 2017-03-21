import alt from '../alt';
import RegisterActions from '../actions/RegisterActions';

class RegisterStore {
    constructor () {
        this.bindActions(RegisterActions);
        this.name = '';
        this.password = '';
        this.password2 = '';
        this.avatar = undefined;
        this.helpBlock = 'please input your message~';
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

    onUpdateAvatar(event) {
        this.avatar = event.target.value;
        this.helpBlock = '头像加载成功';
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

    onInvalidAvatar() {
        this.helpBlock = "你头像呢";
    }

}

export default alt.createStore(RegisterStore);