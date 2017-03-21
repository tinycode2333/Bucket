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
        console.log(data);
        console.log(data.user);
        this.isLogin = data.isLogin;
        this.avatar = data.user.avatar;
        

    }

    onFindLoginFail(errorMessage) {
        this.isLogin = false;
        alert(errorMessage);
    }


}

export default alt.createStore(HeadStore);