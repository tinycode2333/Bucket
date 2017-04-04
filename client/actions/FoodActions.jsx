import alt from '../alt';
import $ from 'jquery';

class FoodActions {
    constructor() {
        this.generateActions(
            'findFoodSuccess',
            'findFoodFail',
            'addFoodSuccess',
            'addFoodFail',
            'deleteFoodSuccess',
            'deleteFoodFail',
            'finishFoodSuccess',
            'finishFoodFail',
            'updateName',
            'updateReason',
            'invalidName'
        );
    }

    findFood() {
        $.ajax({
            url: '/api/findFood',
        })
        .done((data) => {
            this.findFoodSuccess(data);
        })
        .fail((jqXhr) => {
            this.findFoodFail(jqXhr.responseJSON.message);
        })
    }
    
    addFood(name, reason) {
        $.ajax({
            type: 'POST',
            url: '/api/addFood',
            data: {
                foodname: name,
                foodreason: reason
            }
        })
        .done((data) => {
            this.addFoodSuccess(data);
        })
        .fail((jqXhr) => {
            this.addFoodFail(jqXhr.responseJSON.message);
        })
    }

    deleteFood(id) {
        $.ajax({
            type: 'POST',
            url: '/api/deleteFood',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.deleteFoodSuccess(data);
        })
        .fail((jqXhr) => {
            this.deleteFoodFail(jqXhr.responseJSON.message);
        })
    }

    finishFood(id) {
        $.ajax({
            type: 'POST',
            url: '/api/finishFood',
            data: {
                _id: id
            }
        })
        .done((data) => {
            this.finishFoodSuccess(data);
        })
        .fail((jqXhr) => {
            this.finishFoodFail(jqXhr.responseJSON.message);
        })
    }
}

export default alt.createActions(FoodActions);