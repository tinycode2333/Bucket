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
        var password = this.state.password;
        if (!name) {
            PlanActions.invalidName();
            this.refs.nameTextField.focus();
        } else if (!password) {
            PlanActions.invalidPassword();
        } 

        if (name && password) {
            PlanActions.getUser(name, password);
        }
    }
    
    render() {
        return (
            <div className={styles.plan}>
                <div className='panel panel-success'>
                    <div className='panel-heading'>人生规划</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h2>添加新目标</h2>
                            <div className='field required'>
                                <label >目标名称</label>
                                <input type='text'  value={this.state.name} onChange={PlanActions.updateName} />
                            </div>
                            <div className='field'>
                                <label >说服自己做的理由</label>
                                <input type='textarea'  value={this.state.reason} onChange={PlanActions.updateReason}/>
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                        <div>
                            <h2>现有目标</h2>
                            <ul>
                                {
                                    this.state.goalList.map((item, index) => {
                                        return (
                                            <li>{item.goalname}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Plan;