import React, { Component } from "react";
import './App.css';
import Contacts from "./contacts";
import axios from 'axios';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      contacts: []
    };
  }

  // componentDidMount = () => {
  //   fetch( "http://jsonplaceholder.typicode.com/users" )
  //     .then( res => res.json() )
  //     .then( ( data ) => {
  //       this.setState( { contacts: data } )
  //     } )
  //     .catch( console.log )
  // }
  componentDidMount = () => {
    axios.get( "http://jsonplaceholder.typicode.com/users" )
      .then( ( data ) => {
        this.setState( { contacts: data } )
      } )
      .catch( console.log )
  }

  render() {
    return (
      <div className="App">
        <Contacts contactsData={this.state.contacts} />
      </div>
    );

  }
}

export default App;
