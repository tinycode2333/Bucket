import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import styles from './Health.css';

class Health extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className={styles.health}>
          <Link to="/plan"><div className={styles.bmi}>身高体重记录</div></Link>
          <Link to="/plan"><div className={styles.food}>饮食记录</div></Link>
          <Link to="/plan"><div className={styles.sport}>运动记录</div></Link>
      </div>
    );
  }
}

export default Health;