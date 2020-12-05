import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
const size_ = Dimensions.get('window');

export default class ListItem extends PureComponent {

  render() {
    const {navigation,type,data} = this.props
    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.item, { height: type == "grid" ? 180 : 250, width: type == "grid" ? (size_.width / 2 - 20) : size_.width - 20 }]}
          onPress={() => navigation.navigate("Modal", { uri: data.item.url, title: data.item.title })}
        >
          <Image
            style={styles.image}
            source={{ uri: data.item.thumbnailUrl }}
            
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flex: 1,
    margin: 10,
    elevation: 10,
    borderRadius: 10
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    margin: 20,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textTransform: 'capitalize'
  },
  image:{ 
    width: "100%", 
    height: "100%", 
    borderRadius: 10, 
    backgroundColor:"#272727" 
  }
});
