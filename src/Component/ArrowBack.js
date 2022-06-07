import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ArrowBack = ({navigation}) => {
  return (
    <View style={[styles.view]}>
      <TouchableOpacity onPress={() => navigation.goBack('Home')}>
        <MaterialIcons name="arrow-back-ios" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ArrowBack;

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 30,
  },
});
