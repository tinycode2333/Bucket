import alt from '../alt';
import $ from 'jquery';

class EmotionActions {
    constructor() {
        this.generateActions(
            'addEmotionSuccess',
            'addEmotionFail',
            'updateName',
            'updateReason',
            'invalidName'
        );
    }
    
    addEmotion(name, reason) {
        $.ajax({
            type: 'POST',
            url: '/api/addEmotion',
            data: {
                emotionname: name,
                emotionreason: reason
            }
        })
        .done((data) => {
            this.addEmotionSuccess(data);
        })
        .fail((jqXhr) => {
            this.addEmotionFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(EmotionActions);