import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Pinchable from './../microComponents/Pinchable';

class ModalView extends Component {
  render() {
      const {uri} = this.props.route.params
      const {navigation} = this.props
    return (
      <View style={styles.container}>
          <Pinchable uri={uri}/>
          <Button onPress={() => navigation.goBack()} title="Dismiss"/>
      </View>
    );
  }
}

export default ModalView;

const styles = StyleSheet.create({
  container:{
    display:'flex', 
    flex:1, 
    alignItems:'center', 
    justifyContent:"space-evenly", 
    backgroundColor:'#272727'
  }
})