import React from 'react';
import Footer from './Footer';
import Head from './Head'
// import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;