import React from 'react';
import { ScrollView, Image, View, StyleSheet } from 'react-native';

const ImageScreen = () => {
  const images = [
    { uri: 'https://example.com/image1.jpg' },
    { uri: 'https://example.com/image2.jpg' },
    { uri: 'https://example.com/image3.jpg' },
    { uri: 'https://example.com/image4.jpg' },
    { uri: 'https://example.com/image5.jpg' },
    { uri: 'https://example.com/image6.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      {images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default ImageScreen;
