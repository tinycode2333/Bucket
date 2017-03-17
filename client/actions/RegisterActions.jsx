import alt from '../alt';
import $ from 'jquery';

class RegisterActions {
    constructor() {
        this.generateActions(
            'addUserSuccess',
            'addUserFail',
            'updateName',
            'updatePassword',
            'updatePassword2',
            'updateAvatar',
            'invalidName',
            'invalidPassword',
            'invalidSamePassword',
            'invalidAvatar'

        );
    }
    
    addUser(name, password, password2, avatar) {
        $.ajax({
            type: 'POST',
            url: '/api/signup',
            data: {
                 name: name,
                 password: password,
                 password2: password2,
                 avatar: avatar
            }
        })
        .done((data) => {
            this.actions.addUserSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.actions.addUserFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(RegisterActions);