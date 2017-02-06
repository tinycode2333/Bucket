import React from 'react';
import {Link} from 'react-router';
import HeadStore from '../stores/HeadStore'
import HeadActions from '../actions/HeadActions';
import classNames from 'classnames';
import styles from './Head.css';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

class Head extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = HeadStore.getState();
//     this.onChange = this.onChange.bind(this);
//   }

//   componentDidMount() {
//     HeadStore.listen(this.onChange);
//   }

//   componentWillUnmount() {
//     HeadStore.unlisten(this.onChange);
//   }

//   onChange(state) {
//     this.setState(state);
//   }

  render() {

    return (
      <header className={ styles.header }>
        <div className={classNames( styles.logo, 'btn',  "btn-warning")}>嘿嘿嘿</div>
        <div className={ styles.navbar }></div>
      </header>
    );
  }
}

export default Head;