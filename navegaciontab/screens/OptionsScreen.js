import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OptionsScreen = () => {
  const options = [
    { key: 'Opción 1' },
    { key: 'Opción 2' },
    { key: 'Opción 3' },
    { key: 'Opción 4' },
    { key: 'Opción 5' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={({ item }) => <Text style={styles.option}>{item.key}</Text>}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OptionsScreen;
