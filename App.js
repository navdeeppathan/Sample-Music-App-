import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageSlider from './src/screens/ImageSlider';
import HomeNavigation from './src/screens/Navigation/HomeNavigation';

const App = () => {
  const images = [
    require('./src/assets/first.jpg'),
    require('./src/assets/second.jpg'),
    require('./src/assets/third.jpg'),
  ];

  return (
    <View style={styles.container}>
      {/* <ImageSlider images={images}/>  */}
      <HomeNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
