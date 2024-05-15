import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container1}>
        <Image
          source={require('../assets/ForgotLock2.png')}
          style={styles.lockImage}
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Forgot Password?</Text>
          <Text style={styles.subHeaderTitle}>
            <Text>Enter the email that you used {'\n'}</Text>
            <Text>when register to recover your password.{'\n'}</Text>
            <Text>You will receive a password reset link.</Text>
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.nameField}>Email Address*</Text>
          <View style={styles.inputbox}>
            <Image
              source={require('../assets/mail.jpg')}
              style={styles.image}
            />
            <TextInput
              style={styles.Input}
              placeholder="Enter Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('VerifyEmail')}>
              <LinearGradient
                colors={['#4E67FF', '#BE75E8']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>Send Link</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 90, padding: 20, gap: 30}}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Urbanist-Bold',
                color: '#000000',
                fontSize: 15,
              }}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              style={styles.buttonFooter}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonTextFooter}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFooter: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 6,
    borderColor: '#4E67FF',
  },
  buttonTextFooter: {
    textAlign: 'center',
    color: '#4E67FF',
    fontSize: 18,
    fontWeight: '500',
  },
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
    fontFamily: 'Urbanist-Bold',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
    color: '#000000',
    opacity: 0.3,
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

export default ForgotPassword;
