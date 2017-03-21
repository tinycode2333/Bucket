import alt from '../alt';
import $ from 'jquery';

class HeadActions {
    constructor() {
        this.generateActions(
            'findLoginSuccess',
            'findLoginFail'

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
}

export default alt.createActions(HeadActions);