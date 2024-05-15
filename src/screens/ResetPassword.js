import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);
  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    navigation.navigate('SignIn');
    Alert.alert('Passwords matched');
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{padding: 20, backgroundColor: '#FFFFFF'}}>
        <View style={styles.container1}>
          <Image
            source={require('../assets/Reset.png')}
            style={styles.lockImage}
          />
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Reset Password</Text>
            <Text style={styles.subHeaderTitle}>
              <Text>Enter your new password below,{'\n'}</Text>
              <Text>we’re just being extra safe.</Text>
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.nameField}>Password*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/lock.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Enter Password"
                secureTextEntry={seePassword}
                value={password}
                onChangeText={text => handlePasswordChange(text)}
              />
              <TouchableOpacity
                style={{right: 25}}
                onPress={() => setSeePassword(!seePassword)}>
                <Image
                  style={{height: 17, width: 24}}
                  source={
                    seePassword
                      ? require('../assets/hide.png')
                      : require('../assets/view.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.nameField}>Confirm Password *</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/lock.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Confirm Password"
                secureTextEntry={seeConfirmPassword}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
              />
              <TouchableOpacity
                style={{right: 25}}
                onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}>
                <Image
                  style={{height: 17, width: 24}}
                  source={
                    seeConfirmPassword
                      ? require('../assets/hide.png')
                      : require('../assets/view.png')
                  }
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: 'Urbanist-Bold',
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#000000',
                }}>
                Password must contain
              </Text>
              <Text
                style={{
                  fontFamily: 'Urbanist-Medium',
                  fontWeight: '300',
                  fontSize: 14,
                  color: '#000000',
                }}>
                8 characters or longer. Combine upper and{'\n'}lowercase letters
                and number.
              </Text>
            </View>

            <View style={{marginTop: 90}}>
              <TouchableOpacity onPress={handleSubmit}>
                <LinearGradient
                  colors={['#4E67FF', '#BE75E8']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 1}}
                  style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>Save Changes</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGradient: {
    padding: 25,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 15,

    position: 'absolute',
  },
  container1: {
    alignItems: 'center',
    marginTop: 20,
  },
  lockImage: {},
  header: {
    // flex:1,
    // justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4,
    paddingTop: 20,
  },

  headerTitle: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 31.21,
    textAlign: 'center',
    color: '#000000',
  },
  subHeaderTitle: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    color: '#000000',
  },
  emailContainer: {
    marginTop: 40,
    padding: 10,
    gap: 10,
  },
  nameField: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    lineHeight: 16.8,
    color: '#000000',
  },
  inputbox: {
    width: '100%',
    height: 56,
    borderColor: '#99A1C6',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    // justifyContent:'center',
    flexDirection: 'row',
  },
  Input: {
    fontFamily: 'Urbanist-Bold',
    color: '#0F1632',
    fontSize: 15,
    width: '85%',
    padding: 10,
  },
  image: {
    marginRight: 5,
    marginLeft: 15,
  },
});

export default ResetPassword;

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

// const ResetPassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//   };

//   const handleSubmit = () => {
//     if (password !== confirmPassword) {
//       Alert.alert('Passwords do not match');
//       return;
//     }

//     Alert.alert('Passwords matched');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={handlePasswordChange}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry={true}
//         value={confirmPassword}
//         onChangeText={handleConfirmPasswordChange}
//       />
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     fontSize: 16,
//     width: 300,
//     marginBottom: 10,
//   },
// });

// export default ResetPassword;
