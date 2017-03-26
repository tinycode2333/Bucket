import React, {Component} from 'react';
import PlanStore from '../stores/PlanStore';
import PlanActions from '../actions/PlanActions'
import classNames from 'classnames';
import styles from './Plan.css';

class Plan extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = PlanStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        PlanStore.listen(this.onChange);
        PlanActions.findGoal();
        this.setState(state)
    }

    componentWillUnmount() {
        PlanStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        var reason = this.state.reason;
        if (!name) {
            PlanActions.invalidName();
        } 

        if (name && reason) {
            PlanActions.addGoal(name, reason);
        }
    }
    
    render() {
        var goalListRender = this.state.goalList.map(function (item, index, array) {
                                return (
                                    <li className={item.isFinished ? styles.finish : ''}>{item.goalname} 
                                        <button className='btn btn-success' onClick={PlanActions.deleteGoal.bind(this, item._id)}>delete</button>
                                        <button className='btn btn-success'onClick={PlanActions.finishGoal.bind(this, item._id)}>finish</button>
                                    </li>
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
                            <button type='submit' className='btn btn-success'>Submit</button>
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