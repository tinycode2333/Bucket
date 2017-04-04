import alt from '../alt';
import $ from 'jquery';

class SportActions {
    constructor() {
        this.generateActions(
            'findSportSuccess',
            'findSportFail',
            'addSportSuccess',
            'addSportFail',
            'deleteSportSuccess',
            'deleteSportFail',
            'finishSportSuccess',
            'finishSportFail',
            'updateName',
            'updateReason',
            'invalidName'
        );
    }

    findSport() {
        $.ajax({
            url: '/api/findSport',
        })
        .done((data) => {
            this.findSportSuccess(data);
        })
        .fail((jqXhr) => {
            this.findSportFail(jqXhr.responseJSON.message);
        })
    }
    
    addSport(name, reason) {
        $.ajax({
            type: 'POST',
            url: '/api/addSport',
            data: {
                sportname: name,
                sportreason: reason
            }
        })
        .done((data) => {
            this.addSportSuccess(data);
        })
        .fail((jqXhr) => {
            this.addSportFail(jqXhr.responseJSON.message);
        })
    }

    deleteSport(id) {
        $.ajax({
            type: 'POST',
            url: '/api/deleteSport',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.deleteSportSuccess(data);
        })
        .fail((jqXhr) => {
            this.deleteSportFail(jqXhr.responseJSON.message);
        })
    }

    finishSport(id) {
        $.ajax({
            type: 'POST',
            url: '/api/finishSport',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.finishSportSuccess(data);
        })
        .fail((jqXhr) => {
            this.finishSportFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(SportActions);