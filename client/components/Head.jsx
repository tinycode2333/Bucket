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
        <Link to="/"><div className={styles.logo}></div></Link>
        <div className={styles.navbar}>
          <ul>
            <Link to="/plan"><li>人生规划</li></Link>
            <Link to="##"><li>身体管理</li></Link>
            <Link to="##"><li>工作管理</li></Link>
            <Link to="/emotion"><li>情绪管理</li></Link>
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