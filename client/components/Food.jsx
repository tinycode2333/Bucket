import React, {Component} from 'react';
import FoodStore from '../stores/FoodStore';
import FoodActions from '../actions/FoodActions'
import classNames from 'classnames';
import styles from './Food.css';

class Food extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = FoodStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FoodStore.listen(this.onChange);
        FoodActions.findFood();
        this.setState(state)
    }

    componentWillUnmount() {
        FoodStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        var reason = this.state.reason;
        if (!name) {
            FoodActions.invalidName();
        } 

        if (name && reason) {
            FoodActions.addFood(name, reason);
        }
    }
    
    render() {
        var foodListRender = this.state.foodList.map(function (item, index, array) {
                                return (
                                    <li className={item.isFinished ? styles.finish : ''}>{item.foodname} 
                                        <button className='btn btn-warning' onClick={FoodActions.deleteFood.bind(this, item._id)}>delete</button>
                                        <button className='btn btn-warning'onClick={FoodActions.finishFood.bind(this, item._id)}>finish</button>
                                    </li>
                                );
                            });
        return (
            <div className={styles.food}>
                <div className='panel panel-warning'>
                    <div className='panel-heading'>饮食记录</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>又吃东西了</h3>
                            <div className='field required'>
                                <label >食品名称:</label>
                                <input type='text'  value={this.state.name} onChange={FoodActions.updateName} />
                            </div>
                            <div className='field'>
                                <label >食用感受:</label>
                                <textarea rows="5" cols="50"  value={this.state.reason} onChange={FoodActions.updateReason}></textarea>
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-warning'>Submit</button>
                        </form>
                        <div>
                            <h3>现有目标</h3>
                            <ul>{foodListRender}</ul>   
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Food;