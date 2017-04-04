import React, {Component} from 'react';
import EmotionStore from '../stores/EmotionStore';
import EmotionActions from '../actions/EmotionActions'
import classNames from 'classnames';
import styles from './Emotion.css';

class Emotion extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = EmotionStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        EmotionStore.listen(this.onChange);
    }

    componentWillUnmount() {
        EmotionStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = this.state.name;
        var reason = this.state.reason;
        if (!name) {
            EmotionActions.invalidName();
        } 

        if (name && reason) {
            EmotionActions.addEmotion(name, reason);
        }
    }
    
    render() {
        return (
            <div className={styles.emotion}>
                <div className='panel panel-warning'>
                    <div className='panel-heading'>感受宁静</div>
                    <div className='panel-body'>
                        <div>
                            <h3>正念冥想</h3>
                            <audio controls >
                                <source src="/audio/01.mp3" type="audio/mpeg" />
                                <source src="/audio/01.ogg" type="audio/ogg" />
                                Your browser does not support this audio format.
                            </audio>
                        </div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <h3>添加情绪</h3>
                            <div className='field required'>
                                <label >情绪名称:</label>
                                <input type='text'  value={this.state.name} onChange={EmotionActions.updateName} />
                            </div>
                            <div className='field'>
                                <label >造成此情绪的原因:</label>
                                <textarea rows="5" cols="50"  value={this.state.reason} onChange={EmotionActions.updateReason}></textarea>
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

export default Emotion;