import React, {Component} from 'react';
import WorkStore from '../stores/WorkStore';
import WorkActions from '../actions/WorkActions'
import classNames from 'classnames';
import styles from './Work.css';
import moment from 'moment';

class Work extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = WorkStore.getState();
        this.onChange = this.onChange.bind(this);
        this.tm = undefined;
    }

    componentDidMount() {
        WorkStore.listen(this.onChange);
        WorkActions.findToDo();
        this.setState(state);
    }

    componentWillUnmount() {
        WorkStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleCount(haveCount) {
        if (haveCount == 0) {
            this.tm = setInterval(() => {
            WorkActions.updateCount(this.state.count - 1000);
            if (this.state.count <= 0) {
                clearInterval(this.tm);
                let audio = new Audio("/audio/02.mp3");
                audio.play();
            }
        }, 1000);
        } else if (haveCount == 1) {
             clearInterval(this.tm);
        } else {
            clearInterval(this.tm);
            WorkActions.updateCount(25*60*1000);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        if (!name) {
            WorkActions.invalidName();
        } 

        if (name) {
            WorkActions.addToDo(name);
        }
    }
    
    render() {
        let toDoListRender = this.state.toDoList.map(function (item, index, array) {
                                return (
                                    <li className={item.isFinished ? styles.finish : ''}>{item.workname} 
                                        <button className='btn btn-danger' onClick={WorkActions.deleteToDo.bind(this, item._id)}>delete</button>
                                        <button className='btn btn-danger' onClick={WorkActions.finishToDo.bind(this, item._id)}>finish</button>
                                    </li>
                                );
                            });
        return (
            <div className={styles.work}>
                <div className='panel panel-danger'>
                    <div className='panel-heading'>Time to Work</div>
                    <div className='panel-body'>
                        <div>
                            <h3>番茄计时</h3>
                            <div className={styles.tomatoTime}>{moment(this.state.count).format('mm:ss')}</div>
                            <button className='btn btn-danger' onClick={this.handleCount.bind(this, 0)}>time start</button>
                            <button className='btn btn-danger' onClick={this.handleCount.bind(this, 1)}>time stop</button>
                            <button className='btn btn-danger' onClick={this.handleCount.bind(this, 2)}>time reset</button>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>添加工作</h3>
                            <div className='field required'>
                                <label >工作名称:</label>
                                <input type='text'  value={this.state.name} onChange={WorkActions.updateName} />
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-danger'>Submit</button>
                        </form>
                        <div>
                            <h3>To Do 列表</h3>
                            <ul>{toDoListRender}</ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;