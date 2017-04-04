import React, {Component} from 'react';
import BMIStore from '../stores/BMIStore';
import BMIActions from '../actions/BMIActions'
import classNames from 'classnames';
import styles from './BMI.css';

class BMI extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = BMIStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        BMIStore.listen(this.onChange);
        BMIActions.findBMI();
        this.setState(state);
    }

    componentWillUnmount() {
        BMIStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var height = this.state.height;
        var weight = this.state.weight;
        if (!height) {
            BMIActions.invalidHeight();
        } else if (!weight) {
            BMIActions.invalidWeight();
        }

        if (height && weight) {
            BMIActions.updateBMI(height, weight);
        }
    }
    
    render() {
        return (
            <div className={styles.bmi}>
                <div className='panel panel-warning'>
                    <div className='panel-heading'>BMI</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className='field required'>
                                <label >身高:</label>
                                <input type='text'  value={this.state.height} onChange={BMIActions.updateHeight} />
                            </div>
                            <div className='field'>
                                <label >体重:</label>
                                <input type='text'  value={this.state.weight} onChange={BMIActions.updateWeight} />
                            </div>
                            <div >
                                <label >BMI:</label>
                                <span type='text'>{this.state.bmi}</span>
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-warning'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>  
        );
    }
}

export default BMI;