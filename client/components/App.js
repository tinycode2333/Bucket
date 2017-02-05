import React from 'react';
// import Footer from './Footer';
// import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>heiheihei</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;