import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>
      {} {item.order}. {item.title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 250,
  },
  title: {
    fontSize: 30,
  },
});
export default Item;
