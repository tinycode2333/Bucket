import alt from '../alt';
import $ from 'jquery';

class PlanActions {
    constructor() {
        this.generateActions(
            'addGoalSuccess',
            'addGoalFail',
            'updateName',
            'updateReason',
            'invalidName'
        );
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
}

export default alt.createActions(PlanActions);