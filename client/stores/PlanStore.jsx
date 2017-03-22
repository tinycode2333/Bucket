import alt from '../alt';
import PlanActions from '../actions/PlanActions';

class PlanStore {
    constructor () {
        this.bindActions(PlanActions);
        this.name = '';
        this.reason = '';
        this.goallist = {};
        this.helpBlock = '';
    }

    onAddGoalSuccess(data) {
        this.goallist = data.goallist;
        this.helpBlock = data.message;
    }

    onAddGoalFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.helpBlock = '';
    }

    onUpdateReason(event) {
        this.password = event.target.value;
        this.helpBlock = '';
    }

    onInvalidName() {
        this.helpBlock = 'plase input the goalname';
    }

}

export default alt.createStore(PlanStore);