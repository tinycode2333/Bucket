import alt from '../alt';
import $ from 'jquery';

class WorkActions {
    constructor() {
        this.generateActions(
            'findToDoSuccess',
            'findToDoFail',
            'addToDoSuccess',
            'addToDoFail',
            'deleteToDoSuccess',
            'deleteToDoFail',
            'finishToDoSuccess',
            'finishToDoFail',
            'updateName',
            'updateCount',
            'invalidName'
        );
    }

    findToDo() {
        $.ajax({
            url: '/api/findToDo',
        })
        .done((data) => {
            this.findToDoSuccess(data);
        })
        .fail((jqXhr) => {
            this.findToDoFail(jqXhr.responseJSON.message);
        })
    }
    
    addToDo(name) {
        $.ajax({
            type: 'POST',
            url: '/api/addToDo',
            data: {
                workname: name
            }
        })
        .done((data) => {
            this.addToDoSuccess(data);
        })
        .fail((jqXhr) => {
            this.addToDoFail(jqXhr.responseJSON.message);
        })
    }

    deleteToDo(id) {
        $.ajax({
            type: 'POST',
            url: '/api/deleteToDo',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.deleteToDoSuccess(data);
        })
        .fail((jqXhr) => {
            this.deleteToDoFail(jqXhr.responseJSON.message);
        })
    }

    finishToDo(id) {
        $.ajax({
            type: 'POST',
            url: '/api/finishToDo',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.finishToDoSuccess(data);
        })
        .fail((jqXhr) => {
            this.finishToDoFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(WorkActions);