import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search adm Users</h3>
                </section>
            </div>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);