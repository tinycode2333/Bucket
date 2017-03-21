import alt from '../alt';
import $ from 'jquery';

class LoginActions {
    constructor() {
        this.generateActions(
            'getUserSuccess',
            'getUserFail',
            'updateName',
            'updatePassword',
            'invalidName',
            'invalidPassword'

        );
    }
    
    getUser(name, password) {
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: {
                name: name,
                password: password
            }
        })
        .done((data) => {
            this.getUserSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.getUserFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(LoginActions);