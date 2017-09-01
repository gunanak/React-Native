import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const Hi = (props) =>(
//   <text>Hi {props.name}</text>
// );

class Hi extends React.Component {
    constructor(props){
      super(props)
      this.state = {beBold: true};
    }
     toggleBold = () => {
          let beBold = !this.state.beBold;
          this.setState({beBold: beBold});
    }
    render(){
        return(
            <text style={this.state.bebold ? styles.bold:styles.notBold}
            onPress = {this.toggleBold}>
              
              Hi {this.props.name}
            </text>
        )
    }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight : "bold"
  },
  notBold:{

  }
});

export default Hi;