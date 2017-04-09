import alt from '../alt';
import SportActions from '../actions/SportActions';

class SportStore {
    constructor () {
        this.bindActions(SportActions);
        this.name = '';
        this.reason = '';
        this.sportList = [];
        this.helpBlock = '';
    }

    onFindSportSuccess(data) {
        this.sportList = data.sports;
    }

    onFindSportFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onAddSportSuccess(data) {
        this.sportList = data.sports;
        this.helpBlock = data.message;
    }

    onAddSportFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onDeleteSportSuccess(data) {
        this.sportList = data.sports;
        this.helpBlock = data.message;
    }

    onDeleteSportFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onFinishSportSuccess(data) {
        this.sportList = data.sports;
        this.helpBlock = data.message;
    }

    onFinishSportFail(errorMessage) {
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
        this.helpBlock = 'plase input the sportname';
    }

}

export default alt.createStore(SportStore);