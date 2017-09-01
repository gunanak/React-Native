import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BookList from './components/BookList'
export default class PageOne extends Component {
    render() {
        
        return (
           <View style={styles.container}>
                <BookList/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent: 'center',
    borderColor: '#f7f7f7',
    borderWidth: 5,

  },
});