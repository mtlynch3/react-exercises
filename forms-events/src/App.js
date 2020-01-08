import React,{Component} from 'react';
import './App.css';

class FormComponent extends Component {
  constructor(){
    super();
    this.state={
      firstname: '',
      lastname: '',
      showform: false
    }
  }
  handleEditClick = () => {
    this.setState({showform: true});
  }
  save = () => {}
  cancel = () => {}

  
  render(){
    if(this.state.showform){
      return <div className="edit-form-container">
        <input className="edit-firstname" placeholder/>
        <input className="edit-lastname" placeholder/>
        <button className="save-button" onClick={this.save}>Save</button>
        <button className="cancel-button" onClick={this.cancel}>Cancel</button>
      </div>
    }else{
    return <div className="form-container">
      <div className="firstname">First Name:</div>
      <div className="lastname">Last Name:</div>
      <button id="edit-button" onClick={this.handleEditClick}>Edit</button>
      </div>}
  }
}

class FolderComponent extends Component {
  constructor(){
    super();
    this.state = {
      showlist: true 
    }
  }
  handleToggleClick = () => {
    this.setState({showlist: !this.state.showlist})

  }
  render(){
    if(this.state.showlist){
      return <div className="folder-container">
        <h1>Home</h1>
        <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
        <ul>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>

      </div>
    } else {
        return <div className="folder-container">
        <h1>Home</h1>
        <button id="toggle-button" onClick={this.handleToggleClick}>Toggle</button>
      </div>
    }
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
