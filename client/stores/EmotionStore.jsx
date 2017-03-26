import alt from '../alt';
import EmotionActions from '../actions/EmotionActions';

class EmotionStore {
    constructor () {
        this.bindActions(EmotionActions);
        this.name = '';
        this.reason = '';
        this.helpBlock = '';
    }

    onAddEmotionSuccess(data) {
        this.helpBlock = data.message;
    }

    onAddEmotionFail(errorMessage) {
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
        this.helpBlock = 'plase input your emotion';
    }

}

export default alt.createStore(EmotionStore);