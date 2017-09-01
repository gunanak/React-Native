import React, { Component } from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class PageTwo extends Component {
    constructor(props){
        super(props)
    }
 render() {
    return (
    <View style={styles.container} >
        <Text style={styles.head}>{this.props.title}</Text>
        <Image source={{uri: this.props.book_image}}/>
        <Text>Author: {this.props.author}</Text>
        <Text>Description: {this.props.description}</Text>
    </View>
    )
}
}

const styles = StyleSheet.create({
 container: {
    backgroundColor:"#ffffff",
    flex:1,
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:5,
  },
  head:{
    fontSize:20,
    marginLeft:50
  },
  image:{
      width:80
  }

})