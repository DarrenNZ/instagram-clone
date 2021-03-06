import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';

import Header from './components/Header';
import Posts from './components/Posts';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component{

  constructor(){
    super();
    // connect to pusher
    this.pusher = new Pusher("0074069054a09062ece1", {
     cluster: 'eu',
     encrypted: true
    });
  }

  componentDidMount(){
    if ('actions' in Notification.prototype) {
      console.log('You can enjoy notification feature');
    } else {
      console.log('Sorry notifications are NOT supported on your browser');
    }
}
  
render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <section className="App-main">
        <Posts pusher={this.pusher} apollo_client={client}/>
        </section>
      </div>
    </ApolloProvider>
    );  
  }
}
export default App;
