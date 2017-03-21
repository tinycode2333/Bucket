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
        var formData = new FormData();
        formData.append('avatar', $("#avatar")[0].files[0]);
        formData.append('name', name);
        formData.append('password', password);
        formData.append('password2', password2);
        $.ajax({
            type: 'POST',
            url: '/api/signup',
            data: formData,
            processData : false,
            contentType : false
        })
        .done((data) => {
            this.addUserSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.addUserFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(RegisterActions);