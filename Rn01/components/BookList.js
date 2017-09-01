import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BooksDetail from './BooksDetail'
import { Router, Scene } from 'react-native-router-flux';
// import PageOne from './PageOne';
// import PageTwo from './PageTwo';


let book = [{ }]
export default class BookList extends React.Component {
  constructor (props) {
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = { 
      dataSource: ds.cloneWithRows(book)
    }
  }

  componentWillMount(){
    fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9%3A2%3A60667290')
    .then((response) => response.json())
     .then((responseJSON) => {
      book = responseJSON.results.books;
      // console.log(book)
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(book)
      });
            
     });
  }

  _renderRow = rowData=>{
    // return <Text>{rowData.title} <Text style={{fontWeight:'bold'}}>{rowData.author}</Text></Text>
    return <BooksDetail {...rowData} />
  }
  render() {
    return (
       <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 22
  },
});