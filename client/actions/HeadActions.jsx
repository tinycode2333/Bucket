import alt from '../alt';
import $ from 'jquery';

class HeadActions {
    constructor() {
        this.generateActions(
            'findLoginSuccess',
            'findLoginFail',
            'logoutSuccess',
            'logoutFail'

        );
    }
    
    findLogin() {
        $.ajax({
            url: '/api/isLogin',
        })
        .done((data) => {
            this.findLoginSuccess(data);
        })
        .fail((jqXhr) => {
            this.findLoginFail(jqXhr.responseJSON.message);
        })
    }

    logout() {
        $.ajax({
            url: '/api/logout',
        })
        .done((data) => {
            this.logoutSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.logoutFail(jqXhr.responseJSON.message);
        })
    }

}

export default alt.createActions(HeadActions);