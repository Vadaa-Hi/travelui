import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export function MyCoolButton({text, onPress, props}) {
  return (
    <TouchableOpacity style={styles.input} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default MyCoolButton;

const styles = StyleSheet.create({
  input: {},
});
