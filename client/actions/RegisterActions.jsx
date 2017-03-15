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
            'invalidName',
            'invalidPassword',
            'invalidSamePassword'

        );
    }
    
    addUser(name, password, password2) {
        $.ajax({
            type: 'POST',
            url: '/api/addCustomer',
            data: {
                 name: name,
                 password: password,
                 password2: password2
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