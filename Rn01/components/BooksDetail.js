import React from 'react';
import { StyleSheet, Text, View, ListView, Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class BooksDetail extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const goToPageTwo = () => Actions.pageTwo({...this.props});
        return (
            <TouchableHighlight onPress={goToPageTwo}> 
            <View style={styles.container} >
                <Image source={{uri: this.props.book_image}} style={styles.image} resizeMode="contain"/>
                <View style={styles.content}>
                    <Text style={styles.authorText}>{this.props.author}</Text>   
                    <Text>{this.props.title}</Text>
                </View>
            </View>
            </TouchableHighlight>
            )
        }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#d8d8d8",
    height:100,
    flexDirection:'row',
    borderColor: '#ffffff',
    borderWidth:2,
  },
  image:{
      width:80,
    //   flex:1
  },
  content:{
     marginLeft:30
  },
  authorText:{
      color:"#555555",
      fontStyle:"italic",
  }
});