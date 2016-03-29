import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return (
      <div>
        <h1> Test to see if it works </h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
