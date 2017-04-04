import React, {Component} from 'react';
import SportStore from '../stores/SportStore';
import SportActions from '../actions/SportActions'
import classNames from 'classnames';
import styles from './Sport.css';

class Sport extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = SportStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SportStore.listen(this.onChange);
        SportActions.findSport();
        this.setState(state)
    }

    componentWillUnmount() {
        SportStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        var reason = this.state.reason;
        if (!name) {
            SportActions.invalidName();
        } 

        if (name && reason) {
            SportActions.addSport(name, reason);
        }
    }
    
    render() {
        var sportListRender = this.state.sportList.map(function (item, index, array) {
                                return (
                                    <li className={item.isFinished ? styles.finish : ''}>{item.sportname} 
                                        <button className='btn btn-warning' onClick={SportActions.deleteSport.bind(this, item._id)}>delete</button>
                                        <button className='btn btn-warning'onClick={SportActions.finishSport.bind(this, item._id)}>finish</button>
                                    </li>
                                );
                            });
        return (
            <div className={styles.sport}>
                <div className='panel panel-warning'>
                    <div className='panel-heading'>运动记录</div>
                    <div className='panel-body'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>又锻炼了</h3>
                            <div className='field required'>
                                <label >运动名称:</label>
                                <input type='text'  value={this.state.name} onChange={SportActions.updateName} />
                            </div>
                            <div className='field'>
                                <label >运动量:</label>
                                <input type='text' value={this.state.reason} onChange={SportActions.updateReason} />
                            </div>
                            <span className='help-block'>{this.state.helpBlock}</span>
                            <button type='submit' className='btn btn-warning'>Submit</button>
                        </form>
                        <div>
                            <h3>现有目标</h3>
                            <ul>{sportListRender}</ul>   
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Sport;