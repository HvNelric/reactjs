import React, { Component } from 'react';

import Message from './Message';
import Formulaire from './Formulaire';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="box">
          <div>
            <div className="messages">
              <Message pseudo="HvN" />
            </div>
            <Formulaire />
          </div>
        </div>
    );
  }
}

export default App;
