import React, { Component } from 'react';
// import { Form, Header, Container, List, Input, Segment } from 'semantic-ui-react';
import TranslatorWidget from 'react-translate-widget';

class App extends Component {
  state = { name: '', todos: [] }

  

  render() {
   

    return (
      <div>
        <TranslatorWidget sourceLanguageCode="en" className="translator"/>
        <h1>Hello Frenchie, my name is Bill</h1>
      </div>
    );
  }
}

export default App;