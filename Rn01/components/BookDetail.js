import React from 'react';
import { StyleSheet, Text, View, ListView, Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

doIt=()=>{
    console.log(this.props)
}

const BookDetail = (props) => (
    
    <TouchableHighlight onPress={goToPageTwo}> 
    <View style={styles.container} >
        <Image source={{uri: props.book_image}} style={styles.image} resizeMode="contain"/>
        <View >
            <Text style={styles.authorText}>{props.author}</Text>   
            <Text>{props.title}</Text>
        </View>
    </View>
    </TouchableHighlight>
    const goToPageTwo = () => Actions.pageTwo({...this.props});
)
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
  detailContainer:{
     flex:3,
     justifyContent:"center"
  },
  authorText:{
      color:"#555555",
      fontStyle:"italic",
  }
});

export default BookDetail;