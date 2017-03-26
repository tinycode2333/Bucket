import alt from '../alt';
import $ from 'jquery';

class PlanActions {
    constructor() {
        this.generateActions(
            'findGoalSuccess',
            'findGoalFail',
            'addGoalSuccess',
            'addGoalFail',
            'deleteGoalSuccess',
            'deleteGoalFail',
            'finishGoalSuccess',
            'finishGoalFail',
            'updateName',
            'updateReason',
            'invalidName'
        );
    }

    findGoal() {
        $.ajax({
            url: '/api/findGoal',
        })
        .done((data) => {
            this.findGoalSuccess(data);
        })
        .fail((jqXhr) => {
            this.findGoalFail(jqXhr.responseJSON.message);
        })
    }
    
    addGoal(name, reason) {
        $.ajax({
            type: 'POST',
            url: '/api/addGoal',
            data: {
                goalname: name,
                goalreason: reason
            }
        })
        .done((data) => {
            this.addGoalSuccess(data);
        })
        .fail((jqXhr) => {
            this.addGoalFail(jqXhr.responseJSON.message);
        })
    }

    deleteGoal(id) {
        $.ajax({
            type: 'POST',
            url: '/api/deleteGoal',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.deleteGoalSuccess(data);
        })
        .fail((jqXhr) => {
            this.deleteGoalFail(jqXhr.responseJSON.message);
        })
    }

    finishGoal(id) {
        $.ajax({
            type: 'POST',
            url: '/api/finishGoal',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.finishGoalSuccess(data);
        })
        .fail((jqXhr) => {
            this.finishGoalFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(PlanActions);