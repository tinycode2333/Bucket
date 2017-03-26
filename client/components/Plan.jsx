import React, {Component} from 'react';
import PlanStore from '../stores/PlanStore';
import PlanActions from '../actions/PlanActions'
import classNames from 'classnames';
import styles from './Plan.css';
import _ from 'lodash';

class Plan extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = PlanStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PlanStore.listen(this.onChange);
    }

    componentWillUnmount() {
        PlanStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(2233333);
        var name = this.state.name;
        var reason = this.state.reason;
        if (!name) {
            PlanActions.invalidName();
        } 

        if (name && reason) {
            console.log(2233333);
            PlanActions.addGoal(name, reason);
        }
    }
    
    render() {
        var goalListRender = _.map(this.state.goalList, function (item, index, array) {
                                return (
                                    <li>{item.goalname}</li>
                                );
                            });
        return (
            <div className={styles.plan}>
                <div className='panel panel-success'>
                    <div className='panel-heading'>人生规划</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>添加新目标</h3>
                            <div className='field required'>
                                <label >目标名称:</label>
                                <input type='text'  value={this.state.name} onChange={PlanActions.updateName} />
                            </div>
                            <div className='field'>
                                <label >说服自己做的理由:</label>
                                <textarea rows="5" cols="50"  value={this.state.reason} onChange={PlanActions.updateReason}></textarea>
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                        <div>
                            <h3>现有目标</h3>
                            <ul>{goalListRender}</ul>   
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Plan;