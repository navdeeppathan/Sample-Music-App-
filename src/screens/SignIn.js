import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Button,
  ViewBase,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain WhiteSpace.';
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have atleast one Uppercase.';
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have atleast one Lowercase.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must have atleast one Digit.';
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    const checkEmail = handleCheckEmail(email);
    if (!checkPassword && !checkEmail) {
      navigation.navigate('Home');
    } else {
      Alert.alert('checkEmail or checkpassword ');
    }
  };
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    // setEmail(text.toLowerCase())
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar hidden />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome!</Text>
        <Text style={styles.subHeaderTitle}>Sign in to your account</Text>
      </View>

      <View style={styles.inputFields}>
        <View>
          <Text style={styles.nameField}>Email Address*</Text>
          <View style={styles.inputbox}>
            <Image
              source={require('../assets/mail.jpg')}
              style={styles.image}
            />
            <TextInput
              style={styles.Input}
              onChangeText={text => handleCheckEmail(text)}
              placeholder="Enter Email Address"
              autoCapitalize="none"
              value={email}
            />
          </View>
          <View>{!checkValidEmail ? '' : <Text>Wrong Format email</Text>}</View>
        </View>

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.nameField}>Password*</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{color: '#2C4197', fontFamily: 'Urbanist-Bold'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputbox}>
            <Image
              source={require('../assets/lock.jpg')}
              style={styles.image}
            />
            <TextInput
              style={styles.Input}
              placeholder="Enter password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={seePassword}
            />
            <TouchableOpacity
              style={{right: 25}}
              onPress={() => setSeePassword(!seePassword)}>
              <Image
                style={{height: 17, width: 24}}
                source={
                  seePassword
                    ? require('../assets/eye.png')
                    : require('../assets/view.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View>
           <Button title='SignIn'/>
        </View> */}
        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <LinearGradient
              colors={['#4E67FF', '#BE75E8']}
              start={{x: 0.5, y: 0.2}}
              end={{x: 0.6, y: 1.5}}
              style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text
              style={{
                textAlign: 'center',
                color: '#99A1C6',
                fontFamily: 'Urbanist-Bold',
              }}>
              or continue with
            </Text>
            <View style={styles.line} />
          </View>
          <View>
            <TouchableOpacity style={styles.containerIcn}>
              <Image
                source={require('../assets/google.png')}
                style={styles.ImageIcon}
              />
              <Image
                source={require('../assets/facebook.png')}
                style={styles.ImageIcon}
              />
              <Image
                source={require('../assets/twitter.png')}
                style={styles.ImageIcon}
              />
              <Image
                source={require('../assets/linkedin.png')}
                style={styles.ImageIcon}
              />
              <Image
                source={require('../assets/instagram.png')}
                style={styles.ImageIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 60, padding: 20, gap: 30}}>
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
    </SafeAreaView>
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

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 7,
  },
  line: {
    fontFamily: 'Urbanist-Bold',
    marginTop: 5,
    flex: 0.35,
    height: 2,
    backgroundColor: '#99A1C6',
  },

  ImageIcon: {
    width: 36.27,
    height: 37,
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
  containerIcn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonGradient: {
    padding: 25,
    alignItems: 'center',
    borderRadius: 5,
  },
  container: {
    flexGrow: 1,
    height: '100%',
  },
  image: {
    marginRight: 10,
    marginLeft: 10,
  },
  Input: {
    fontFamily: 'Urbanist-Bold',
    color: '#0F1632',
    fontSize: 15,
    width: '85%',
    padding: 10,
  },
  header: {
    // flex:1,
    // justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4,
    paddingTop: 40,
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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    color: '#000000',
  },
  inputFields: {
    marginBottom: 12,
    top: 20,
    left: 33,
    height: 17,
    width: '85%',
    gap: 20,
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
    height: 48,
    borderColor: '#99A1C6',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    // justifyContent:'center',
    flexDirection: 'row',
  },
});

export default SignIn;
