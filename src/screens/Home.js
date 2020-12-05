import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FlatListComp from "../components/FlatListComp";
import { connect } from 'react-redux';
import { getImages } from './../store/actions';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      type: "list",
      itemsToShow: 20,
      isReady: false,
      dataToShow: []
    };
  }

  async componentDidMount() {
    const { itemsToShow, isReady } = this.state;
    await this.props.getImages();
    !isReady && this.props.data && this.props.data.length > 0 && this.setState({ isReady: true, dataToShow: this.props.data.slice(0, itemsToShow) })
  }

  onEndReached = () => {
    const { dataToShow, itemsToShow } = this.state;
    this.setState({ itemsToShow: itemsToShow + 30, dataToShow: this.props.data.slice(0, itemsToShow + 30) })
  }

  handleSwitch = (type) => {
    this.setState({ type, dataToShow: this.props.data.slice(0, 20) })
  }

  render() {
    const { type, dataToShow, isReady } = this.state;
    return (
      <View style={{ display: 'flex', flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Problem 1</Text>
          <View style={styles.switch}>
            <Icon style={styles.icons} name="th" size={24} color={type == "grid" ? "#007AE5" : "#D6D6D6"} onPress={() => this.handleSwitch("grid")} />
            <Icon style={styles.icons} name="list" size={24} color={type == "list" ? "#007AE5" : "#D6D6D6"} onPress={() => this.handleSwitch("list")} />
          </View>
        </View>
        {
          dataToShow.length > 0 ?
            <FlatListComp data={dataToShow} navigation={this.props.navigation} type={type} onEndReached={this.onEndReached} />
            :
            <View style={styles.message}>
              {
                isReady ? <Text>No data to show</Text> : <Text>Loading Images ...</Text>
              }
            </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ data: state.images });
const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272727'
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    alignContent: 'center',
    margin: 20
  },
  switch: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    marginHorizontal: 10,
  },
  message:{
    display: 'flex', 
    flex: 1, 
    justifyContent:'center', 
    alignItems:"center", 
    alignSelf:'center'
  }
});