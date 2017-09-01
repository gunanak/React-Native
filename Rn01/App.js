import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
// import BookDetail from './components/BookDetail'
import BookList from './components/BookList'
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './components/PageTwo';



export default class App extends React.Component {

  render() {
    return (
      
        <Router>
          <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="Book List" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          </Scene>
          </Router>

    );
  }
}

