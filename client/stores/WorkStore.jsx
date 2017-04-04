import alt from '../alt';
import WorkActions from '../actions/WorkActions';

class WorkStore {
    constructor () {
        this.bindActions(WorkActions);
        this.name = '';
        this.toDoList = [];
        this.count = 25*60*1000;
        this.helpBlock = '';
    }

    onFindToDoSuccess(data) {
        this.toDoList = data.works;
    }

    onFindToDoFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onAddToDoSuccess(data) {
        this.toDoList = data.works;
        this.helpBlock = data.message;
    }

    onAddToDoFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onDeleteToDoSuccess(data) {
        this.toDoList = data.works;
        this.helpBlock = data.message;
    }

    onDeleteToDoFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onFinishToDoSuccess(data) {
        this.toDoList = data.works;
        this.helpBlock = data.message;
    }

    onFinishToDoFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.helpBlock = '';
    }

    onInvalidName() {
        this.helpBlock = 'plase input the workname';
    }

    onUpdateCount(newCount) {
        this.count = newCount;
        console.log(newCount);
    }
}

export default alt.createStore(WorkStore);