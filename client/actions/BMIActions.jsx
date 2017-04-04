import alt from '../alt';
import $ from 'jquery';

class BMIActions {
    constructor() {
        this.generateActions(
            'findBMISuccess',
            'findBMIFail',
            'updateBMISuccess',
            'updateBMIFail',
            'updateHeight',
            'updateWeight',
            'invalidHeight',
            'invalidWeight'

        );
    }
    
    findBMI() {
        $.ajax({
            url: '/api/findBMI',
        })
        .done((data) => {
            this.findBMISuccess(data);
        })
        .fail((jqXhr) => {
            this.findBMIFail(jqXhr.responseJSON.message);
        })
    }

    updateBMI(height, weight) {
        $.ajax({
            type: 'POST',
            url: '/api/updateBMI',
            data: {
                height: height,
                weight: weight
            }
        })
        .done((data) => {
            this.updateBMISuccess(data.message);
        })
        .fail((jqXhr) => {
            this.updateBMIFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(BMIActions);