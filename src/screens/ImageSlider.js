import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = ({navigation}) => {
  const images = [
    require('../assets/first.jpg'),
    require('../assets/second.jpg'),
    require('../assets/third.jpg'),
  ];
  return (
    <Swiper
      showsButtons={false}
      paginationStyle={{paddingBottom: 250}}
      dotStyle={{backgroundColor: 'gray'}}
      activeDotColor="white"
      dotColor="white">
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>
            <Text>Find the world’s best {'\n'} </Text>
            <Text>
              {' '}
              music <Text style={{color: '#00CDFE'}}>freelance service</Text>,
            </Text>
            <Text> {'\n'} right away</Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.98)',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(78, 103, 255, 1),rgba(190, 117, 232, 1)',
    opacity: 0.7,
  },
  button: {
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    borderColor: '#ffff',
  },
  buttonText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    lineHeight: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    fontFamily: 'Urbanist-Bold',
    fontWeight: '500',
    marginBottom: 60,
    marginTop: 400,
    paddingTop: 40,
  },
});

export default ImageSlider;
