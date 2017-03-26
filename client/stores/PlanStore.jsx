import alt from '../alt';
import PlanActions from '../actions/PlanActions';

class PlanStore {
    constructor () {
        this.bindActions(PlanActions);
        this.name = '';
        this.reason = '';
        this.goalList ={};
        this.helpBlock = '';
    }

    onAddGoalSuccess(data) {
        this.goallist = data.goals;
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
        this.reason = event.target.value;
        this.helpBlock = this.reason;
    }

    onInvalidName() {
        this.helpBlock = 'plase input the goalname';
    }

}

export default alt.createStore(PlanStore);