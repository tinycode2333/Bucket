import alt from '../alt';
import FoodActions from '../actions/FoodActions';

class FoodStore {
    constructor () {
        this.bindActions(FoodActions);
        this.name = '';
        this.reason = '';
        this.foodList = [];
        this.helpBlock = '';
    }

    onFindFoodSuccess(data) {
        this.foodList = data.foods;
    }

    onFindFoodFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onAddFoodSuccess(data) {
        this.foodList = data.foods;
        this.helpBlock = data.message;
    }

    onAddFoodFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onDeleteFoodSuccess(data) {
        this.foodList = data.foods;
        this.helpBlock = data.message;
    }

    onDeleteFoodFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onFinishFoodSuccess(data) {
        this.foodList = data.foods;
        this.helpBlock = data.message;
    }

    onFinishFoodFail(errorMessage) {
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
        this.helpBlock = 'plase input the foodname';
    }

}

export default alt.createStore(FoodStore);