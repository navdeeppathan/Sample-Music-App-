import React, {useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const VerifyEmail = ({navigation}) => {
  const inputRefs = useRef([]);

  const focusNextInput = index => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      focusNextInput(index);
    }
  };

  return (
    <View style={{padding: 10, backgroundColor: '#FFFFFF'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/verify.png')}
          style={styles.lockImage}
        />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Verify Email</Text>
          <Text style={styles.subHeaderTitle}>
            <Text>We have sent the 6-digit OTP{'\n'}</Text>
            <Text>to your registered email address{'\n'}</Text>
            <Text style={{fontWeight: '900'}}>nickverlice@gmail.com</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        {[...Array(6).keys()].map(index => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            ref={ref => (inputRefs.current[index] = ref)}
            onChangeText={text => handleInputChange(text, index)}
          />
        ))}
      </View>
      <View style={{paddingHorizontal: 24}}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <LinearGradient
            colors={['#4E67FF', '#BE75E8']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Verify</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{fontFamily: 'Urbanist-Bold', color: '#000000'}}>
          You will receive OTP within{' '}
          <Text style={{color: '#FF0000'}}>02:00</Text> mins
        </Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginTop: 20,
    padding: 20,
    left: 5,
    gap: 10.5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B6CDE1',
    borderRadius: 6,
    padding: 10,
    width: 45,
    height: 56,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Urbanist-Bold',
    fontWeight: '500',
  },

  header: {
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
});

export default VerifyEmail;
