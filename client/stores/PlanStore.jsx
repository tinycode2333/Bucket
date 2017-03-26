import alt from '../alt';
import PlanActions from '../actions/PlanActions';

class PlanStore {
    constructor () {
        this.bindActions(PlanActions);
        this.name = '';
        this.reason = '';
        this.goalList = [];
        this.helpBlock = '';
    }

    onFindGoalSuccess(data) {
        this.goalList = data.goals;
    }

    onFindGoalFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onAddGoalSuccess(data) {
        this.goalList = data.goals;
        this.helpBlock = data.message;
    }

    onAddGoalFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onDeleteGoalSuccess(data) {
        this.goalList = data.goals;
        this.helpBlock = data.message;
    }

    onDeleteGoalFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onFinishGoalSuccess(data) {
        this.goalList = data.goals;
        this.helpBlock = data.message;
    }

    onFinishGoalFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.helpBlock = '';
    }

    onUpdateReason(event) {
        this.reason = event.target.value;
        this.helpBlock = '';
    }

    onInvalidName() {
        this.helpBlock = 'plase input the goalname';
    }

}

export default alt.createStore(PlanStore);