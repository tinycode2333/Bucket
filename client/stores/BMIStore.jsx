import alt from '../alt';
import BMIActions from '../actions/BMIActions';

class BMIStore {
    constructor () {
        this.bindActions(BMIActions);
        this.height = '';
        this.weight = '';
        this.bmi = '';
        this.helpBlock = '身高（kg）\/ 体重（m)';
    }

    onFindBMISuccess(data) {
        this.height = data.height;
        this.weight = data.weight;
        this.bmi = this.weight / this.height / this.height;
        this.bmi = this.bmi.toFixed(2);
    }

    onFindBMIFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateBMISuccess(successMessage) {
        this.helpBlock = successMessage;
        this.bmi = this.weight / this.height / this.height;
        this.bmi = this.bmi.toFixed(2);
    }

    onUpdateBMIFail(errorMessage) {
        this.helpBlock = errorMessage;
    }

    onUpdateHeight(event) {
        this.height = event.target.value;
        this.helpBlock = '';
    }

    onUpdateWeight(event) {
        this.weight = event.target.value;
        this.helpBlock = '';
    }

    onInvalidHeight() {
        this.helpBlock = 'plase input your height';
    }

    onInvalidWeight() {
        this.helpBlock = 'plase input your weight';
    }

}

export default alt.createStore(BMIStore);