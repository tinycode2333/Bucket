import alt from '../alt';
import HeadActions from '../actions/HeadActions';


class HeadStore {
    constructor () {
        this.bindActions(HeadActions);
        this.isLogin = false;
        this.username = '';
        this.avatar = '';
    }

    onFindLoginSuccess(data) {
        this.isLogin = data.isLogin;
        this.avatar = data.user.avatar;
        this.username = data.user.username;

    }

    onFindLoginFail(errorMessage) {
        this.isLogin = false;
        alert(errorMessage);
    }

    onLogoutSuccess(successMessage) {
        alert(successMessage);
        window.location.href="http://localhost:3000/";

    }

    onLogoutFail(errorMessage) {
        alert(errorMessage);
        window.location.href="http://localhost:3000/";
    }


}

export default alt.createStore(HeadStore);