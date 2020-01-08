import React,{Component} from 'react';
import './App.css';


class FormComponent extends Component {
  handleEditClick = () =>{
    
  }
  render(){
    return <div className="form-container">
      <div className="firstname">First Name:</div>
      <div className="lastname">Last Name:</div>
      <button id="edit-button" onClick={this.handleEditClick}>Edit</button>
      </div>
  }
}

class FolderComponent extends Component {
  handleToggleClick = () => {

  }
  render(){
    return <div className="folder-container">
      <h1>Home</h1>
      <ul>
        <li>File 1</li>
        <li>File 2</li>
        <li>File 3</li>
      </ul>
      <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>

    </div>
  }
}

function App() {
  return (
    <div className="App">
    <FormComponent />
    <FolderComponent />
    </div>
  );
}

export default App;
