import React, { Component } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import ListItem from "../microComponents/ListItem";

export default class FlatListComp extends Component {

  render() {
    const {navigation, type, data, onEndReached} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={(item) => <ListItem data={item} navigation={navigation} type={type} />}
          keyExtractor={(item) => String(item.id)}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          key={type}
          numColumns={type=="grid"?2:1}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
});
