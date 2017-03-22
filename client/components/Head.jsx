import React from 'react';
import {Link} from 'react-router';
import HeadStore from '../stores/HeadStore'
import HeadActions from '../actions/HeadActions';
import classNames from 'classnames';
import styles from './Head.css';

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = HeadStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeadStore.listen(this.onChange);
    HeadActions.findLogin();
    this.setState(state);
  }

  componentWillUnmount() {
    HeadStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick() {
    HeadActions.logout();
  }

  render() {

    return (
      <header className={styles.header}>
        <div className={styles.logo}></div>
        <div className={styles.navbar}>
          <ul>
            <li><Link to="/plan">人生规划</Link></li>
            <li><Link to="##">身体管理</Link></li>
            <li><Link to="##">工作管理</Link></li>
            <li><Link to="##">情绪管理</Link></li>
            {/*<li><Link to="##">新闻推送</Link></li>*/}
          </ul>
        </div>
        <div>
          {
            this.state.isLogin ?
            <div>
              <div className={styles.right}><Link onClick={this.handleClick}>登出</Link></div>
              <div className={styles.right}>{this.state.username}</div>
              <img src={"/img/avatar/" + this.state.avatar}/>
            </div>
             :
            <div>
              <div className={styles.right}><Link to="/login">登录</Link></div>
              <div className={styles.right}><Link to="/register">注册</Link></div>
            </div>   
          }
        </div>       
      </header>
    );
  }
}

export default Head;