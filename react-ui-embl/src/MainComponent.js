import React, { Component, Fragment } from 'react';
import './MainComponent.css';
import CreateComponent from './CreateComponent';
import ViewComponent from './ViewComponent';

export default class MainComponent extends Component{
  constructor(){
    super();
    this.state = {
      viewFlag: false,
      createFlag: false
    }
  }

  viewClick = () => {
    console.log('View Clicked');
    this.setState({viewFlag: true, createFlag: false});
  }

  addClick = () => {
    console.log('View Clicked');
    this.setState({viewFlag: false, createFlag: true});
  }

  render = () => {
    let view = this.state.viewFlag;
    let add = this.state.createFlag;
    return (
      <div className="App">
        <header className="App-header">
          <span>
            Person Crud Application
          </span>
        </header>
        <div >
          <button className="btn-view" onClick={() => this.viewClick()}> View Person List </button>
          <button className="btn-view" onClick={() => this.addClick()}> Create Person </button>
          { this.state.viewFlag && <ViewComponent></ViewComponent> }
          { this.state.createFlag && <CreateComponent></CreateComponent> }
        </div>
      </div>
    );
  }
}
