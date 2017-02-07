import React from 'react';
import Footer from './Footer';
import Head from './Head';
import Home from './Home';
// import Navbar from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Head />
        {/*{this.props.children}*/}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;